import express from "express";
import { createArtifact ,getArtifacts} from "../controller/artifact.controller.js";
import { authMiddleware} from "../middleware/auth.middleware.js";
import { authorizeRoles } from "../middleware/role.middleware.js";
import { upload } from "../middleware/upload.middleware.js";
import { apiLimiter } from "../middleware/rateLimiter.middleware.js";

const router = express.Router();


router.post("/create",authMiddleware,createArtifact);
router.post("/createWithFile",authMiddleware,upload.single("file"), createArtifact);
router.post("/", authMiddleware, createArtifact);
router.get("/", apiLimiter, authMiddleware, authorizeRoles("ADMIN"), getArtifacts);
export default router;