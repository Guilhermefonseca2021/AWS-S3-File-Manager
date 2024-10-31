import { Router } from "express";
import {
  deleteFile,
  downloadFile,
  listPost,
} from "./controllers/postController";
import upload from "./middlewares/multer";

const postRoutes = Router();

postRoutes.get("/list", listPost);
postRoutes.post("/upload", upload.single("file"), (req, res): any => {
  if (!req.file || !(req.file as any).location) {
    return res.status(400).send("Upload failed.");
  }
  res.send(`Successfully uploaded to ${(req.file as any).location}!`);
});
postRoutes.get("/download/:filename", downloadFile);
postRoutes.delete("/delete/:filename", deleteFile);

export default postRoutes;
