import nodemailer from "nodemailer"
import fs from "fs"

export const handleForm = async (req, res) => {
  try {
    const formData = req.body
    const { file } = req

    // Configuração do transporte de e-mail usando SMTP customizado
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: process.env.SMTP_PORT,
      secure: false, // Altere para true se usar porta 465
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
      }
    })

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: "itageo@itageoambiental.com.br",
      subject: `Novo formulário: ${formData.activeForm}`,
      text: JSON.stringify(formData, null, 2),
      attachments: file
        ? [
            {
              filename: file.originalname,
              path: file.path
            }
          ]
        : []
    }

    await transporter.sendMail(mailOptions)

    res.status(200).json({ message: "Formulário enviado com sucesso!" })
  } catch (error) {
    console.error(error)
    res.status(500).json({ error: "Erro ao enviar formulário" })
  }
}
