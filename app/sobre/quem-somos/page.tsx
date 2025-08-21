import { Users, Award, Shield, Lightbulb } from "lucide-react"
import { Chatbot }  from "@/components/chatbot";

export default function QuemSomosPage() {
  const values = [
    {
      icon: Shield,
      title: "Confiabilidade",
      description: "Construímos relacionamentos duradouros baseados na confiança e transparência.",
    },
    {
      icon: Award,
      title: "Excelência",
      description: "Buscamos sempre a mais alta qualidade em todos os nossos serviços e projetos.",
    },
    {
      icon: Lightbulb,
      title: "Inovação",
      description: "Utilizamos tecnologias avançadas e metodologias inovadoras em nossas soluções.",
    },
    {
      icon: Users,
      title: "Colaboração",
      description: "Trabalhamos em parceria com nossos clientes para alcançar os melhores resultados.",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 to-green-50">
      <div>
        <Chatbot />
      </div>
      {/* Hero Section */}
      <section className="relative py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-emerald-900 mb-8 text-center">Quem Somos</h1>
          <div className="prose prose-lg max-w-none text-emerald-800">
            <p className="text-xl leading-relaxed mb-6">
              A <strong>ITÁGEO Ambiental</strong> é uma empresa especializada em consultoria ambiental, fundada com o
              propósito de oferecer soluções técnicas de alta qualidade para empresas que buscam excelência em gestão
              ambiental e conformidade regulatória.
            </p>
            <p className="text-lg leading-relaxed mb-6">
              Nossa equipe é formada por profissionais altamente qualificados, com vasta experiência em diferentes áreas
              da engenharia ambiental, biologia, geologia e gestão de projetos. Combinamos conhecimento técnico com uma
              abordagem prática e inovadora.
            </p>
            <p className="text-lg leading-relaxed">
              Desde nossa fundação, temos o compromisso de contribuir para um desenvolvimento mais sustentável,
              oferecendo serviços que não apenas atendem às exigências legais, mas também agregam valor aos negócios de
              nossos clientes.
            </p>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 px-4 bg-white/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-emerald-900 text-center mb-12">Nossos Valores</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const IconComponent = value.icon
              return (
                <div
                  key={index}
                  className="text-center p-6 bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="w-8 h-8 text-emerald-600" />
                  </div>
                  <h3 className="text-xl font-bold text-emerald-900 mb-3">{value.title}</h3>
                  <p className="text-emerald-700 leading-relaxed">{value.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-emerald-900 text-center mb-12">Nossa Equipe</h2>
          <div className="bg-white rounded-2xl p-8 shadow-sm">
            <p className="text-lg text-emerald-800 leading-relaxed text-center max-w-4xl mx-auto">
              Contamos com uma equipe multidisciplinar de especialistas em meio ambiente, cada um trazendo expertise
              única em suas áreas de atuação. Nossos profissionais possuem formação sólida e experiência prática em
              projetos de diferentes portes e complexidades, garantindo soluções personalizadas e eficazes para cada
              cliente.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
