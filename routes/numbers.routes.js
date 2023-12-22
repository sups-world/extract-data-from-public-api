import { Router } from "express";
import { randomNumberController } from "../controller/numbers.controller.js";

export const numberRoutes = Router();

numberRoutes.get(`/about-random-number`, randomNumberController);
