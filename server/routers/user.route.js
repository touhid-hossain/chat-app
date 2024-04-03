import express from "express";
import authorization from "../middleware/authorization.js";
import { getUsersForSidebar } from "../controller/user.controller.js";

const router = express.Router();

router.get("/", authorization, getUsersForSidebar);

export default router;
