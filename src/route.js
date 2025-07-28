import { Router } from "express";
import { contactController as ContactController } from "./controllers/contact.controller.js";

const router = Router();

router.get("/contacts/:id", ContactController.findAsync);
router.get("/contacts", ContactController.findAllAsync);
router.post("/contacts", ContactController.createAsync);
router.put("/contacts/:id", ContactController.updateAsync);
router.delete("/contacts/:id", ContactController.deleteAsync);

export { router };
