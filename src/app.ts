import "dotenv/config";
import expess, { NextFunction, Request, Response } from "express";
import createHttpError, { isHttpError } from "http-errors";
import { env } from "./utils";
import morgan from "morgan";
import session from "express-session";
import MongoStore from "connect-mongo";
import userRouter from "./routes/user-routes";

const app = expess();

app.use(morgan("dev"));
app.use(expess.json());

app.use(
  session({
    secret: env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: {
      maxAge: 60 * 60 * 1000,
    },
    rolling: true,
    store: MongoStore.create({
      mongoUrl: env.MONGO_CONNECTION_STRING,
    }),
  })
);

app.use("/api/v1/users", userRouter);

app.use((req: Request, res: Response, next: NextFunction) => {
  next(createHttpError(404, "Endpoint not found."));
});

app.use((error: unknown, req: Request, res: Response, next: NextFunction) => {
  console.error(error);

  let errorMessage = "An unknown error occurred";
  let statusCode = 500;

  if (isHttpError(error)) {
    statusCode = error.status;
    errorMessage = error.message;
  }

  res.status(statusCode).json({ error: errorMessage });
});

export default app;
