import Link from "next/link"
import { ArrowRight, CheckCircle, FileCheck, Briefcase, Phone, Map, LandPlot, Mountain } from "lucide-react"
import { Chatbot }  from "@/components/chatbot";

export default function SolucoesPage() {
  const solutions = [
    {
      id: "engenharia-consultoria",
      icon: Briefcase,
      title: "Engenharia e Consultoria",
      subtitle: "Soluções integradas em engenharia e consultoria técnica",
      description:
        "Oferecemos serviços completos de engenharia e consultoria, com foco em inovação, eficiência e sustentabilidade para projetos de diversos setores.",
      benefits: [
        "Projetos de engenharia civil e ambiental",
        "Consultoria técnica especializada",
        "Gestão de projetos multidisciplinares",
        "Acompanhamento e fiscalização de obras",
        "Soluções personalizadas para cada cliente",
      ],
      process: [
        "Diagnóstico das necessidades do cliente",
        "Desenvolvimento de projetos e soluções",
        "Aprovação e regularização junto aos órgãos competentes",
        "Execução e acompanhamento técnico",
        "Entrega e suporte pós-projeto",
      ],
      color: "emerald",
    },
    {
      id: "licenciamento-monitoramento-consultoria",
      icon: FileCheck,
      title: "Licenciamento, Monitoramento e Consultoria Ambiental",
      subtitle: "Gestão ambiental completa para seu empreendimento",
      description:
        "Atuamos em todas as etapas do licenciamento ambiental, monitoramento e consultoria, garantindo conformidade legal e sustentabilidade para seu negócio.",
      benefits: [
        "Licenciamento ambiental (LP, LI, LO)",
        "Monitoramento de qualidade ambiental (ar, água, solo)",
        "Elaboração de estudos e relatórios ambientais",
        "Consultoria em compliance ambiental",
        "Gestão de condicionantes e obrigações legais",
      ],
      process: [
        "Análise de viabilidade ambiental",
        "Elaboração e protocolo de documentos",
        "Acompanhamento de processos junto aos órgãos",
        "Execução de monitoramentos ambientais",
        "Relatórios e recomendações técnicas",
      ],
      color: "green",
    },
    {
      id: "gestao-regularizacao-fundiaria",
      icon: LandPlot,
      title: "Gestão e Regularização Fundiária",
      subtitle: "Soluções para regularização e gestão de propriedades",
      description:
        "Apoiamos empresas e proprietários na regularização fundiária, gestão de imóveis rurais e urbanos, e resolução de conflitos de posse.",
      benefits: [
        "Regularização de imóveis rurais e urbanos",
        "Georreferenciamento de propriedades",
        "Apoio em processos de usucapião",
        "Gestão documental e cartorial",
        "Consultoria em legislação fundiária",
      ],
      process: [
        "Levantamento documental e diagnóstico",
        "Georreferenciamento e mapeamento",
        "Elaboração de peças técnicas e memoriais",
        "Protocolo e acompanhamento em cartórios e órgãos",
        "Finalização e entrega da regularização",
      ],
      color: "teal",
    },
    {
      id: "topografia-geoprocessamento",
      icon: Map,
      title: "Topografia e Geoprocessamento",
      subtitle: "Mapeamento preciso e análise espacial",
      description:
        "Realizamos levantamentos topográficos, geodésicos e serviços de geoprocessamento para apoiar projetos de engenharia, meio ambiente e gestão territorial.",
      benefits: [
        "Levantamentos topográficos e planialtimétricos",
        "Georreferenciamento de imóveis",
        "Mapeamento com drones e GNSS",
        "Análise espacial e modelagem 3D",
        "Geração de mapas temáticos e plantas",
      ],
      process: [
        "Planejamento do levantamento",
        "Coleta de dados em campo",
        "Processamento e análise dos dados",
        "Geração de mapas e relatórios",
        "Entrega e suporte técnico",
      ],
      color: "cyan",
    },
    {
      id: "geologia-hidrogeologia",
      icon: Mountain,
      title: "Geologia e Hidrogeologia",
      subtitle: "Estudos e soluções para recursos naturais",
      description:
        "Oferecemos estudos geológicos e hidrogeológicos para avaliação de recursos naturais, gestão de águas subterrâneas e suporte a empreendimentos.",
      benefits: [
        "Estudos geológicos e geotécnicos",
        "Investigação e avaliação hidrogeológica",
        "Modelagem de aquíferos",
        "Monitoramento de poços e nascentes",
        "Gestão de recursos hídricos subterrâneos",
      ],
      process: [
        "Coleta e análise de dados geológicos",
        "Execução de sondagens e ensaios",
        "Modelagem e interpretação de dados",
        "Elaboração de relatórios técnicos",
        "Acompanhamento e recomendações",
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
      {/* Seção Hero */}
      <section className="relative py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-emerald-900 mb-6">Nossas Soluções</h1>
          <p className="text-xl text-emerald-700 max-w-3xl mx-auto leading-relaxed mb-8">
            Oferecemos um portfólio completo de serviços em engenharia, consultoria ambiental, fundiária, topografia, geoprocessamento, geologia e hidrogeologia, desenvolvidos para atender às necessidades específicas de cada cliente com excelência técnica e inovação.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <div className="bg-white/70 px-6 py-3 rounded-full">
              <span className="text-emerald-800 font-semibold">✓ Engenharia e Consultoria</span>
            </div>
            <div className="bg-white/70 px-6 py-3 rounded-full">
              <span className="text-emerald-800 font-semibold">✓ Licenciamento, Monitoramento e Consultoria Ambiental</span>
            </div>
            <div className="bg-white/70 px-6 py-3 rounded-full">
              <span className="text-emerald-800 font-semibold">✓ Gestão Fundiária, Topografia e Geoprocessamento</span>
            </div>
            <div className="bg-white/70 px-6 py-3 rounded-full">
              <span className="text-emerald-800 font-semibold">✓ Geologia e Hidrogeologia</span>
            </div>
          </div>
        </div>
      </section>

      {/* Grid de Soluções */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="space-y-16">
            {solutions.map((solution, index) => {
              const IconComponent = solution.icon
              const colors = getColorClasses(solution.color)
              const isEven = index % 2 === 0

              return (
                <div
                  key={solution.id}
                  className={`grid lg:grid-cols-2 gap-12 items-center ${!isEven ? "lg:grid-flow-col-dense" : ""}`}
                >
                  {/* Conteúdo */}
                  <div className={isEven ? "" : "lg:col-start-2"}>
                    <div className="flex items-center gap-4 mb-6">
                      <div className={`w-16 h-16 ${colors.icon} rounded-2xl flex items-center justify-center`}>
                        <IconComponent className="w-8 h-8" />
                      </div>
                      <div>
                        <h2 className={`text-3xl font-bold ${colors.text}`}>{solution.title}</h2>
                        <p className={`${colors.accent} font-semibold`}>{solution.subtitle}</p>
                      </div>
                    </div>

                    <p className="text-lg text-emerald-700 leading-relaxed mb-8">{solution.description}</p>

                    <div className="grid md:grid-cols-2 gap-8">
                      {/* Benefícios */}
                      <div>
                        <h3 className="text-xl font-bold text-emerald-900 mb-4">Benefícios</h3>
                        <ul className="space-y-2">
                          {solution.benefits.map((benefit, idx) => (
                            <li key={idx} className="flex items-start gap-2">
                              <CheckCircle className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                              <span className="text-emerald-700">{benefit}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Processo */}
                      <div>
                        <h3 className="text-xl font-bold text-emerald-900 mb-4">Processo</h3>
                        <ol className="space-y-2">
                          {solution.process.map((step, idx) => (
                            <li key={idx} className="flex items-start gap-3">
                              <span className="w-6 h-6 bg-emerald-600 text-white text-sm rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                                {idx + 1}
                              </span>
                              <span className="text-emerald-700">{step}</span>
                            </li>
                          ))}
                        </ol>
                      </div>
                    </div>
                  </div>

                  {/* Visual */}
                  <div className={isEven ? "" : "lg:col-start-1 lg:row-start-1"}>
                    <div
                      className={`${colors.bg} ${colors.border} border-2 rounded-3xl p-8 h-96 flex items-center justify-center`}
                    >
                      <div className="text-center">
                        <IconComponent className={`w-24 h-24 ${colors.accent} mx-auto mb-4`} />
                        <h3 className={`text-2xl font-bold ${colors.text} mb-2`}>{solution.title}</h3>
                        <p className={`${colors.accent}`}>Solução Especializada</p>
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Seção CTA */}
      <section className="py-16 px-4 bg-white/50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-emerald-900 mb-6">Precisa de uma Solução Personalizada?</h2>
          <p className="text-xl text-emerald-700 leading-relaxed mb-8">
            Nossa equipe está pronta para desenvolver soluções sob medida para as necessidades específicas do seu
            projeto ou empresa.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contato"
              className="bg-emerald-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-emerald-700 transition-colors flex items-center justify-center gap-2"
            >
              <Phone className="w-5 h-5" />
              Entre em Contato
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              href="/sobre"
              className="border-2 border-emerald-600 text-emerald-600 px-8 py-4 rounded-xl font-semibold hover:bg-emerald-50 transition-colors"
            >
              Conheça Nossa Equipe
            </Link>
          </div>
        </div>
      </section>

      {/* Seção de Estatísticas */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div className="p-6">
              <div className="text-4xl font-bold text-emerald-600 mb-2">500+</div>
              <div className="text-emerald-800 font-semibold">Projetos Realizados</div>
            </div>
            <div className="p-6">
              <div className="text-4xl font-bold text-emerald-600 mb-2">5+</div>
              <div className="text-emerald-800 font-semibold">Anos de Experiência</div>
            </div>
            <div className="p-6">
              <div className="text-4xl font-bold text-emerald-600 mb-2">100%</div>
              <div className="text-emerald-800 font-semibold">Conformidade Legal</div>
            </div>
            <div className="p-6">
              <div className="text-4xl font-bold text-emerald-600 mb-2">24h</div>
              <div className="text-emerald-800 font-semibold">Suporte Técnico</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
