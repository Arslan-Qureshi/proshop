import express from "express";
import {
  userAuth,
  userRegisteration,
  getUserProfile,
  updateUserProfile,
} from "../controllers/usersController.js";
import { protect } from "../middleware/authMiddleware.js";
const router = express.Router();
router.route("/").post(userRegisteration);
router.post("/login", userAuth);
router
  .route("/profile")
  .get(protect, getUserProfile)
  .put(protect, updateUserProfile);
export default router;
