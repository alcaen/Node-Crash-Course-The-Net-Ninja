import express from "express";
import * as blogController from "../controllers/blogController.js";
const router = express.Router(); // its like a mini app standalone
// blog routes
router.get("/create", blogController.blog_create_get);

router.get("/", blogController.blog_index);

// POST
router.post("/", blogController.blog_create_post);

// GET SPECIFIC ID
router.get("/:id", blogController.blog_details);

// DELETE
router.delete("/:id", blogController.blog_delete);

export { router };
