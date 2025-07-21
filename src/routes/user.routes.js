import express from "express"
import { getAllUserUrls } from "../controller/user.controller.js"
import { authMiddleware } from "../middleware/auth.middleware.js"
import UrlModel from "../models/short_url.model.js";

const router = express.Router()

router.post("/urls",authMiddleware, getAllUserUrls)

router.get("/:shortId", async (req, res) => {
  const shortId = req.params.shortId;
  const urlEntry = await UrlModel.findOne({ short_url: shortId });

  if (urlEntry) {
    return res.redirect(urlEntry.original_url);
  } else {
    return res.status(404).json({ message: "URL not found" });
  }
});

export default router