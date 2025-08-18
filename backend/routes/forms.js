import express from "express"
import multer from "multer"
import { handleForm } from "../controllers/formsController.js"

const router = express.Router()

const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, "uploads/"),
  filename: (req, file, cb) =>
    cb(null, Date.now() + "-" + file.originalname)
})

const upload = multer({
  storage,
  limits: { fileSize: 10 * 1024 * 1024 }
})

// rota para envio com/sem arquivo
router.post("/", upload.single("arquivo"), handleForm)

export default router