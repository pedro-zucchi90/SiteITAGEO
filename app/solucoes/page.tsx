import { CheckCircle, FileText, Users2, BarChart3, Recycle, TrendingUp } from "lucide-react"
import { Chatbot } from "@/components/chatbot";

export default function SolucoesPage() {
  const solutions = [
    {
      id: "licenciamento-ambiental",
      icon: FileText,
      title: "Licenciamento Ambiental",
      subtitle: "Assessoria completa para obtenção de licenças ambientais",
      description:
        "Licenças Prévia, de Instalação e de Operação para diversos tipos de empreendimentos. Auxiliamos em todo o processo junto aos órgãos competentes.",
      benefits: [
        "Análise de viabilidade",
        "Documentação técnica",
        "Acompanhamento processual",
      ],
      process: [
        "Diagnóstico inicial e levantamento de requisitos",
        "Preparação e organização da documentação",
        "Protocolo e acompanhamento junto aos órgãos ambientais",
        "Atendimento a exigências e condicionantes",
        "Obtenção da licença e suporte pós-licença",
      ],
      color: "emerald",
    },
    {
      id: "consultoria-assessoria",
      icon: Users2,
      title: "Consultoria e Assessoria",
      subtitle: "Orientação especializada para adequação às normas ambientais",
      description:
        "Suporte técnico especializado para conformidade legal e melhores práticas ambientais. Diagnóstico, planos de adequação e treinamentos.",
      benefits: [
        "Diagnóstico ambiental",
        "Planos de adequação",
        "Treinamento de equipes",
      ],
      process: [
        "Avaliação das necessidades do cliente",
        "Elaboração de diagnóstico ambiental",
        "Desenvolvimento de planos de ação",
        "Implementação das soluções propostas",
        "Acompanhamento e suporte contínuo",
      ],
      color: "green",
    },
    {
      id: "estudos-ambientais",
      icon: BarChart3,
      title: "Estudos Ambientais",
      subtitle: "Elaboração de estudos técnicos para avaliação de impactos",
      description:
        "EIA/RIMA, RCA, PCA e demais estudos exigidos pela legislação ambiental. Diagnóstico, avaliação de impactos e medidas mitigadoras.",
      benefits: [
        "Diagnóstico ambiental",
        "Avaliação de impactos",
        "Medidas mitigadoras",
      ],
      process: [
        "Coleta de dados e informações de campo",
        "Análise técnica e elaboração dos estudos",
        "Discussão de alternativas e medidas mitigadoras",
        "Apresentação dos resultados aos órgãos competentes",
        "Acompanhamento do processo de aprovação",
      ],
      color: "teal",
    },
    {
      id: "gestao-residuos",
      icon: Recycle,
      title: "Gestão de Resíduos",
      subtitle: "Soluções sustentáveis para gerenciamento de resíduos",
      description:
        "Planos de gerenciamento e soluções para todos os tipos de resíduos industriais. PGRS, logística reversa e destinação adequada.",
      benefits: [
        "PGRS",
        "Logística reversa",
        "Destinação adequada",
      ],
      process: [
        "Levantamento e classificação dos resíduos",
        "Elaboração do Plano de Gerenciamento de Resíduos",
        "Implementação de soluções de logística reversa",
        "Monitoramento e controle da destinação",
        "Relatórios e atualização do plano",
      ],
      color: "cyan",
    },
    {
      id: "monitoramento-ambiental",
      icon: TrendingUp,
      title: "Monitoramento Ambiental",
      subtitle: "Acompanhamento contínuo de indicadores ambientais",
      description:
        "Monitoramento de água, ar, solo e ruído com relatórios técnicos especializados. Coleta de amostras, análises laboratoriais e relatórios técnicos.",
      benefits: [
        "Coleta de amostras",
        "Análises laboratoriais",
        "Relatórios técnicos",
      ],
      process: [
        "Planejamento do monitoramento",
        "Coleta de amostras em campo",
        "Análises laboratoriais especializadas",
        "Interpretação dos resultados",
        "Elaboração e entrega de relatórios técnicos",
      ],
      color: "blue",
    },
  ]

  const getColorClasses = (color: string) => {
    const colors = {
      emerald: {
        bg: "bg-emerald-50",
        border: "border-emerald-200",
        icon: "bg-emerald-100 text-emerald-600",
        text: "text-emerald-900",
        accent: "text-emerald-600",
      },
      green: {
        bg: "bg-green-50",
        border: "border-green-200",
        icon: "bg-green-100 text-green-600",
        text: "text-green-900",
        accent: "text-green-600",
      },
      teal: {
        bg: "bg-teal-50",
        border: "border-teal-200",
        icon: "bg-teal-100 text-teal-600",
        text: "text-teal-900",
        accent: "text-teal-600",
      },
      cyan: {
        bg: "bg-cyan-50",
        border: "border-cyan-200",
        icon: "bg-cyan-100 text-cyan-600",
        text: "text-cyan-900",
        accent: "text-cyan-600",
      },
      blue: {
        bg: "bg-blue-50",
        border: "border-blue-200",
        icon: "bg-blue-100 text-blue-600",
        text: "text-blue-900",
        accent: "text-blue-600",
      },
    }
    return colors[color as keyof typeof colors] || colors.emerald
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 to-green-50">
      <div>
        <Chatbot />
      </div>
      {/* Seção Hero */}
      <section className="relative py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-emerald-900 mb-8">Nossas Soluções</h1>
          <p className="text-2xl text-emerald-700 max-w-4xl mx-auto leading-relaxed mb-10">
            Oferecemos um portfólio completo de serviços em licenciamento ambiental, consultoria, estudos ambientais, gestão de resíduos e monitoramento, desenvolvidos para atender às necessidades específicas de cada cliente com excelência técnica e inovação.
          </p>
        </div>
      </section>

      {/* Grid de Soluções */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto space-y-24">
          {solutions.map((solution, index) => {
            const IconComponent = solution.icon
            const colors = getColorClasses(solution.color)
            const isEven = index % 2 === 0

            return (
              <div
                key={solution.id}
                className={`flex flex-col lg:flex-row items-stretch gap-12 lg:gap-16 ${
                  !isEven ? "lg:flex-row-reverse" : ""
                }`}
              >
                {/* Conteúdo */}
                <div className="flex-1 flex flex-col justify-center">
                  <div className="flex items-center gap-4 mb-6">
                    <div className={`w-16 h-16 ${colors.icon} rounded-2xl flex items-center justify-center`}>
                      <IconComponent className="w-9 h-9" />
                    </div>
                    <div>
                      <h2 className={`text-4xl font-extrabold ${colors.text}`}>{solution.title}</h2>
                      <p className={`${colors.accent} font-semibold text-xl`}>{solution.subtitle}</p>
                    </div>
                  </div>

                  <p className="text-xl text-emerald-700 leading-relaxed mb-8">{solution.description}</p>

                  <div className="grid md:grid-cols-2 gap-8">
                    {/* Benefícios */}
                    <div>
                      <h3 className="text-2xl font-bold text-emerald-900 mb-4">Benefícios</h3>
                      <ul className="space-y-3">
                        {solution.benefits.map((benefit, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <CheckCircle className="w-6 h-6 text-emerald-600 flex-shrink-0 mt-0.5" />
                            <span className="text-lg text-emerald-700">{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Processo */}
                    <div>
                      <h3 className="text-2xl font-bold text-emerald-900 mb-4">Processo</h3>
                      <ol className="space-y-3">
                        {solution.process.map((step, idx) => (
                          <li key={idx} className="flex items-start gap-3">
                            <span className="w-7 h-7 bg-emerald-600 text-white text-base rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                              {idx + 1}
                            </span>
                            <span className="text-lg text-emerald-700">{step}</span>
                          </li>
                        ))}
                      </ol>
                    </div>
                  </div>
                </div>

                {/* Visual */}
                <div className="flex-1 flex self-stretch">
                  <div
                    className={`${colors.bg} ${colors.border} border-2 rounded-3xl p-10 flex flex-col justify-center items-center w-full h-full`}
                  >
                    <IconComponent className={`w-28 h-28 ${colors.accent} mb-6`} />
                    <h3 className={`text-3xl font-bold ${colors.text} mb-2`}>{solution.title}</h3>
                    <p className={`text-xl ${colors.accent}`}>Solução Especializada</p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </section>
    </div>
  )
}
