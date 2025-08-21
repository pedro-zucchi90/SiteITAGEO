"use client";
import { useState } from "react";
import { Calendar, MapPin, Users, Award, ArrowRight, CheckCircle } from "lucide-react"
import { Chatbot }  from "@/components/chatbot";

export default function CasesPage() {
  const cases = [
    {
      id: 1,
      title: "Licenciamento Ambiental - Indústria Química",
      category: "licensing",
      client: "Indústria Química ABC",
      location: "São Paulo, SP",
      duration: "8 meses",
      year: "2024",
      image: "/placeholder-omj9a.png",
      description:
        "Assessoria completa para obtenção de Licença de Operação para indústria química de grande porte, incluindo estudos de impacto ambiental e implementação de medidas mitigadoras.",
      challenges: [
        "Complexidade regulatória do setor químico",
        "Múltiplos órgãos ambientais envolvidos",
        "Necessidade de estudos específicos de emissões",
      ],
      solutions: [
        "Elaboração de EIA/RIMA detalhado",
        "Coordenação com órgãos estaduais e federais",
        "Implementação de sistema de monitoramento contínuo",
      ],
      results: [
        "Licença obtida dentro do prazo",
        "Zero não conformidades no processo",
        "Redução de 30% nas emissões atmosféricas",
      ],
      tags: ["EIA/RIMA", "Licenciamento", "Indústria Química"],
    },
    {
      id: 2,
      title: "Consultoria em Gestão de Resíduos Sólidos",
      category: "consulting",
      client: "Rede de Supermercados XYZ",
      location: "Rio de Janeiro, RJ",
      duration: "6 meses",
      year: "2024",
      image: "/supermarket-waste-recycling.png",
      description:
        "Desenvolvimento e implementação de plano de gerenciamento de resíduos sólidos para rede com 50 lojas, focando em redução, reutilização e reciclagem.",
      challenges: [
        "Grande volume de resíduos orgânicos",
        "Logística complexa de coleta",
        "Necessidade de treinamento de equipes",
      ],
      solutions: [
        "Plano de Gerenciamento de Resíduos personalizado",
        "Parcerias com cooperativas de reciclagem",
        "Programa de capacitação para funcionários",
      ],
      results: [
        "Redução de 45% no volume de resíduos",
        "Economia de R$ 200.000/ano em destinação",
        "Certificação de sustentabilidade obtida",
      ],
      tags: ["Gestão de Resíduos", "Sustentabilidade", "Varejo"],
    },
    {
      id: 3,
      title: "Estudo de Impacto Ambiental - Complexo Logístico",
      category: "studies",
      client: "Empresa de Logística DEF",
      location: "Minas Gerais, MG",
      duration: "12 meses",
      year: "2023",
      image: "/logistics-warehouse-environmental-study.png",
      description:
        "Elaboração de Estudo de Impacto Ambiental para complexo logístico de 100 hectares, incluindo análise de fauna, flora e recursos hídricos.",
      challenges: [
        "Área de alta sensibilidade ambiental",
        "Presença de espécies protegidas",
        "Proximidade com recursos hídricos",
      ],
      solutions: [
        "Levantamento detalhado da biodiversidade",
        "Proposta de corredores ecológicos",
        "Plano de monitoramento da fauna",
      ],
      results: [
        "Aprovação do EIA pelos órgãos competentes",
        "Criação de 20 hectares de área de preservação",
        "Programa de monitoramento implementado",
      ],
      tags: ["EIA", "Biodiversidade", "Logística"],
    },
    {
      id: 4,
      title: "Monitoramento da Qualidade do Ar",
      category: "monitoring",
      client: "Siderúrgica GHI",
      location: "Espírito Santo, ES",
      duration: "24 meses",
      year: "2023-2024",
      image: "/placeholder-pmorn.png",
      description:
        "Implementação de programa de monitoramento contínuo da qualidade do ar em siderúrgica, com estações automáticas e relatórios mensais.",
      challenges: [
        "Múltiplos poluentes a serem monitorados",
        "Condições climáticas adversas",
        "Necessidade de dados em tempo real",
      ],
      solutions: [
        "Instalação de 5 estações de monitoramento",
        "Sistema de telemetria em tempo real",
        "Relatórios automatizados mensais",
      ],
      results: [
        "100% de conformidade com padrões legais",
        "Redução de 25% nas emissões de MP10",
        "Certificação ISO 14001 renovada",
      ],
      tags: ["Monitoramento", "Qualidade do Ar", "Siderurgia"],
    },
    {
      id: 5,
      title: "Licenciamento de Aterro Sanitário",
      category: "licensing",
      client: "Prefeitura Municipal JKL",
      location: "São Paulo, SP",
      duration: "10 meses",
      year: "2023",
      image: "/placeholder-k3wk7.png",
      description:
        "Assessoria para licenciamento ambiental de aterro sanitário municipal, incluindo estudos hidrogeológicos e plano de monitoramento.",
      challenges: [
        "Proximidade com área urbana",
        "Complexidade hidrogeológica local",
        "Exigências rigorosas dos órgãos ambientais",
      ],
      solutions: [
        "Estudos hidrogeológicos detalhados",
        "Sistema de impermeabilização avançado",
        "Plano de monitoramento de águas subterrâneas",
      ],
      results: [
        "Licença de Instalação obtida",
        "Aprovação unânime do conselho municipal",
        "Sistema de monitoramento implementado",
      ],
      tags: ["Licenciamento", "Aterro Sanitário", "Setor Público"],
    },
    {
      id: 6,
      title: "Auditoria Ambiental - Setor Têxtil",
      category: "consulting",
      client: "Indústria Têxtil MNO",
      location: "Santa Catarina, SC",
      duration: "4 meses",
      year: "2023",
      image: "/textile-audit.png",
      description:
        "Auditoria ambiental completa em indústria têxtil, identificando não conformidades e propondo plano de adequação ambiental.",
      challenges: [
        "Uso intensivo de recursos hídricos",
        "Geração de efluentes complexos",
        "Necessidade de adequação urgente",
      ],
      solutions: [
        "Auditoria detalhada de todos os processos",
        "Plano de adequação ambiental estruturado",
        "Sistema de gestão ambiental implementado",
      ],
      results: [
        "100% das não conformidades corrigidas",
        "Redução de 40% no consumo de água",
        "Certificação ambiental obtida",
      ],
      tags: ["Auditoria", "Setor Têxtil", "Gestão Ambiental"],
    },
  ];

  // Gerar categorias dinamicamente a partir dos cases
  const categoryMap: Record<string, { name: string; count: number }> = {};
  cases.forEach((c) => {
    if (!categoryMap[c.category]) {
      let name = "";
      if (c.category === "licensing") {name = "Licenciamento";}
      else if (c.category === "consulting") {name = "Consultoria";}
      else if (c.category === "studies") {name = "Estudos Ambientais";}
      else if (c.category === "monitoring") {name = "Monitoramento";}
      else {name = c.category};
      categoryMap[c.category] = { name, count: 1 };
    } else {
      categoryMap[c.category].count += 1;
    }
  });
  const categories = [
    { id: "all", name: "Todos os Projetos", count: cases.length },
    ...Object.entries(categoryMap).map(([id, { name, count }]) => ({
      id,
      name,
      count,
    })),
  ];

  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  const filteredCases =
    selectedCategory === "all"
      ? cases
      : cases.filter((c) => c.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 to-green-50">
      <div>
        <Chatbot />
      </div>
      {/* Hero Section */}
      <section className="relative py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-emerald-900 mb-6">Cases de Sucesso</h1>
          <p className="text-xl text-emerald-700 max-w-3xl mx-auto leading-relaxed mb-8">
            Conheça alguns dos projetos que desenvolvemos com excelência técnica e resultados comprovados para nossos
            clientes em diferentes setores da economia.
          </p>
          <div className="grid md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <div className="bg-white/70 p-4 rounded-xl text-center">
              <div className="text-2xl font-bold text-emerald-600">500+</div>
              <div className="text-emerald-800 text-sm">Projetos Realizados</div>
            </div>
            <div className="bg-white/70 p-4 rounded-xl text-center">
              <div className="text-2xl font-bold text-emerald-600">5+</div>
              <div className="text-emerald-800 text-sm">Anos de Experiência</div>
            </div>
            <div className="bg-white/70 p-4 rounded-xl text-center">
              <div className="text-2xl font-bold text-emerald-600">100%</div>
              <div className="text-emerald-800 text-sm">Taxa de Aprovação</div>
            </div>
            <div className="bg-white/70 p-4 rounded-xl text-center">
              <div className="text-2xl font-bold text-emerald-600">50+</div>
              <div className="text-emerald-800 text-sm">Clientes Atendidos</div>
            </div>
          </div>
        </div>
      </section>

      {/* Filter Categories */}
      <section className="py-8 px-4 bg-white/50">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category.id}
                className={`px-6 py-3 bg-white border-2 border-emerald-200 text-emerald-700 rounded-full hover:bg-emerald-50 hover:border-emerald-300 transition-colors font-semibold
                  ${selectedCategory === category.id ? "bg-emerald-100 border-emerald-400 text-emerald-900" : ""}
                `}
                onClick={() => setSelectedCategory(category.id)}
                type="button"
              >
                {category.name} ({category.count})
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Cases Grid */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {filteredCases.map((caseItem) => (
              <div
                key={caseItem.id}
                className="bg-white rounded-3xl shadow-sm overflow-hidden hover:shadow-lg transition-shadow"
              >
                {/* Case Image */}
                <div className="aspect-video bg-emerald-100 relative overflow-hidden">
                  <img
                    src={caseItem.image || "/placeholder.svg"}
                    alt={caseItem.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-emerald-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      {caseItem.year}
                    </span>
                  </div>
                </div>

                {/* Case Content */}
                <div className="p-8">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {caseItem.tags.map((tag) => (
                      <span
                        key={tag}
                        className="bg-emerald-100 text-emerald-700 px-3 py-1 rounded-full text-sm font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <h3 className="text-2xl font-bold text-emerald-900 mb-4">{caseItem.title}</h3>

                  <div className="grid md:grid-cols-3 gap-4 mb-6 text-sm">
                    <div className="flex items-center gap-2 text-emerald-700">
                      <Users className="w-4 h-4" />
                      {caseItem.client}
                    </div>
                    <div className="flex items-center gap-2 text-emerald-700">
                      <MapPin className="w-4 h-4" />
                      {caseItem.location}
                    </div>
                    <div className="flex items-center gap-2 text-emerald-700">
                      <Calendar className="w-4 h-4" />
                      {caseItem.duration}
                    </div>
                  </div>

                  <p className="text-emerald-700 leading-relaxed mb-6">{caseItem.description}</p>

                  {/* Results Highlights */}
                  <div className="space-y-4">
                    <h4 className="font-bold text-emerald-900">Principais Resultados:</h4>
                    <ul className="space-y-2">
                      {caseItem.results.slice(0, 2).map((result, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <CheckCircle className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                          <span className="text-emerald-700 text-sm">{result}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  {/* Botão de detalhes removido conforme solicitado */}
                </div>
              </div>
            ))}
            {filteredCases.length === 0 && (
              <div className="col-span-2 text-center text-emerald-700 text-lg py-12">
                Nenhum case encontrado para esta categoria.
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Depoimentos em formato de lista JSON */}
      {(() => {
        const testimonials = [
          {
            nome: "João Silva",
            cargo: "Diretor Ambiental - Indústria ABC",
            depoimento: "A ITÁGEO demonstrou excelência técnica e profissionalismo em todo o processo de licenciamento. Conseguimos nossa licença dentro do prazo e sem complicações."
          },
          {
            nome: "Maria Santos",
            cargo: "Gerente de Sustentabilidade - Rede XYZ",
            depoimento: "O trabalho da equipe ITÁGEO superou nossas expectativas. Conseguimos reduzir significativamente nossos resíduos e ainda economizar recursos."
          },
          {
            nome: "Carlos Oliveira",
            cargo: "Coordenador de Projetos - Logística DEF",
            depoimento: "A consultoria foi fundamental para o sucesso do nosso projeto logístico. A equipe é extremamente competente e comprometida."
          },
          {
            nome: "Ana Costa",
            cargo: "Engenheira Ambiental - Siderúrgica GHI",
            depoimento: "O monitoramento da qualidade do ar implementado pela ITÁGEO trouxe resultados excelentes. Estamos muito satisfeitos com o serviço prestado."
          }
        ]
        return (
          <section className="py-16 px-4 bg-white/50">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-emerald-900 text-center mb-12">O que Nossos Clientes Dizem</h2>
              <div className="grid md:grid-cols-2 gap-8">
                {testimonials.map((item, idx) => (
                  <div key={idx} className="bg-white p-8 rounded-2xl shadow-sm">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center">
                        <Award className="w-6 h-6 text-emerald-600" />
                      </div>
                      <div>
                        <h4 className="font-bold text-emerald-900">{item.nome}</h4>
                        <p className="text-emerald-600 text-sm">{item.cargo}</p>
                      </div>
                    </div>
                    <p className="text-emerald-700 leading-relaxed">
                      "{item.depoimento}"
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )
      })()}

      {/* CTA Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-emerald-900 mb-6">Seu Projeto Pode Ser o Próximo Case de Sucesso</h2>
          <p className="text-xl text-emerald-700 leading-relaxed mb-8">
            Entre em contato conosco e descubra como podemos ajudar sua empresa a alcançar a excelência ambiental.
          </p>
          <a
            href="/contato"
            className="bg-emerald-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-emerald-700 transition-colors flex items-center justify-center gap-2 mx-auto"
          >
            Solicitar Orçamento
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </section>
    </div>
  )
}
