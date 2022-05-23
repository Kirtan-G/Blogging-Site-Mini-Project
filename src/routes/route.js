const express = require("express");
const router = express.Router();
const authorController = require("../controllers/authorController");
const blogsController = require("../controllers/blogController");
const { validateAuthor, validateblog } = require('../middleware/valid');
const { Authentication, Authrizationp, Authrizationq } = require('../middleware/auth');

router.post("/authors", validateAuthor, authorController.createauthor);
router.post("/blogs", Authentication, validateblog, blogsController.createBlog);
router.get("/blogs", Authentication, blogsController.getBlogs);
router.put("/blogs/:blogId", Authrizationp, blogsController.updateblogs);
router.delete("/blogs/:blogId", Authentication, Authrizationp, blogsController.deleteBlogs);
router.delete("/blogs", Authentication, Authrizationq, blogsController.queryDeleted);
router.post('/login', authorController.authorLogin);

module.exports = router;