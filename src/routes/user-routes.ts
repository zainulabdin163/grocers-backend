import express from "express";
import {
  getAuthenticatedUser,
  signIn,
  signOut,
  signUp,
} from "../controllers/user-controller";
import { authMiddleware } from "../middlewares";

const router = express.Router();

router.get("/", authMiddleware, getAuthenticatedUser);

router.post("/signup", signUp);

router.post("/signin", signIn);

router.post("/signout", signOut);

export default router;
