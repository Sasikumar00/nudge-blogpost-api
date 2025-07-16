import { Router } from "express";
import Blog from "./Blog.js";

const router = Router();

router.get("/", async (req, res) => {
  const blogs = await Blog.find();
  res.json(blogs);
});

router.post("/", async (req, res) => {
  const blog = new Blog(req.body);
  await blog.save();
  res.json(blog);
});

router.get("/:slug", async (req, res) => {
  const blog = await Blog.findOne({ title: req.params.slug });
  res.json(blog);
});

router.put("/:slug", async (req, res) => {
  const blog = await Blog.findOne({ title: req.params.slug });
  blog.title = req.body.title;
  blog.body = req.body.body;
  blog.image = req.body.image;
  await blog.save();
  res.json(blog);
});

export default router;
