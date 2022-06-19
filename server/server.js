import express from "express";
const app = express();
import dotenv from "dotenv";
dotenv.config();
// db and auth
import connectDB from "./db/connect.js";
import authRouter from "./routes/authRoutes.js";
//middleware
import notFoundMiddleware from "./middleware/not-found.js";
import errorMiddleware from "./middleware/error-handler.js";
app.use(express.json());
app.get("/", (req, res) => {
  res.send(`Wellcome`);
});

app.use("/api/v1/auth", authRouter);

app.use(notFoundMiddleware);

app.use(errorMiddleware);

const port = process.env.PORT || 5000;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URL);
    app.listen(port, () => {
      console.log(`server lisenting on port ${port}`);
    });
  } catch (error) {
    console.log(error);
  }
};
start();
