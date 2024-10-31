import {
  ListObjectsV2Command,
  GetObjectCommand,
  DeleteObjectCommand,
} from "@aws-sdk/client-s3";
import { Request, Response } from "express";
import s3Client, { BUCKET_NAME } from "../config/s3service";
import { Readable } from "node:stream";

export async function listPost(req: Request, res: Response) {
  try {
    const command = new ListObjectsV2Command({ Bucket: BUCKET_NAME });
    const response = await s3Client.send(command);
    if (!response || !response.Contents) {
      throw new Error("Error retrieving list.");
    }
    const keys = response.Contents.map((item) => item.Key);
    res.json(keys);
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
}

export async function downloadFile(req: Request, res: Response) {
  const { filename } = req.params;
  try {
    const command = new GetObjectCommand({
      Bucket: BUCKET_NAME,
      Key: filename,
    });
    const response = await s3Client.send(command);

    if (response && response.Body) {
      // Configura o cabeçalho de resposta para download
      res.setHeader(
        "Content-Disposition",
        `attachment; filename="${filename}"`
      );
      res.setHeader(
        "Content-Type",
        response.ContentType || "application/octet-stream"
      );

      // Usa Readable.from para garantir que o Body seja um stream legível
      const bodyStream =
        response.Body instanceof Readable
          ? response.Body
          : Readable.from(response.Body as any);

      // Pipe do conteúdo para a resposta
      bodyStream.pipe(res);
    } else {
      res.status(404).send("File Not Found");
    }
  } catch (error) {
    console.error(error);
    res.status(404).send("File Not Found");
  }
}

export async function deleteFile(req: Request, res: Response) {
  const { filename } = req.params;

  try {
    const command = new DeleteObjectCommand({
      Bucket: BUCKET_NAME,
      Key: filename,
    });
    await s3Client.send(command);
    res.send("File Deleted Successfully");
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
}
