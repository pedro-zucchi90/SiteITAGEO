"use client";
import { useState } from "react";
import {
  Calendar,
  MapPin,
  Users,
  ArrowRight,
  CheckCircle,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { Chatbot } from "@/components/chatbot";

// Função utilitária para resumir texto
function resumirTexto(texto: string, limite: number = 220) {
  if (!texto) return "";
  if (texto.length <= limite) return texto;
  // Tenta cortar no último ponto antes do limite
  const ponto = texto.lastIndexOf(".", limite);
  if (ponto > 0) return texto.slice(0, ponto + 1);
  return texto.slice(0, limite) + "...";
}

// Adiciona suporte a múltiplas imagens por case
const cases = [
  {
    id: 1,
    title: "Soluções Completas para o Tratamento de água e efluentes",
    category: "monitoring",
    client: "Rede Hoteleira do Sul / Setor de Energia",
    location: "Sul do Brasil",
    duration: "",
    year: "2024",
    images: [
      "/SolucoesAguaEfluentes/Sol1.jpg",
      "/SolucoesAguaEfluentes/Sol2.jpg",
      "/SolucoesAguaEfluentes/Sol3.jpg",
    ],
    description:
      "Soluções completas para tratamento de água e efluentes, unindo tecnologia, conformidade legal e operação contínua.",
    context:
      "Atendemos todas as etapas do processo — do projeto à fabricação e instalação — desenvolvendo soluções personalizadas para o tratamento de água e efluentes, sempre alinhadas aos padrões técnicos e às necessidades de cada cliente. Recentemente, entregamos duas Estações de Tratamento de Efluentes para uma rede hoteleira no Sul do Brasil, projetadas para alta performance e conformidade ambiental, mesmo em períodos de variação de ocupação. Também realizamos a entrega de três Estações de Tratamento de Água para o setor de energia, assegurando qualidade, confiabilidade e operação contínua. Cada projeto é analisado individualmente, permitindo estratégias viáveis que unem eficiência, durabilidade e conformidade técnica. Nosso compromisso é integrar tecnologia de ponta e responsabilidade ambiental para entregar resultados de excelência.",
    scope: [
      "Projeto, fabricação e instalação de 2 Estações de Tratamento de Efluentes (ETE) para rede hoteleira",
      "Projeto, fabricação e instalação de 3 Estações de Tratamento de Água (ETA) para setor de energia",
      "Equipamentos de alta performance para diferentes demandas de ocupação",
      "Elaboração de estratégias personalizadas para cada cliente",
    ],
    differentials: [
      "Soluções sob medida para cada empreendimento",
      "Tecnologia de ponta e responsabilidade ambiental integradas",
      "Garantia de eficiência, durabilidade e conformidade técnica",
      "Atendimento a padrões técnicos e exigências legais",
    ],
    results: [
      "Água potável garantida ao consumidor final",
      "Exigências ambientais plenamente atendidas",
      "Operação eficaz e segura dos sistemas",
      "Resultados de excelência reconhecidos pelos clientes",
    ],
    tags: ["Tratamento de Água", "Efluentes", "Monitoramento", "ETA", "ETE"],
  },
  {
    id: 2,
    title: "Monitoramento Ambiental de Água e Efluentes",
    category: "monitoring",
    client: "Setores: Hoteleiro, Energia, Parques, Postos, Público e Privado",
    location: "Brasil",
    duration: "",
    year: "2024",
    images: [
      "/OperacaoMonitoramentoAmbiental/Op1.jpg",
      "/OperacaoMonitoramentoAmbiental/Op2.jpg",
      "/OperacaoMonitoramentoAmbiental/Op3.jpg",
      "/OperacaoMonitoramentoAmbiental/Op4.jpg",
      "/OperacaoMonitoramentoAmbiental/Op5.jpg",
      "/OperacaoMonitoramentoAmbiental/Op6.jpg",
    ],
    description:
      "Monitoramento contínuo e de alta confiabilidade para garantir a qualidade da água e dos efluentes em conformidade com legislações e padrões técnicos.",
    context:
      "Oferecemos monitoramento contínuo e de alta confiabilidade para garantir que a qualidade da água e dos efluentes esteja sempre em conformidade com as legislações vigentes e os mais rigorosos padrões técnicos. Mensalmente, realizamos mais de 400 análises laboratoriais, abrangendo potabilidade, balneabilidade e efluentes. Nossa atuação vai além da coleta: realizamos operações e monitoramentos presenciais — semanais ou mensais — em ETAs e ETEs, assegurando o funcionamento otimizado dos sistemas, padronização de processos e máxima eficiência operacional.",
    scope: [
      "Mais de 400 análises laboratoriais mensais (potabilidade, balneabilidade, efluentes)",
      "Monitoramento e operação presencial em ETAs e ETEs (semanal/mensal)",
      "Atendimento a setores hoteleiro, parques, energia, postos, setor público e privado",
      "Padronização de processos e otimização operacional",
    ],
    differentials: [
      "Monitoramento contínuo e confiável",
      "Atuação presencial para máxima eficiência",
      "Conformidade legal assegurada em todos os setores atendidos",
      "Transformação de tecnologia e compromisso ambiental em resultados concretos",
    ],
    results: [
      "Conformidade legal assegurada",
      "Segurança, sustentabilidade e alto desempenho operacional",
      "Resultados concretos para cada cliente",
    ],
    tags: ["Monitoramento", "Água", "Efluentes", "Análises Laboratoriais"],
  },
  {
    id: 3,
    title: "Fiscalização de Obras Públicas e de Saneamento",
    category: "inspection",
    client: "Prefeitura de Itá",
    location: "Santa Catarina, SC",
    duration: "",
    year: "2024",
    images: [
      "/FiscalizacaoObras/fisc1.jpg",
      "/FiscalizacaoObras/fisc2.jpg",
      "/FiscalizacaoObras/fisc3.jpg",
      "/FiscalizacaoObras/fisc4.jpg",
      "/FiscalizacaoObras/fisc5.jpg",
    ],
    description:
      "Fiscalização técnica contínua em obras públicas, garantindo qualidade, prazos e conformidade.",
    context:
      "Garantimos que cada obra seja executada com qualidade, eficiência e total conformidade com os projetos e normas técnicas. Atuamos na fiscalização de empreendimentos públicos em diferentes áreas, especialmente construção civil e saneamento, acompanhando cada etapa para assegurar prazos, segurança e durabilidade. Com presença constante em campo e olhar técnico especializado, asseguramos que os investimentos públicos se transformem em obras funcionais e de alto padrão construtivo.",
    scope: [
      "Fiscalização presencial de obras de grande porte (Porto Náutico de Itá)",
      "Desenvolvimento dos projetos executivos da 1ª etapa (decks, píeres, casa salva-vidas)",
      "Acompanhamento de aterro no lago da UHE Itá",
      "Fiscalização de obras de saneamento público: construção de ETE e implantação da rede de interligação municipal",
    ],
    differentials: [
      "Equipe técnica especializada com presença contínua em campo",
      "Integração de fiscalização e elaboração de projetos executivos",
      "Foco em eficiência, durabilidade e segurança das obras",
      "Transformação de investimentos públicos em obras de alto padrão",
    ],
    results: [
      "Execução dentro dos prazos previstos",
      "Obras entregues com alto padrão construtivo",
      "Benefícios diretos à população local e ao turismo",
      "Eficiência no tratamento de efluentes e saneamento público",
    ],
    tags: ["Fiscalização", "Obras Públicas", "Saneamento", "Porto Náutico de Itá"],
  },
  {
    id: 4,
    title: "Tecnologia em Gestão Fundiária e Topografia",
    category: "topography",
    client: "Diversos Municípios e Proprietários",
    location: "Brasil",
    duration: "",
    year: "2024",
    images: [
      "/GestaoFundiariaTopografia/gest1.jpg",
      "/GestaoFundiariaTopografia/gest2.jpg",
    ],
    description:
      "Levantamentos topográficos de alta precisão com drones e GPS RTK para regularização fundiária.",
    context:
      "Para garantir precisão e agilidade em projetos de gestão fundiária e topografia, investimos continuamente em equipamentos de última geração. Nossa estrutura conta com GPS de alta performance com RTK, drones com RTK integrado e drones com RTK + Laser Scanner, permitindo levantamentos detalhados e mapeamentos com altíssima acurácia. Somos credenciados junto ao SIGEF e INCRA, atendendo plenamente aos requisitos da Norma Técnica de Georreferenciamento de Imóveis Rurais.",
    scope: [
      "Levantamentos topográficos com GPS RTK, drones RTK e Laser Scanner",
      "Mapeamentos detalhados de grandes áreas em tempo reduzido",
      "Captação de dados precisos até em áreas de difícil acesso",
      "Georreferenciamento certificado conforme SIRGAS 2000 e legislação vigente",
    ],
    differentials: [
      "Credenciamento no SIGEF e INCRA para georreferenciamento",
      "Conformidade com a Lei nº 10.267/2001 e normas técnicas",
      "Processos ágeis, seguros e legalmente válidos",
      "Redução de custos operacionais e entregas rápidas",
    ],
    results: [
      "Regularização fundiária agilizada e sem retrabalhos",
      "Evita indeferimentos e atrasos na regularização",
      "Soluções que unem tecnologia, conformidade e eficiência",
    ],
    tags: ["Topografia", "Gestão Fundiária", "Georreferenciamento", "SIGEF", "INCRA"],
  },
  {
    id: 5,
    title: "Projetos Executivos Integrados para Obras Públicas e Turísticas",
    category: "projects",
    client: "Associação Cultural de Itá / ENGIE",
    location: "Itá, SC",
    duration: "",
    year: "2024",
    images: [
      "/ProjetosObrasPublicasTuristicas/proj1.png",
      "/ProjetosObrasPublicasTuristicas/proj2.png",
      "/ProjetosObrasPublicasTuristicas/proj3.png",
    ],
    description:
      "Projetos executivos multidisciplinares, garantindo obras seguras, funcionais e de impacto social.",
    context:
      "Desenvolvemos projetos executivos completos para obras públicas, turísticas e empreendimentos em geral, contemplando todas as disciplinas necessárias para a execução segura e eficiente: projeto estrutural, hidrossanitário, elétrico, prevenção e combate a incêndio, acessibilidade, acústico, entre outros. Entre os destaques estão o Porto Náutico de Itá, Parque das Torres e Centro de Cultura de Itá, com projetos técnicos completos e aprovação junto ao Corpo de Bombeiros.",
    scope: [
      "Projetos estruturais, hidrossanitários, elétricos, acústicos e de acessibilidade",
      "Aprovação junto ao Corpo de Bombeiros",
      "Projetos técnicos para Porto Náutico de Itá, Parque das Torres e Centro de Cultura de Itá",
      "Equipe multidisciplinar para todas as disciplinas técnicas",
    ],
    differentials: [
      "Equipe multidisciplinar integrada",
      "Alto padrão técnico e de desempenho",
      "Soluções otimizadas para obras públicas e turísticas",
      "Foco em qualidade, prazos e conformidade legal",
    ],
    results: [
      "Projetos prontos para execução com total segurança",
      "Conformidade com legislações vigentes",
      "Impacto social e turístico positivo para a região",
    ],
    tags: ["Projetos Executivos", "Obras Públicas", "Turismo", "Porto Náutico de Itá", "Parque das Torres"],
  },
  {
    id: 6,
    title: "Elaboração e Gestão Completa de Loteamentos",
    category: "loteamentos",
    client: "Diversos",
    location: "Rio Grande do Sul, RS",
    duration: "",
    year: "2023",
    images: [
      "/ElaboracaoLoteamentos/Lot1.jpg",
      "/ElaboracaoLoteamentos/Lot2.jpg",
      "/ElaboracaoLoteamentos/Lot3.jpg",
    ],
    description:
      "Solução integrada para planejamento, elaboração e gestão de loteamentos.",
    context:
      "Oferecemos uma solução completa para a elaboração e gestão de loteamentos, conduzindo todas as etapas com eficiência, segurança jurídica e conformidade ambiental. Desenvolvemos e executamos estudos, licenças e programas ambientais, elaboramos todo o conjunto técnico necessário para implantação (urbanístico, drenagem, pavimentação, redes de água/esgoto, energia elétrica e áreas verdes) e atuamos na gestão fundiária desde o levantamento até o acompanhamento de registros.",
    scope: [
      "Estudos e licenciamento ambiental junto aos órgãos competentes",
      "Projetos urbanísticos, drenagem, pavimentação, redes de água/esgoto, energia elétrica e áreas verdes",
      "Gestão fundiária: levantamento, regularização, implantação e acompanhamento de registros",
      "Abordagem integrada para planejamento técnico e responsabilidade ambiental",
    ],
    differentials: [
      "Atuação integrada nas frentes ambiental, técnica e fundiária",
      "Cumprimento de prazos legais e segurança jurídica",
      "Empreendimentos planejados para sustentabilidade",
      "Entrega de loteamentos prontos para comercialização",
    ],
    results: [
      "Empreendimentos prontos para comercialização",
      "Processos realizados dentro dos prazos legais",
      "Soluções integradas e sustentáveis",
    ],
    tags: ["Loteamentos", "Urbanismo", "Licenciamento", "Gestão Fundiária"],
  },
];

export default function CasesPage() {
  const [expandedCaseId, setExpandedCaseId] = useState<number | null>(null);

  // Estado para controlar o índice da imagem atual de cada case
  const [carouselIndexes, setCarouselIndexes] = useState<{ [caseId: number]: number }>(
    () =>
      Object.fromEntries(
        cases.map((c) => [c.id, 0])
      )
  );

  const filteredCases = cases;

  // Funções para navegar no carousel
  function handlePrevImage(caseId: number, imagesLength: number) {
    setCarouselIndexes((prev) => ({
      ...prev,
      [caseId]: prev[caseId] === 0 ? imagesLength - 1 : prev[caseId] - 1,
    }));
  }

  function handleNextImage(caseId: number, imagesLength: number) {
    setCarouselIndexes((prev) => ({
      ...prev,
      [caseId]: prev[caseId] === imagesLength - 1 ? 0 : prev[caseId] + 1,
    }));
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 to-green-50">
      <div>
        <Chatbot />
      </div>

      {/* Hero */}
      <section className="relative py-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl font-bold text-emerald-900 mb-6">Cases de Sucesso</h1>
          <p className="text-2xl text-emerald-700 max-w-3xl mx-auto leading-relaxed mb-8">
            Conheça nossos principais projetos e soluções técnicas que unem inovação, eficiência e responsabilidade ambiental.
          </p>
        </div>
      </section>

      {/* Grid */}
      <section className="py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-10">
            {filteredCases.map((caseItem) => {
              const isExpanded = expandedCaseId === caseItem.id;
              const images = Array.isArray(caseItem.images) && caseItem.images.length > 0
                ? caseItem.images
                : [caseItem.images || "/placeholder.svg"];
              const currentIndex = carouselIndexes[caseItem.id] ?? 0;
              return (
                <div
                  key={caseItem.id}
                  className="bg-white rounded-3xl shadow-sm overflow-hidden hover:shadow-lg transition-shadow"
                >
                  {/* Carousel de imagens */}
                  <div className="aspect-video bg-emerald-100 relative overflow-hidden flex items-center justify-center">
                    <img
                      src={typeof images[currentIndex] === "string" ? images[currentIndex] : "/placeholder.svg"}
                      alt={caseItem.title}
                      className="w-full h-full object-cover transition-all duration-300"
                    />
                    {images.length > 1 && (
                      <>
                        <button
                          aria-label="Imagem anterior"
                          className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-1 shadow transition"
                          onClick={() => handlePrevImage(caseItem.id, images.length)}
                          tabIndex={0}
                        >
                          <ChevronLeft className="w-6 h-6 text-emerald-700" />
                        </button>
                        <button
                          aria-label="Próxima imagem"
                          className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-1 shadow transition"
                          onClick={() => handleNextImage(caseItem.id, images.length)}
                          tabIndex={0}
                        >
                          <ChevronRight className="w-6 h-6 text-emerald-700" />
                        </button>
                        {/* Indicadores de imagem */}
                        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1">
                          {images.map((_, idx) => (
                            <span
                              key={idx}
                              className={`block w-2 h-2 rounded-full ${idx === currentIndex ? "bg-emerald-600" : "bg-emerald-200"}`}
                            />
                          ))}
                        </div>
                      </>
                    )}
                    {caseItem.year && (
                      <div className="absolute top-4 left-4">
                        <span className="bg-emerald-600 text-white px-3 py-1 rounded-full text-base font-semibold">
                          {caseItem.year}
                        </span>
                      </div>
                    )}
                  </div>

                  <div className="p-7">
                    {Array.isArray(caseItem.tags) && caseItem.tags.length > 0 && (
                      <div className="flex flex-wrap gap-2 mb-3">
                        {caseItem.tags.map((tag) => (
                          <span
                            key={tag}
                            className="bg-emerald-100 text-emerald-700 px-3 py-1 rounded-full text-base font-medium"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}

                    <h3 className="text-2xl font-bold text-emerald-900 mb-3">{caseItem.title}</h3>

                    {/* Informações principais */}
                    {(caseItem.client || caseItem.location || caseItem.duration) && (
                      <div className="flex flex-wrap gap-4 mb-4 text-base">
                        {caseItem.client && (
                          <div className="flex items-center gap-2 text-emerald-700">
                            <Users className="w-5 h-5" />
                            {caseItem.client}
                          </div>
                        )}
                        {caseItem.location && (
                          <div className="flex items-center gap-2 text-emerald-700">
                            <MapPin className="w-5 h-5" />
                            {caseItem.location}
                          </div>
                        )}
                        {caseItem.duration && (
                          <div className="flex items-center gap-2 text-emerald-700">
                            <Calendar className="w-5 h-5" />
                            {caseItem.duration}
                          </div>
                        )}
                      </div>
                    )}

                    {caseItem.description && (
                      <p className="text-emerald-700 leading-relaxed mb-4 text-lg">{caseItem.description}</p>
                    )}

                    {/* Resumo e botão para expandir */}
                    <div className="space-y-4 text-emerald-700">
                      {/* Contexto resumido */}
                      {caseItem.context && (
                        <div>
                          <h4 className="font-bold text-emerald-900 mb-1 text-lg">Contexto e Objetivo:</h4>
                          <p className="text-base leading-relaxed">
                            {isExpanded
                              ? caseItem.context
                              : resumirTexto(caseItem.context, 220)}
                          </p>
                        </div>
                      )}

                      {/* Mostrar detalhes só se expandido */}
                      {isExpanded && (
                        <>
                          {Array.isArray(caseItem.scope) && caseItem.scope.length > 0 && (
                            <div>
                              <h4 className="font-bold text-emerald-900 mb-1 text-lg">Escopo Técnico:</h4>
                              <ul className="list-disc list-inside space-y-1 text-base">
                                {caseItem.scope.map((item, idx) => (
                                  <li key={idx}>{item}</li>
                                ))}
                              </ul>
                            </div>
                          )}
                          {Array.isArray(caseItem.differentials) && caseItem.differentials.length > 0 && (
                            <div>
                              <h4 className="font-bold text-emerald-900 mb-1 text-lg">Diferenciais:</h4>
                              <ul className="list-disc list-inside space-y-1 text-base">
                                {caseItem.differentials.map((item, idx) => (
                                  <li key={idx}>{item}</li>
                                ))}
                              </ul>
                            </div>
                          )}
                          {Array.isArray(caseItem.results) && caseItem.results.length > 0 && (
                            <div>
                              <h4 className="font-bold text-emerald-900 mb-1 text-lg">Resultados:</h4>
                              <ul className="space-y-2">
                                {caseItem.results.map((result, idx) => (
                                  <li key={idx} className="flex items-start gap-2">
                                    <CheckCircle className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                                    <span className="text-base">{result}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          )}
                        </>
                      )}

                      {/* Botão de expandir/recolher */}
                      <div>
                        <button
                          className="mt-2 text-emerald-700 hover:text-emerald-900 font-semibold text-base underline underline-offset-2"
                          onClick={() =>
                            setExpandedCaseId(isExpanded ? null : caseItem.id)
                          }
                        >
                          {isExpanded ? "Ver menos detalhes" : "Ver mais detalhes"}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
            {filteredCases.length === 0 && (
              <div className="col-span-2 text-center text-emerald-700 text-xl py-12">
                Nenhum case encontrado.
              </div>
            )}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-emerald-900 mb-6">
            Seu Projeto Pode Ser o Próximo Case de Sucesso
          </h2>
          <p className="text-2xl text-emerald-700 leading-relaxed mb-8">
            Entre em contato conosco e descubra como podemos oferecer soluções integradas, eficientes e sustentáveis.
          </p>
          <a
            href="/contato"
            className="bg-emerald-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-emerald-700 transition-colors flex items-center justify-center gap-2 mx-auto text-lg"
          >
            Solicitar Orçamento
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </section>
    </div>
  );
}