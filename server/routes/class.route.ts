import express from "express";
import { getAll, add } from "../controllers/class.controller";
import { auth } from "../middlewares/auth.middleware";
const router = express.Router();
const subRouter = express.Router();

router.use("/api/class", subRouter);

subRouter.get("/", auth,  getAll);
subRouter.post("/", add);

export default router;