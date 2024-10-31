import multer from "multer";
import multerS3 from "multer-s3";
import s3Client, { BUCKET_NAME } from "../config/s3service";

// Configure Multer for file uploads to S3
const upload = multer({
  storage: multerS3({
    s3: s3Client,
    bucket: BUCKET_NAME || "",
    metadata: (req, file, cb) => {
      cb(null, { fieldName: file.fieldname });
    },
    key: (req, file, cb) => {
      cb(null, file.originalname);
    },
  }),
});

export default upload
