import { Router } from "express";
import { categoryController as CategoryController } from "./controllers/category.controller.js";
import { contactController as ContactController } from "./controllers/contact.controller.js";

const router = Router();

router.get("/contacts/:id", ContactController.findAsync);
router.get("/contacts", ContactController.findAllAsync);
router.post("/contacts", ContactController.createAsync);
router.put("/contacts/:id", ContactController.updateAsync);
router.delete("/contacts/:id", ContactController.deleteAsync);

router.get("/categories/:id", CategoryController.findAsync);
router.get("/categories", CategoryController.findAllAsync);
router.post("/categories", CategoryController.createAsync);
router.put("/categories/:id", CategoryController.updateAsync);
router.delete("/categories/:id", CategoryController.deleteAsync);

export { router };
