"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { useSearchParams } from "next/navigation"
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  Upload,
  CheckCircle,
  AlertCircle,
  MessageCircle,
  Users,
  Shield,
} from "lucide-react"
import { Chatbot }  from "@/components/chatbot";

export default function ContatoPage() {
  const searchParams = useSearchParams()
  const [activeForm, setActiveForm] = useState("fale-conosco")
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    telefone: "",
    empresa: "",
    servico: "",
    mensagem: "",
    arquivo: null as File | null,
    // Campos específicos da ouvidoria
    dataAcontecimento: "",
    localAcontecimento: "",
    relato: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")

  const formTypes = [
    {
      id: "fale-conosco",
      name: "Fale Conosco",
      description: "Contato direto com nossa equipe",
      icon: MessageCircle,
    },
    {
      id: "trabalhe-conosco",
      name: "Trabalhe Conosco",
      description: "Envie seu currículo e faça parte da equipe",
      icon: Users,
    },
    {
      id: "ouvidoria",
      name: "Ouvidoria",
      description: "Canal confidencial para denúncias",
      icon: Shield,
    },
  ]

  useEffect(() => {
    const tab = searchParams.get("tab")
    if (tab && ["fale-conosco", "trabalhe-conosco", "ouvidoria"].includes(tab)) {
      setActiveForm(tab)
    }
  }, [searchParams])

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null
    setFormData((prev) => ({ ...prev, arquivo: file }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus("idle")

    try {
      const form = new FormData()
      form.append("name", formData.nome)
      form.append("email", formData.email)
      form.append("phone", formData.telefone || "")
      form.append("company", formData.empresa || "")
      form.append("message", formData.mensagem || "")
      form.append("type", activeForm)

      if (activeForm === "trabalhe-conosco") {
        form.append(
          "description",
          `Telefone: ${formData.telefone}
          Empresa: ${formData.empresa}
          Mensagem: ${formData.mensagem}`
        )
      } else if (activeForm === "ouvidoria") {
        form.append(
          "description",
          `
          Telefone: ${formData.telefone}
          Empresa: ${formData.empresa}
          Serviço: ${formData.servico}
          Data do acontecimento: ${formData.dataAcontecimento}
          Local do acontecimento: ${formData.localAcontecimento}
          Relato: ${formData.relato}
          Mensagem: ${formData.mensagem}
          `
        )
      } else {
        // fale-conosco / outros
        form.append(
          "description",
          `
          Telefone: ${formData.telefone}
          Empresa: ${formData.empresa}
          Serviço: ${formData.servico}
          Mensagem: ${formData.mensagem}
          `
        )
      }

      if (formData.arquivo) {
        form.append("file", formData.arquivo)
      }

      const res = await fetch("/api/send-email", {
        method: "POST",
        body: form,
      })

      if (!res.ok) {
        throw new Error("Erro ao enviar formulário")
      }

      setSubmitStatus("success")
      setFormData({
        nome: "",
        email: "",
        telefone: "",
        empresa: "",
        servico: "",
        mensagem: "",
        arquivo: null,
        dataAcontecimento: "",
        localAcontecimento: "",
        relato: "",
      })
    } catch (error) {
      setSubmitStatus("error")
      console.error(error)
      alert("Erro ao enviar a mensagem.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 to-green-50">
      {/* Hero Section */}
      <section className="relative py-12 px-2 sm:py-20 sm:px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-emerald-900 mb-4 sm:mb-6">
            Entre em Contato
          </h1>
          <p className="text-base sm:text-xl text-emerald-700 max-w-3xl mx-auto leading-relaxed">
            Estamos prontos para ajudar sua empresa a alcançar a excelência ambiental. Entre em contato conosco e
            descubra como podemos contribuir para o sucesso do seu projeto.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-2 sm:px-4 pb-10 sm:pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-12">
          {/* Contact Information */}
          <div className="lg:col-span-1 space-y-6 sm:space-y-8">
            {/* Contact Details */}
            <div className="bg-white rounded-2xl p-4 sm:p-8 shadow-sm">
              <h2 className="text-xl sm:text-2xl font-bold text-emerald-900 mb-4 sm:mb-6">Informações de Contato</h2>
              <div className="space-y-4 sm:space-y-6">
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-emerald-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 sm:w-6 sm:h-6 text-emerald-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-emerald-900 mb-1">Telefone</h3>
                    <p className="text-emerald-700 text-sm sm:text-base">(49) 3458-2055</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-emerald-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 sm:w-6 sm:h-6 text-emerald-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-emerald-900 mb-1">E-mail</h3>
                    <p className="text-emerald-700 text-sm sm:text-base">
                      itageo@itageoambiental.com.br
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-emerald-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 sm:w-6 sm:h-6 text-emerald-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-emerald-900 mb-1">Endereço</h3>
                    <p className="text-emerald-700 text-sm sm:text-base">
                      Av. Tancredo Neves, 294
                      <br />
                      Pioneiros - Itá, SC
                      <br />
                      CEP: 89760-000
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-emerald-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Clock className="w-5 h-5 sm:w-6 sm:h-6 text-emerald-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-emerald-900 mb-1">Horário</h3>
                    <p className="text-emerald-700 text-sm sm:text-base">
                      Segunda a Sexta: 8h às 12h
                      <br />
                      Reabre às 13h30 - 18h
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Google Maps Integration */}
            <div className="bg-white rounded-2xl p-4 sm:p-8 shadow-sm">
              <h3 className="text-lg sm:text-xl font-bold text-emerald-900 mb-2 sm:mb-4">Nossa Localização</h3>
              <div className="aspect-square rounded-xl overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14184.73326445581!2d-52.34916401284183!3d-27.276131799999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94e49fde250a3ef7%3A0xa26834a7c937f19f!2sItageo%20Ambiental!5e0!3m2!1spt-BR!2sbr!4v1755640138225!5m2!1spt-BR!2sbr"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Localização ITÁGEO Ambiental - Av. Tancredo Neves, 294, Itá/SC"
                />
              </div>
              <div className="mt-2 sm:mt-4 text-center">
                <p className="text-emerald-700 font-semibold text-sm sm:text-base">ITÁGEO Ambiental</p>
                <p className="text-emerald-600 text-xs sm:text-sm">Av. Tancredo Neves, 294 - Itá/SC</p>
              </div>
            </div>
          </div>

          {/* Contact Forms */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl p-4 sm:p-8 shadow-sm text-base sm:text-lg">
              {/* Form Type Selector */}
              <div className="mb-6 sm:mb-8">
                <h2 className="text-2xl sm:text-3xl font-bold text-emerald-900 mb-4 sm:mb-6">Como Podemos Ajudar?</h2>
                <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 gap-2 sm:gap-4">
                  {formTypes.map((type) => {
                    const IconComponent = type.icon
                    return (
                      <button
                        key={type.id}
                        onClick={() => setActiveForm(type.id)}
                        className={`p-3 sm:p-4 rounded-xl border-2 text-left transition-all cursor-pointer ${
                          activeForm === type.id
                            ? "border-emerald-500 bg-emerald-50"
                            : "border-emerald-200 hover:border-emerald-300"
                        }`}
                      >
                        <div className="flex items-center gap-2 sm:gap-3 mb-1 sm:mb-2">
                          <IconComponent className="w-5 h-5 text-emerald-600" />
                          <h3 className="font-semibold text-emerald-900 text-base sm:text-lg">{type.name}</h3>
                        </div>
                        <p className="text-emerald-600 text-sm sm:text-base">{type.description}</p>
                      </button>
                    )
                  })}
                </div>
              </div>

              {activeForm === "ouvidoria" && (
                <div className="mb-6 sm:mb-8 p-4 sm:p-6 bg-amber-50 border border-amber-200 rounded-xl">
                  <h3 className="text-xl sm:text-2xl font-bold text-amber-900 mb-2 sm:mb-4">OUVIDORIA</h3>
                  <p className="text-amber-800 leading-relaxed mb-2 sm:mb-4 text-base sm:text-lg">
                    Presenciou alguma conduta inadequada, procedimento irregular ou situação que merece atenção?
                  </p>
                  <p className="text-amber-700 text-sm sm:text-base">
                    Se deseja relatar uma ocorrência, fazer uma denúncia ou registrar qualquer informação relevante
                    sobre pessoas ou processos, preencha o formulário abaixo. Sua manifestação será tratada de forma
                    anônima e confidencial.
                  </p>
                </div>
              )}

              {/* Contact Form */}
              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6" encType="multipart/form-data">
                {activeForm === "ouvidoria" ? (
                  <>
                    <div className="bg-blue-50 border border-blue-200 rounded-xl p-3 sm:p-4 mb-4 sm:mb-6">
                      <h4 className="font-bold text-blue-900 mb-1 sm:mb-2 text-base sm:text-lg">Formulário de Denúncia</h4>
                      <p className="text-blue-800 text-sm sm:text-base mb-1 sm:mb-2">
                        Apenas os campos "Local" e "Relato" são de preenchimento obrigatório.
                      </p>
                      <p className="text-blue-700 text-sm sm:text-base">
                        Este formulário não coleta automaticamente nenhuma informação pessoal, como nome ou e-mail. Seus
                        dados somente serão registrados se você optar por fornecê-los.
                      </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                      <div>
                        <label htmlFor="nome" className="block text-sm sm:text-base font-semibold text-emerald-900 mb-1 sm:mb-2">
                          Nome (opcional)
                        </label>
                        <input
                          type="text"
                          id="nome"
                          name="nome"
                          value={formData.nome}
                          onChange={handleInputChange}
                          className="w-full px-3 py-2 sm:px-4 sm:py-3 border-2 border-emerald-200 rounded-xl focus:border-emerald-500 focus:outline-none transition-colors text-base"
                          placeholder="Seu nome (opcional)"
                        />
                      </div>

                      <div>
                        <label htmlFor="email" className="block text-sm sm:text-base font-semibold text-emerald-900 mb-1 sm:mb-2">
                          E-mail (opcional)
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          className="w-full px-3 py-2 sm:px-4 sm:py-3 border-2 border-emerald-200 rounded-xl focus:border-emerald-500 focus:outline-none transition-colors text-base"
                          placeholder="seu@email.com (opcional)"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                      <div>
                        <label htmlFor="telefone" className="block text-sm sm:text-base font-semibold text-emerald-900 mb-1 sm:mb-2">
                          Telefone (opcional)
                        </label>
                        <input
                          type="tel"
                          id="telefone"
                          name="telefone"
                          value={formData.telefone}
                          onChange={handleInputChange}
                          className="w-full px-3 py-2 sm:px-4 sm:py-3 border-2 border-emerald-200 rounded-xl focus:border-emerald-500 focus:outline-none transition-colors text-base"
                          placeholder="(49) 99999-9999 (opcional)"
                        />
                      </div>

                      <div>
                        <label
                          htmlFor="dataAcontecimento"
                          className="block text-sm sm:text-base font-semibold text-emerald-900 mb-1 sm:mb-2"
                        >
                          Data do acontecimento (opcional)
                        </label>
                        <input
                          type="date"
                          id="dataAcontecimento"
                          name="dataAcontecimento"
                          value={formData.dataAcontecimento}
                          onChange={handleInputChange}
                          className="w-full px-3 py-2 sm:px-4 sm:py-3 border-2 border-emerald-200 rounded-xl focus:border-emerald-500 focus:outline-none transition-colors text-base"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="localAcontecimento" className="block text-sm sm:text-base font-semibold text-emerald-900 mb-1 sm:mb-2">
                        Local do acontecimento *
                      </label>
                      <input
                        type="text"
                        id="localAcontecimento"
                        name="localAcontecimento"
                        value={formData.localAcontecimento}
                        onChange={handleInputChange}
                        required
                        className="w-full px-3 py-2 sm:px-4 sm:py-3 border-2 border-emerald-200 rounded-xl focus:border-emerald-500 focus:outline-none transition-colors text-base"
                        placeholder="Descreva o local onde ocorreu o fato"
                      />
                    </div>

                    <div>
                      <label htmlFor="relato" className="block text-sm sm:text-base font-semibold text-emerald-900 mb-1 sm:mb-2">
                        Relato *
                      </label>
                      <textarea
                        id="relato"
                        name="relato"
                        value={formData.relato}
                        onChange={handleInputChange}
                        required
                        rows={5}
                        className="w-full px-3 py-2 sm:px-4 sm:py-3 border-2 border-emerald-200 rounded-xl focus:border-emerald-500 focus:outline-none transition-colors resize-none text-base"
                        placeholder="Descreva detalhadamente o que aconteceu..."
                      />
                    </div>

                    {/* Upload de arquivo para ouvidoria */}
                    <div>
                      <label htmlFor="arquivo" className="block text-sm sm:text-base font-semibold text-emerald-900 mb-1 sm:mb-2">
                        Anexar Arquivo (opcional)
                      </label>
                      <div className="relative">
                        <input
                          type="file"
                          id="arquivo"
                          name="arquivo"
                          onChange={handleFileChange}
                          accept=".pdf,.doc,.docx,.jpg,.jpeg,.png"
                          className="hidden"
                        />
                        <label
                          htmlFor="arquivo"
                          className="w-full px-3 py-2 sm:px-4 sm:py-3 border-2 border-dashed border-emerald-300 rounded-xl hover:border-emerald-500 transition-colors cursor-pointer flex items-center justify-center gap-2 text-emerald-700 text-sm sm:text-base"
                        >
                          <Upload className="w-5 h-5" />
                          {formData.arquivo
                            ? formData.arquivo.name
                            : "Clique para anexar arquivo"}
                        </label>
                      </div>
                      <p className="text-emerald-600 text-sm sm:text-base mt-1 sm:mt-2">
                        Formatos aceitos: PDF, DOC, DOCX, JPG, PNG (máx. 10MB)
                      </p>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                      <div>
                        <label htmlFor="nome" className="block text-sm sm:text-base font-semibold text-emerald-900 mb-1 sm:mb-2">
                          Nome Completo *
                        </label>
                        <input
                          type="text"
                          id="nome"
                          name="nome"
                          value={formData.nome}
                          onChange={handleInputChange}
                          required
                          className="w-full px-3 py-2 sm:px-4 sm:py-3 border-2 border-emerald-200 rounded-xl focus:border-emerald-500 focus:outline-none transition-colors text-base"
                          placeholder="Seu nome completo"
                        />
                      </div>

                      <div>
                        <label htmlFor="email" className="block text-sm sm:text-base font-semibold text-emerald-900 mb-1 sm:mb-2">
                          E-mail *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          className="w-full px-3 py-2 sm:px-4 sm:py-3 border-2 border-emerald-200 rounded-xl focus:border-emerald-500 focus:outline-none transition-colors text-base"
                          placeholder="seu@email.com"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                      <div>
                        <label htmlFor="telefone" className="block text-sm sm:text-base font-semibold text-emerald-900 mb-1 sm:mb-2">
                          Telefone *
                        </label>
                        <input
                          type="tel"
                          id="telefone"
                          name="telefone"
                          value={formData.telefone}
                          onChange={handleInputChange}
                          required
                          className="w-full px-3 py-2 sm:px-4 sm:py-3 border-2 border-emerald-200 rounded-xl focus:border-emerald-500 focus:outline-none transition-colors text-base"
                          placeholder="(49) 99999-9999"
                        />
                      </div>

                      <div>
                        <label htmlFor="empresa" className="block text-sm sm:text-base font-semibold text-emerald-900 mb-1 sm:mb-2">
                          Empresa {activeForm === "trabalhe-conosco" ? "" : "(opcional)"}
                        </label>
                        <input
                          type="text"
                          id="empresa"
                          name="empresa"
                          value={formData.empresa}
                          onChange={handleInputChange}
                          className="w-full px-3 py-2 sm:px-4 sm:py-3 border-2 border-emerald-200 rounded-xl focus:border-emerald-500 focus:outline-none transition-colors text-base"
                          placeholder={
                            activeForm === "trabalhe-conosco" ? "Empresa atual (opcional)" : "Nome da sua empresa"
                          }
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="mensagem" className="block text-sm sm:text-base font-semibold text-emerald-900 mb-1 sm:mb-2">
                        {activeForm === "trabalhe-conosco" ? "Apresentação *" : "Mensagem *"}
                      </label>
                      <textarea
                        id="mensagem"
                        name="mensagem"
                        value={formData.mensagem}
                        onChange={handleInputChange}
                        required
                        rows={5}
                        className="w-full px-3 py-2 sm:px-4 sm:py-3 border-2 border-emerald-200 rounded-xl focus:border-emerald-500 focus:outline-none transition-colors resize-none text-base"
                        placeholder={
                          activeForm === "trabalhe-conosco"
                            ? "Conte-nos sobre sua experiência, formação e por que gostaria de trabalhar conosco..."
                            : "Descreva como podemos ajudar você..."
                        }
                      />
                    </div>

                    {/* File Upload para todos os formulários */}
                    <div>
                      <label htmlFor="arquivo" className="block text-sm sm:text-base font-semibold text-emerald-900 mb-1 sm:mb-2">
                        {activeForm === "trabalhe-conosco" ? "Currículo *" : "Anexar Arquivo (opcional)"}
                      </label>
                      <div className="relative">
                        <input
                          type="file"
                          id="arquivo"
                          name="arquivo"
                          onChange={handleFileChange}
                          accept={
                            activeForm === "trabalhe-conosco" ? ".pdf,.doc,.docx" : ".pdf,.doc,.docx,.jpg,.jpeg,.png"
                          }
                          required={activeForm === "trabalhe-conosco"}
                          className="hidden"
                        />
                        <label
                          htmlFor="arquivo"
                          className="w-full px-3 py-2 sm:px-4 sm:py-3 border-2 border-dashed border-emerald-300 rounded-xl hover:border-emerald-500 transition-colors cursor-pointer flex items-center justify-center gap-2 text-emerald-700 text-sm sm:text-base"
                        >
                          <Upload className="w-5 h-5" />
                          {formData.arquivo
                            ? formData.arquivo.name
                            : activeForm === "trabalhe-conosco"
                              ? "Clique para anexar seu currículo"
                              : "Clique para anexar arquivo"}
                        </label>
                      </div>
                      <p className="text-emerald-600 text-sm sm:text-base mt-1 sm:mt-2">
                        {activeForm === "trabalhe-conosco"
                          ? "Formatos aceitos: PDF, DOC, DOCX (máx. 10MB)"
                          : "Formatos aceitos: PDF, DOC, DOCX, JPG, PNG (máx. 10MB)"}
                      </p>
                    </div>
                  </>
                )}

                {/* Submit Status */}
                {submitStatus === "success" && (
                  <div className="flex items-center gap-2 p-3 sm:p-4 bg-green-50 border border-green-200 rounded-xl">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                    <span className="text-green-800 text-base sm:text-lg">
                      {activeForm === "ouvidoria"
                        ? "Denúncia enviada com sucesso! Será tratada de forma confidencial."
                        : activeForm === "trabalhe-conosco"
                          ? "Currículo enviado com sucesso! Entraremos em contato em breve."
                          : "Mensagem enviada com sucesso! Entraremos em contato em breve."}
                    </span>
                  </div>
                )}

                {submitStatus === "error" && (
                  <div className="flex items-center gap-2 p-3 sm:p-4 bg-red-50 border border-red-200 rounded-xl">
                    <AlertCircle className="w-5 h-5 text-red-600" />
                    <span className="text-red-800 text-base sm:text-lg">
                      Erro ao enviar. Tente novamente ou entre em contato por telefone.
                    </span>
                  </div>
                )}

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-emerald-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold hover:bg-emerald-700 disabled:bg-emerald-400 transition-colors flex items-center justify-center gap-2 cursor-pointer text-base sm:text-lg"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      Enviando...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      {activeForm === "ouvidoria"
                        ? "Enviar Denúncia"
                        : activeForm === "trabalhe-conosco"
                          ? "Enviar Currículo"
                          : "Enviar Mensagem"}
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Contact Section */}
      <section className="py-10 sm:py-16 px-2 sm:px-4 bg-white/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-emerald-900 text-center mb-8 sm:mb-12">
            Outras Formas de Contato
          </h2>
          <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-8">
            <div className="text-center p-4 sm:p-6 bg-white rounded-2xl shadow-sm">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                <Phone className="w-6 h-6 sm:w-8 sm:h-8 text-emerald-600" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-emerald-900 mb-1 sm:mb-2">Ligação Direta</h3>
              <p className="text-emerald-700 mb-2 sm:mb-4 text-sm sm:text-base">Fale diretamente com nossos especialistas</p>
              <a
                href="tel:+554934582055"
                className="text-emerald-600 font-semibold hover:text-emerald-700 transition-colors text-sm sm:text-base"
              >
                (49) 3458-2055
              </a>
            </div>

            <div className="text-center p-4 sm:p-6 bg-white rounded-2xl shadow-sm">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                <Mail className="w-6 h-6 sm:w-8 sm:h-8 text-emerald-600" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-emerald-900 mb-1 sm:mb-2">E-mail Direto</h3>
              <p className="text-emerald-700 mb-2 sm:mb-4 text-sm sm:text-base">Envie sua mensagem diretamente</p>
              <a
                href="mailto:itageo@itageoambiental.com.br"
                className="text-emerald-600 font-semibold hover:text-emerald-700 transition-colors text-sm sm:text-base"
              >
                itageo@itageoambiental.com.br
              </a>
            </div>

            <div className="text-center p-4 sm:p-6 bg-white rounded-2xl shadow-sm">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                <Clock className="w-6 h-6 sm:w-8 sm:h-8 text-emerald-600" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-emerald-900 mb-1 sm:mb-2">Atendimento Rápido</h3>
              <p className="text-emerald-700 mb-2 sm:mb-4 text-sm sm:text-base">Resposta em até 24 horas</p>
              <span className="text-emerald-600 font-semibold text-sm sm:text-base">Seg-Sex: 8h-12h | 13h30-18h</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}