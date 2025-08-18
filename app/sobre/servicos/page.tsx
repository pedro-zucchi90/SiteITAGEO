import { Briefcase, FileCheck, Users, Zap, Shield } from "lucide-react"

export default function ServicosPage() {
  const services = [
    {
      icon: FileCheck,
      title: "Licenciamento Ambiental",
      description:
        "Assessoria completa para obtenção de licenças ambientais, desde estudos preliminares até acompanhamento de processos junto aos órgãos competentes.",
    },
    {
      icon: Users,
      title: "Consultoria e Assessoria",
      description:
        "Orientação especializada em questões ambientais, compliance regulatório e desenvolvimento de estratégias sustentáveis para seu negócio.",
    },
    {
      icon: Briefcase,
      title: "Estudos Ambientais",
      description:
        "Elaboração de EIA/RIMA, estudos de impacto ambiental, diagnósticos ambientais e relatórios técnicos especializados.",
    },
    {
      icon: Zap,
      title: "Gestão de Resíduos",
      description:
        "Desenvolvimento de planos de gerenciamento de resíduos, implementação de sistemas de gestão e otimização de processos.",
    },
    {
      icon: Shield,
      title: "Monitoramento Ambiental",
      description:
        "Programas de monitoramento da qualidade do ar, água e solo, com análises técnicas e relatórios de acompanhamento.",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 to-green-50">
      {/* Hero Section */}
      <section className="relative py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-emerald-900 mb-8">O que Fazemos</h1>
          <p className="text-xl text-emerald-700 leading-relaxed">
            Oferecemos soluções completas em consultoria ambiental, combinando expertise técnica com abordagem prática
            para atender às necessidades específicas de cada cliente.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8">
            {services.map((service, index) => {
              const IconComponent = service.icon
              return (
                <div key={index} className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex items-start gap-6">
                    <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <IconComponent className="w-8 h-8 text-emerald-600" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-emerald-900 mb-4">{service.title}</h3>
                      <p className="text-emerald-700 leading-relaxed">{service.description}</p>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 px-4 bg-white/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-emerald-900 text-center mb-12">Nosso Processo</h2>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-12 h-12 bg-emerald-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                1
              </div>
              <h3 className="text-lg font-bold text-emerald-900 mb-2">Diagnóstico</h3>
              <p className="text-emerald-700 text-sm">Análise detalhada das necessidades e desafios do cliente</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-emerald-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                2
              </div>
              <h3 className="text-lg font-bold text-emerald-900 mb-2">Planejamento</h3>
              <p className="text-emerald-700 text-sm">Desenvolvimento de estratégias personalizadas e cronograma</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-emerald-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                3
              </div>
              <h3 className="text-lg font-bold text-emerald-900 mb-2">Execução</h3>
              <p className="text-emerald-700 text-sm">Implementação das soluções com acompanhamento contínuo</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-emerald-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                4
              </div>
              <h3 className="text-lg font-bold text-emerald-900 mb-2">Monitoramento</h3>
              <p className="text-emerald-700 text-sm">Acompanhamento dos resultados e ajustes necessários</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
