import express from "express"
import cors from "cors"
import dotenv from "dotenv"
import formRoutes from "./routes/forms.js"

dotenv.config()

const app = express()
app.use(cors())
app.use(express.json())

// Rotas
app.use("/api/forms", formRoutes)

// Inicia servidor
const PORT = process.env.PORT || 5000
app.listen(PORT, () => console.log("Servidor rodando na porta ${PORT}"))
