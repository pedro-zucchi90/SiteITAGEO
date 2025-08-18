import nodemailer from "nodemailer"

export async function POST(req) {
  try {
    let name, email, phone, company, message, file, type, description

    const contentType = req.headers.get("content-type") || ""

    if (contentType.includes("application/json")) {
      const data = await req.json()
      name = data.name
      email = data.email
      phone = data.phone
      company = data.company
      message = data.message
      description = data.description
      type = data.type
    } else if (contentType.includes("multipart/form-data")) {
      const formData = await req.formData()
      name = formData.get("name")
      email = formData.get("email")
      phone = formData.get("phone")
      company = formData.get("company")
      message = formData.get("message")
      description = formData.get("description")
      type = formData.get("type")
      file = formData.get("file")
    } else {
      return new Response(JSON.stringify({ error: "Formato não suportado" }), { status: 400 })
    }

    // --- Configuração do transporte ---
    const transporter = nodemailer.createTransport(
      process.env.EMAIL_SERVICE === "gmail"
        ? {
            service: "gmail",
            auth: { user: process.env.EMAIL_USER, pass: process.env.EMAIL_PASS },
          }
        : {
            host: process.env.SMTP_HOST,
            port: Number(process.env.SMTP_PORT || 587),
            secure: process.env.SMTP_SECURE === "true",
            auth: { user: process.env.EMAIL_USER, pass: process.env.EMAIL_PASS },
          }
    )

    // --- Personalização do e-mail ---
    let subject = "Novo contato via formulário"
    let text = ""

    switch (type) {
      case "trabalhe-conosco":
        subject = "📄 Novo currículo recebido"
        text = `
          Nome: ${name}
          E-mail: ${email}
          Telefone: ${phone}
          Empresa: ${company || "Não informado"}

          Apresentação:
          ${message || description}
        `
        break

      case "ouvidoria":
        subject = "🔒 Nova denúncia recebida (Ouvidoria)"
        text = `
          Nome (opcional): ${name || "Não informado"}
          E-mail (opcional): ${email || "Não informado"}
          Telefone: ${phone || "Não informado"}

          ${description || message}
        `
        break

      default:
        subject = "📩 Novo contato via site"
        text = `
          Nome: ${name}
          E-mail: ${email}
          Telefone: ${phone}
          Empresa: ${company || "Não informado"}

          Mensagem:
          ${message || description}
        `
    }

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_TO,
      subject,
      text,
    }

    // Se tiver anexo
    if (file) {
      const buffer = Buffer.from(await file.arrayBuffer())
      mailOptions.attachments = [
        { filename: file.name, content: buffer }
      ]
    }

    await transporter.verify()
    await transporter.sendMail(mailOptions)

    return new Response(JSON.stringify({ success: true }), { status: 200 })
  } catch (error) {
    console.error("Erro ao enviar email:", error)
    return new Response(JSON.stringify({ error: error.message }), { status: 500 })
  }
}