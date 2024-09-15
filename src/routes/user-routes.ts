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

router.post("/sign-up", signUp);

router.post("/sign-in", signIn);

router.post("/sign-out", signOut);

export default router;
