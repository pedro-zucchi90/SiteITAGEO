"use client"

import { useState, useRef, useEffect } from "react"
import { MessageCircle, X } from "lucide-react"
import { Button } from "@/components/ui/button"

type ChatMessage = {
  type: "user" | "bot"
  text: string
}

const preSetQuestions = [
  "Quais serviços a ITÁGEO oferece?",
  "Como posso solicitar um orçamento?",
  "Onde a ITÁGEO está localizada?",
  "Quais são os horários de atendimento?",
  "Como entrar em contato com a ITÁGEO?",
  "Tenho uma dúvida mais complexa",
]

const preSetAnswers: Record<string, string> = {
  "Quais serviços a ITÁGEO oferece?":
    "Oferecemos consultoria ambiental, licenciamento, estudos ambientais, gestão de resíduos e monitoramento ambiental. Veja mais em 'Nossas Soluções'.",
  "Como posso solicitar um orçamento?":
    "Você pode solicitar um orçamento através do nosso formulário de contato ou pelo telefone (49) 3458-2055.",
  "Onde a ITÁGEO está localizada?":
    "Estamos localizados na Av. Tancredo Neves, 294, Pioneiros, Itá - SC. CEP: 89760-000.",
  "Quais são os horários de atendimento?":
    "Atendemos de segunda a sexta, das 8:00 às 12:00 e das 13:30 às 18:00.",
  "Como entrar em contato com a ITÁGEO?":
    "Entre em contato pelo e-mail contato@itageoambiental.com.br ou pelo telefone (49) 3458-2055.",
  "Tenho uma dúvida mais complexa":
    "Para dúvidas mais complexas, por favor, entre em contato conosco pelo formulário de contato, telefone (49) 3458-2055 ou e-mail contato@itageoambiental.com.br. Teremos prazer em ajudar!",
}

export function Chatbot() {
  const [open, setOpen] = useState(false)
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      type: "bot",
      text: "Olá! 👋 Sou Téo, assistente virtual da ITÁGEO. Como posso ajudar você hoje?",
    },
  ])
  const [showScrollTop, setShowScrollTop] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  // Detecta se o scroll está abaixo de 300px para mostrar o botão de scroll-to-top
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

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [messages, open])

  function handleSend(text: string) {
    if (!text.trim()) {return}

    setMessages((msgs) => [...msgs, { type: "user", text }])

    setTimeout(() => {
      if (preSetAnswers[text]) {
        setMessages((msgs) => [
          ...msgs,
          { type: "bot", text: preSetAnswers[text] },
        ])
      } else {
        setMessages((msgs) => [
          ...msgs,
          {
            type: "bot",
            text:
              "Para dúvidas mais complexas, por favor, entre em contato conosco pelo formulário de contato, telefone (49) 3458-2055 ou e-mail contato@itageoambiental.com.br.",
          },
        ])
      }
    }, 600)
  }

  // Define o deslocamento do botão do chatbot quando o scroll-to-top aparece
  const chatbotBottom = showScrollTop ? 104 : 24 // 104px = 24px + 80px (altura do botão scroll-to-top + espaçamento)
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
      `}
      style={{
        bottom: chatbotBottom,
      }}
    >
      <div className="bg-white rounded-xl shadow-2xl border border-gray-200 flex flex-col h-[480px]">
        {/* Header */}
        <div className="flex items-center justify-between px-4 py-3 border-b border-gray-100 bg-emerald-600 rounded-t-xl">
          <div className="flex items-center gap-2">
            <MessageCircle className="h-5 w-5 text-white" />
            <span className="font-semibold text-white">Fale com Téo</span>
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
                className={`px-4 py-2 rounded-lg max-w-[80%] text-sm ${
                  msg.type === "user"
                    ? "bg-emerald-600 text-white"
                    : "bg-white border border-gray-200 text-gray-800"
                }`}
              >
                {msg.text}
              </div>
            </div>
          ))}
          <div ref={messagesEndRef} />
        </div>

        {/* Pre-set Questions */}
        <div className="px-4 pb-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {preSetQuestions.map((q) => (
              <button
                key={q}
                className="bg-emerald-100 hover:bg-emerald-200 text-emerald-800 text-sm px-4 py-2 rounded-full transition-colors font-medium w-full text-left"
                onClick={() => handleSend(q)}
                type="button"
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
