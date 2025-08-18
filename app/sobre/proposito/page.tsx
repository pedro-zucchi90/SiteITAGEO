import { Target, Heart, Leaf, Globe } from "lucide-react"

export default function PropositoPage() {
  const pillars = [
    {
      icon: Leaf,
      title: "Sustentabilidade",
      description: "Promovemos práticas que equilibram desenvolvimento econômico com preservação ambiental.",
    },
    {
      icon: Globe,
      title: "Responsabilidade",
      description: "Assumimos nosso papel na construção de um futuro mais sustentável para as próximas gerações.",
    },
    {
      icon: Heart,
      title: "Compromisso",
      description: "Dedicamos-nos integralmente ao sucesso de cada projeto e à satisfação de nossos clientes.",
    },
    {
      icon: Target,
      title: "Excelência",
      description: "Buscamos constantemente superar expectativas através da qualidade e inovação.",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 to-green-50">
      {/* Hero Section */}
      <section className="relative py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-emerald-900 mb-8">Nosso Propósito</h1>
          <div className="bg-white/70 rounded-2xl p-8 shadow-sm">
            <h2 className="text-2xl font-bold text-emerald-800 mb-6">Missão</h2>
            <p className="text-xl text-emerald-700 leading-relaxed mb-8">
              Oferecer soluções ambientais inovadoras e sustentáveis, contribuindo para o desenvolvimento responsável de
              empresas e comunidades, sempre com excelência técnica e compromisso ético.
            </p>

            <h2 className="text-2xl font-bold text-emerald-800 mb-6">Visão</h2>
            <p className="text-xl text-emerald-700 leading-relaxed">
              Ser reconhecida como referência em consultoria ambiental, liderando a transformação para práticas mais
              sustentáveis no mercado brasileiro.
            </p>
          </div>
        </div>
      </section>

      {/* Pillars Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-emerald-900 text-center mb-12">Nossos Pilares</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {pillars.map((pillar, index) => {
              const IconComponent = pillar.icon
              return (
                <div key={index} className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex items-start gap-6">
                    <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <IconComponent className="w-8 h-8 text-emerald-600" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-emerald-900 mb-4">{pillar.title}</h3>
                      <p className="text-emerald-700 leading-relaxed">{pillar.description}</p>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-16 px-4 bg-white/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-emerald-900 text-center mb-12">Nosso Impacto</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="text-4xl font-bold text-emerald-600 mb-4">500+</div>
              <div className="text-emerald-800 font-semibold mb-2">Projetos Ambientais</div>
              <div className="text-emerald-600 text-sm">Realizados com sucesso</div>
            </div>
            <div className="text-center p-6">
              <div className="text-4xl font-bold text-emerald-600 mb-4">15+</div>
              <div className="text-emerald-800 font-semibold mb-2">Anos de Atuação</div>
              <div className="text-emerald-600 text-sm">Construindo um futuro sustentável</div>
            </div>
            <div className="text-center p-6">
              <div className="text-4xl font-bold text-emerald-600 mb-4">100%</div>
              <div className="text-emerald-800 font-semibold mb-2">Compromisso</div>
              <div className="text-emerald-600 text-sm">Com a qualidade e sustentabilidade</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
