import Link from "next/link"
import { ArrowRight, CheckCircle, FileCheck, Users, Briefcase, Zap, Shield, Phone } from "lucide-react"

export default function SolucoesPage() {
  const solutions = [
    {
      id: "licenciamento",
      icon: FileCheck,
      title: "Licenciamento Ambiental",
      subtitle: "Assessoria completa para obtenção de licenças",
      description:
        "Oferecemos suporte integral para todos os tipos de licenciamento ambiental, desde a análise de viabilidade até a obtenção das licenças necessárias.",
      benefits: [
        "Análise de viabilidade ambiental",
        "Elaboração de documentação técnica",
        "Acompanhamento junto aos órgãos competentes",
        "Renovação e alteração de licenças",
        "Consultoria em compliance ambiental",
      ],
      process: [
        "Diagnóstico inicial do empreendimento",
        "Elaboração dos estudos necessários",
        "Protocolo junto aos órgãos ambientais",
        "Acompanhamento do processo",
        "Obtenção da licença",
      ],
      color: "emerald",
    },
    {
      id: "consultoria",
      icon: Users,
      title: "Consultoria e Assessoria",
      subtitle: "Orientação especializada em questões ambientais",
      description:
        "Prestamos consultoria técnica especializada para empresas que buscam excelência em gestão ambiental e conformidade regulatória.",
      benefits: [
        "Diagnóstico ambiental empresarial",
        "Desenvolvimento de políticas ambientais",
        "Treinamento de equipes",
        "Auditoria ambiental",
        "Planos de adequação ambiental",
      ],
      process: [
        "Avaliação das necessidades do cliente",
        "Desenvolvimento de estratégias personalizadas",
        "Implementação das soluções",
        "Monitoramento e acompanhamento",
        "Relatórios de resultados",
      ],
      color: "green",
    },
    {
      id: "estudos",
      icon: Briefcase,
      title: "Estudos Ambientais",
      subtitle: "EIA/RIMA e relatórios técnicos especializados",
      description:
        "Elaboramos estudos ambientais completos e detalhados, atendendo às exigências dos órgãos ambientais e às necessidades específicas de cada projeto.",
      benefits: [
        "Estudos de Impacto Ambiental (EIA)",
        "Relatórios de Impacto Ambiental (RIMA)",
        "Planos de Controle Ambiental (PCA)",
        "Relatórios de Controle Ambiental (RCA)",
        "Estudos de viabilidade ambiental",
      ],
      process: [
        "Levantamento de dados primários",
        "Análise dos impactos ambientais",
        "Proposição de medidas mitigadoras",
        "Elaboração do relatório técnico",
        "Apresentação aos órgãos competentes",
      ],
      color: "teal",
    },
    {
      id: "residuos",
      icon: Zap,
      title: "Gestão de Resíduos",
      subtitle: "Planos de gerenciamento e otimização",
      description:
        "Desenvolvemos soluções completas para gestão de resíduos, desde o diagnóstico até a implementação de sistemas eficientes de gerenciamento.",
      benefits: [
        "Planos de Gerenciamento de Resíduos Sólidos",
        "Classificação e caracterização de resíduos",
        "Destinação ambientalmente adequada",
        "Otimização de processos",
        "Redução de custos operacionais",
      ],
      process: [
        "Diagnóstico da geração de resíduos",
        "Classificação e quantificação",
        "Desenvolvimento do plano de gestão",
        "Implementação das soluções",
        "Monitoramento e otimização",
      ],
      color: "cyan",
    },
    {
      id: "monitoramento",
      icon: Shield,
      title: "Monitoramento Ambiental",
      subtitle: "Programas de acompanhamento da qualidade",
      description:
        "Implementamos programas de monitoramento ambiental para acompanhar a qualidade do ar, água e solo, garantindo conformidade e sustentabilidade.",
      benefits: [
        "Monitoramento da qualidade do ar",
        "Análise da qualidade da água",
        "Monitoramento do solo",
        "Relatórios técnicos periódicos",
        "Alertas de não conformidade",
      ],
      process: [
        "Definição dos parâmetros de monitoramento",
        "Instalação de equipamentos",
        "Coleta e análise de dados",
        "Elaboração de relatórios",
        "Recomendações de melhorias",
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
            Oferecemos um portfólio completo de serviços em consultoria ambiental, desenvolvidos para atender às
            necessidades específicas de cada cliente com excelência técnica e inovação.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <div className="bg-white/70 px-6 py-3 rounded-full">
              <span className="text-emerald-800 font-semibold">✓ Licenciamento Ambiental</span>
            </div>
            <div className="bg-white/70 px-6 py-3 rounded-full">
              <span className="text-emerald-800 font-semibold">✓ Consultoria Especializada</span>
            </div>
            <div className="bg-white/70 px-6 py-3 rounded-full">
              <span className="text-emerald-800 font-semibold">✓ Estudos Técnicos</span>
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
                  <div className={!isEven ? "lg:col-start-2" : ""}>
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
                  <div className={!isEven ? "lg:col-start-1 lg:row-start-1" : ""}>
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
