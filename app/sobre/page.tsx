import Link from "next/link"
import { ArrowRight, Users, Target, Briefcase, MapPin } from "lucide-react"
import { Chatbot }  from "@/components/chatbot";

export default function SobrePage() {
  const sections = [
    {
      title: "Quem Somos",
      description: "Conheça nossa história, valores e a equipe especializada que faz a diferença no setor ambiental.",
      href: "/sobre/quem-somos",
      icon: Users,
      color: "bg-emerald-50 border-emerald-200",
    },
    {
      title: "Nosso Propósito",
      description: "Entenda nossa missão de promover sustentabilidade e excelência em consultoria ambiental.",
      href: "/sobre/proposito",
      icon: Target,
      color: "bg-green-50 border-green-200",
    },
    {
      title: "O que Fazemos",
      description: "Descubra nossos serviços especializados e como podemos ajudar sua empresa.",
      href: "/sobre/servicos",
      icon: Briefcase,
      color: "bg-teal-50 border-teal-200",
    },
    {
      title: "Onde Estamos",
      description: "Saiba onde estamos localizados e como entrar em contato conosco.",
      href: "/sobre/localizacao",
      icon: MapPin,
      color: "bg-cyan-50 border-cyan-200",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 to-green-50">
      {/* Hero Section */}
      <section className="relative py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-emerald-900 mb-6">Sobre a ITÁGEO Ambiental</h1>
          <p className="text-xl text-emerald-700 max-w-3xl mx-auto leading-relaxed">
            Somos uma empresa especializada em consultoria ambiental, comprometida com a sustentabilidade e a excelência
            técnica em todos os nossos projetos.
          </p>
        </div>
      </section>

      {/* Navigation Cards */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {sections.map((section) => {
              const IconComponent = section.icon
              return (
                <Link
                  key={section.href}
                  href={section.href}
                  className={`group p-8 rounded-2xl border-2 ${section.color} hover:shadow-lg transition-all duration-300 hover:scale-105`}
                >
                  <div className="flex items-start gap-6">
                    <div className="p-3 bg-white rounded-xl shadow-sm">
                      <IconComponent className="w-8 h-8 text-emerald-600" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-emerald-900 mb-3 group-hover:text-emerald-700 transition-colors">
                        {section.title}
                      </h3>
                      <p className="text-emerald-700 leading-relaxed mb-4">{section.description}</p>
                      <div className="flex items-center text-emerald-600 font-semibold group-hover:text-emerald-800 transition-colors">
                        Saiba mais
                        <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </div>
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-16 px-4 bg-white/50">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="p-6">
              <div className="text-4xl font-bold text-emerald-600 mb-2">5+</div>
              <div className="text-emerald-800 font-semibold">Anos de Experiência</div>
            </div>
            <div className="p-6">
              <div className="text-4xl font-bold text-emerald-600 mb-2">500+</div>
              <div className="text-emerald-800 font-semibold">Projetos Realizados</div>
            </div>
            <div className="p-6">
              <div className="text-4xl font-bold text-emerald-600 mb-2">100%</div>
              <div className="text-emerald-800 font-semibold">Compromisso com Qualidade</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
