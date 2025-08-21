"use client"

import { useState, useRef, useEffect } from "react"
import { MessageCircle, X } from "lucide-react"
import { Button } from "@/components/ui/button"

type ChatMessage = {
  type: "user" | "bot"
  text: string
  isTyping?: boolean
}

const preSetQuestions = [
  "Quais são as soluções oferecidas pela ITÁGEO?",
  "Como posso solicitar um orçamento personalizado?",
  "Onde fica a sede da ITÁGEO?",
  "Quais são os horários de atendimento?",
  "Como posso entrar em contato com a equipe?",
  "Quais áreas de atuação a ITÁGEO cobre?",
  "Quais os diferenciais da ITÁGEO?",
  "Tenho uma dúvida mais complexa",
]

const preSetAnswers: Record<string, string> = {
  "Quais são as soluções oferecidas pela ITÁGEO?":
    "🚀 Oferecemos soluções em Engenharia e Consultoria, Licenciamento, Monitoramento Ambiental, Regularização Fundiária, Topografia, Geoprocessamento, além de Geologia e Hidrogeologia. 🌱",
  "Como posso solicitar um orçamento personalizado?":
    "💡 Fácil! Você pode solicitar um orçamento através do nosso formulário de contato, pelo telefone 📞 (49) 3458-2055 ou pelo e-mail ✉️ itageo@itageoambiental.com.br.",
  "Onde fica a sede da ITÁGEO?":
    "📍 Nossa sede está localizada na Av. Tancredo Neves, 294, Pioneiros, Itá - SC. CEP: 89760-000.",
  "Quais são os horários de atendimento?":
    "🕒 Atendemos de segunda a sexta-feira, das 8h às 12h e das 13h30 às 18h.",
  "Como posso entrar em contato com a equipe?":
    "📬 Entre em contato pelo e-mail itageo@itageoambiental.com.br, telefone 📞 (49) 3458-2055 ou pelo nosso formulário de contato.",
  "Quais áreas de atuação a ITÁGEO cobre?":
    "🌍 Atuamos em engenharia, consultoria ambiental, regularização fundiária, topografia, geoprocessamento, geologia e hidrogeologia. Atendemos empresas, propriedades rurais e urbanas.",
  "Quais os diferenciais da ITÁGEO?":
    "✨ Temos mais de 5 anos de experiência, +500 projetos realizados, equipe multidisciplinar e foco em inovação, sustentabilidade e conformidade legal.",
  "Tenho uma dúvida mais complexa":
    "🤔 Para dúvidas mais complexas, fale conosco pelo formulário de contato, telefone 📞 (49) 3458-2055 ou e-mail ✉️ itageo@itageoambiental.com.br. Vamos adorar ajudar! 🚀",
}

export function Chatbot() {
  const [open, setOpen] = useState(false)
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      type: "bot",
      text: "Olá! 👋 Sou Téo, seu assistente virtual da ITÁGEO. Vamos bater um papo? 😃",
    },
  ])
  const [showScrollTop, setShowScrollTop] = useState(false)
  const [fadeOut, setFadeOut] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setShowScrollTop(true)
      } else {
        setShowScrollTop(false)
      }
    }
    window.addEventListener("scroll", toggleVisibility)
    return () => window.removeEventListener("scroll", toggleVisibility)
  }, [])

  // Adiciona fade out ao scrollar, igual à navbar
  useEffect(() => {
    if (!open) {return}

    let timeout: NodeJS.Timeout | null = null

    const handleScrollFade = () => {
      setFadeOut(true)
      timeout = setTimeout(() => {
        setOpen(false)
        setFadeOut(false)
      }, 250) // tempo igual ao transition
    }

    window.addEventListener("scroll", handleScrollFade)
    return () => {
      window.removeEventListener("scroll", handleScrollFade)
      if (timeout) {clearTimeout(timeout)}
    }
  }, [open])

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [messages, open])

  function handleSend(text: string) {
    if (!text.trim()) {return}

    setMessages((msgs) => [...msgs, { type: "user", text }])

    // Exibe indicador de "digitando..."
    setMessages((msgs) => [...msgs, { type: "bot", text: "digitando...", isTyping: true }])

    setTimeout(() => {
      setMessages((msgs) => {
        const newMsgs = msgs.filter((m) => !m.isTyping)
        if (preSetAnswers[text]) {
          return [...newMsgs, { type: "bot", text: preSetAnswers[text] }]
        } else {
          return [
            ...newMsgs,
            {
              type: "bot",
              text:
                "🤖 Hmm... essa é difícil! Para dúvidas mais complexas, entre em contato conosco pelo formulário, telefone 📞 (49) 3458-2055 ou e-mail ✉️ itageo@itageoambiental.com.br.",
            },
          ]
        }
      })
    }, 1200)
  }

  // Define deslocamento do botão do chatbot
  const chatbotBottom = showScrollTop ? 104 : 24
  const chatbotTransition = "transition-all duration-300 ease-in-out"

  if (!open)
    return (
      <Button
        variant="default"
        size="icon"
        className={`
          fixed right-6 bg-emerald-600 hover:bg-emerald-700 rounded-full shadow-lg z-50
          w-12 h-12 md:w-14 md:h-14 flex items-center justify-center border-4 border-white
          ${chatbotTransition}
        `}
        style={{
          minWidth: 48,
          minHeight: 48,
          boxShadow: "0 4px 24px 0 rgba(0,0,0,0.18)",
          bottom: chatbotBottom,
        }}
        onClick={() => setOpen(true)}
        aria-label="Abrir Chatbot"
      >
        <MessageCircle className="h-6 w-6 md:h-7 md:w-7" />
      </Button>
    )

  return (
    <div
      className={`
        fixed right-6 z-50 w-[95vw] max-w-sm md:max-w-md
        ${chatbotTransition}
        ${fadeOut ? "opacity-0 pointer-events-none" : "opacity-100"}
      `}
      style={{ bottom: chatbotBottom }}
    >
      <div className="bg-white rounded-xl shadow-2xl border border-gray-200 flex flex-col h-[500px]">
        {/* Header */}
        <div className="flex items-center justify-between px-4 py-3 border-b border-gray-100 bg-emerald-600 rounded-t-xl">
          <div className="flex items-center gap-2">
            <MessageCircle className="h-5 w-5 text-white" />
            <span className="font-semibold text-white">Fale com Téo 🤖</span>
          </div>
          <button
            onClick={() => setOpen(false)}
            className="text-white hover:text-emerald-200 transition-colors"
            aria-label="Fechar Chatbot"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Chat Body */}
        <div className="flex-1 overflow-y-auto px-4 py-3 space-y-3 bg-gray-50">
          {messages.map((msg, idx) => (
            <div
              key={idx}
              className={`flex ${
                msg.type === "user" ? "justify-end" : "justify-start"
              }`}
            >
              <div
                className={`px-4 py-2 rounded-lg max-w-[80%] text-base animate-fade-in ${
                  msg.type === "user"
                    ? "bg-emerald-600 text-white"
                    : msg.isTyping
                    ? "bg-gray-200 text-gray-600 italic"
                    : "bg-white border border-gray-200 text-gray-800"
                }`}
              >
                {msg.text}
              </div>
            </div>
          ))}
          <div ref={messagesEndRef} />
        </div>

        {/* Perguntas rápidas */}
        <div className="px-4 pb-4">
          <div className="flex gap-2 overflow-x-auto no-scrollbar justify-start">
            {preSetQuestions.map((q) => (
              <button
                key={q}
                className="bg-emerald-100 hover:bg-emerald-200 text-emerald-800 text-sm px-4 py-2 rounded-full transition-colors font-medium whitespace-normal break-words flex-shrink-0"
                onClick={() => handleSend(q)}
                type="button"
                style={{ minWidth: "140px", maxWidth: "220px" }}
              >
                {q}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
