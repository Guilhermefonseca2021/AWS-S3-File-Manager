import auth from "./config/auth";
import express from 'express' 
import postRoutes from "./routes";

const app = express(); 

app.use(postRoutes);

app.listen(auth.port || 3333, () => {
    console.log(`Server is running on port ${auth.port}`);
});