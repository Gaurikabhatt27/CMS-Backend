import express from "express";
import {
    initiateSignup,
    verifySignupOtp,
    login
} from "../controller/auth.controller.js";

const router = express.Router();

// SIGNUP FLOW

router.post("/signup/initiate", initiateSignup);
router.post("/signup/verify", verifySignupOtp);
router.post("/login",login);

export default router;
