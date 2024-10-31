import { S3Client } from "@aws-sdk/client-s3";

const region = process.env.REGION;
const accessKeyId = process.env.ACCESS_KEY;
const secretAccessKey = process.env.ACCESS_SECRET;
const BUCKET_NAME = process.env.BUCKET_NAME;

if (!region || !accessKeyId || !secretAccessKey) {
    throw new Error("Missing S3 configuration environment variables.");
}

const s3Client = new S3Client({
    region,
    credentials: {
        accessKeyId,
        secretAccessKey,
    },
});

export default s3Client;
export { BUCKET_NAME };