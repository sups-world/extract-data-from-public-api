import { Router } from "express";
import { numberRoutes } from "./numbers.routes";

const programRoutes = Router();

programRoutes.use("/numbers", numberRoutes);
