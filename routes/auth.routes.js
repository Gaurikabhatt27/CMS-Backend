import express from "express";
import {
    initiateSignup,
    verifySignupOtp,
    login
} from "../controller/auth.controller.js";
import { apiLimiter } from "../middleware/rateLimiter.middleware.js";

const router = express.Router();

// SIGNUP FLOW

router.post("/signup/initiate", apiLimiter, initiateSignup);
router.post("/signup/verify", verifySignupOtp);
router.post("/login",login);

export default router;
