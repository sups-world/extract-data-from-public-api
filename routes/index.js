import { Router } from "express";
import { numberRoutes } from "./numbers.routes.js";

export const programRoutes = Router();

programRoutes.use("/numbers", numberRoutes);
