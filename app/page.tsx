'use client';

import Link from "next/link";
import { Button } from "@/components/ui/button";

import { RevealSection } from "@/components/ui/reveal-section";
import { RevealHero } from "@/components/ui/reveal-hero";
import {
  Users,
  Award,
  Shield,
  Lightbulb,
  Target,
  Heart,
  Leaf,
  Globe,
  CheckCircle,
  Clock,
  ArrowRight,
  FileText,
  Users2,
  BarChart3,
  Recycle,
  TrendingUp,
} from "lucide-react";

import { Chatbot }  from "@/components/chatbot";

export default function HomePage() {
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
  ];

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
      description: "Dedicamo-nos integralmente ao sucesso de cada projeto e à satisfação de nossos clientes.",
    },
    {
      icon: Target,
      title: "Excelência",
      description: "Buscamos constantemente superar expectativas por meio da qualidade e inovação.",
    },
  ];

  const services = [
    {
      title: "Licenciamento Ambiental",
      description: "Assessoria completa para obtenção de licenças ambientais junto aos órgãos competentes.",
      detailedDescription: "Licenças Prévia, de Instalação e de Operação para diversos tipos de empreendimentos.",
      icon: FileText,
      color: "from-blue-500 to-blue-600",
      features: ["Análise de viabilidade", "Documentação técnica", "Acompanhamento processual"],
    },
    {
      title: "Consultoria e Assessoria",
      description: "Orientação especializada para adequação às normas ambientais vigentes.",
      detailedDescription: "Suporte técnico especializado para conformidade legal e melhores práticas ambientais.",
      icon: Users2,
      color: "from-emerald-500 to-emerald-600",
      features: ["Diagnóstico ambiental", "Planos de adequação", "Treinamento de equipes"],
    },
    {
      title: "Estudos Ambientais",
      description: "Elaboração de estudos técnicos para avaliação de impactos ambientais.",
      detailedDescription: "EIA/RIMA, RCA, PCA e demais estudos exigidos pela legislação ambiental.",
      icon: BarChart3,
      color: "from-purple-500 to-purple-600",
      features: ["Diagnóstico ambiental", "Avaliação de impactos", "Medidas mitigadoras"],
    },
    {
      title: "Gestão de Resíduos",
      description: "Soluções sustentáveis para gerenciamento e destinação adequada de resíduos.",
      detailedDescription: "Planos de gerenciamento e soluções para todos os tipos de resíduos industriais.",
      icon: Recycle,
      color: "from-green-500 to-green-600",
      features: ["PGRS", "Logística reversa", "Destinação adequada"],
    },
    {
      title: "Monitoramento Ambiental",
      description: "Acompanhamento contínuo de indicadores ambientais e conformidade.",
      detailedDescription: "Monitoramento de água, ar, solo e ruído com relatórios técnicos especializados.",
      icon: TrendingUp,
      color: "from-orange-500 to-orange-600",
      features: ["Coleta de amostras", "Análises laboratoriais", "Relatórios técnicos"],
    },
  ];

  return (
    <div className="min-h-screen relative">
      {/* Hero Section */}
        <section className="relative min-h-screen bg-gradient-to-br from-green-400 via-green-500 to-green-600 overflow-visible">
          {/* Video Background Hero */}
          <div className="absolute inset-0 z-20" id="video-container">
            <video
              autoPlay
              muted
              loop
              playsInline
              className="absolute inset-0 w-full h-full object-cover"
              onLoadedData={(e) => {
                const fallback = document.getElementById("fallback-container");
                if (fallback) fallback.style.opacity = "0";
              }}
            >
              <source src="/bg_video.webm" type="video/webm" />
              <source src="/bg_video.mp4" type="video/mp4" />
            </video>
            <div className="absolute inset-0 bg-gradient-to-br from-green-500/70 via-green-500/60 to-green-600/70"></div>
          </div>

          {/* Créditos do vídeo */}
          <div className="absolute bottom-2 right-4 z-40 text-white/80 text-xs md:text-sm">
            Vídeo de drone de Itá - SC por{" "}
            <a
              href="https://www.youtube.com/@CAV07"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-green-200"
            >
              CAV07
            </a>
          </div>

        {/* Créditos do vídeo */}
        <div className="absolute bottom-2 right-2 z-40 text-white/80 text-xs md:text-sm max-w-[90vw]">
          Imagens aéreas de Itá - SC por{" "}
          <a
            href="https://www.youtube.com/@CAV07"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-green-200 break-all"
          >
            CAV07
          </a>
        </div>

        {/* Fallback Background Pattern */}
        <div
          className="absolute inset-0 z-10 opacity-20 transition-opacity duration-1000"
          id="fallback-container"
        >
          <div className="absolute inset-0 bg-[url('/modern-eco-building.png')] bg-cover bg-center bg-no-repeat"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-green-500/50 to-transparent"></div>
        </div>

        {/* Geometric Pattern Overlay */}
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <svg className="w-full h-full" viewBox="0 0 1200 800" fill="none">
            <path
              d="M0 400L300 200L600 400L900 100L1200 300V800H0V400Z"
              fill="white"
              fillOpacity="0.1"
            />
            <path
              d="M0 600L400 300L800 500L1200 200V800H0V600Z"
              fill="white"
              fillOpacity="0.05"
            />
          </svg>
        </div>

        {/* Content */}
        <div className="relative z-30 flex items-center justify-center min-h-screen px-2 sm:px-4">
          <div className="w-full max-w-4xl mx-auto text-center text-white">
            <RevealHero stagger={0.15}>
              {/* Main Headline */}
              <h1 className="mt-8 sm:mt-0 text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 sm:mb-6 leading-tight">
                Sustentabilidade e
                <br />
                <span className="text-green-200">Inovação Ambiental</span>
              </h1>

              {/* Subtitle */}
              <p className="text-base xs:text-lg sm:text-xl md:text-2xl mb-8 sm:mb-12 max-w-3xl mx-auto leading-relaxed opacity-95">
                Consultoria especializada em soluções ambientais sustentáveis,
                <br className="hidden xs:inline" />
                comprometida com o futuro do nosso planeta.
              </p>
            </RevealHero>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mb-10 sm:mb-16 w-full">
              <Button
                asChild
                size="lg"
                className="bg-green-200 hover:bg-green-100 text-green-800 font-semibold px-6 py-3 sm:px-8 sm:py-4 text-base sm:text-lg rounded-full transition-all duration-300 hover:scale-105 w-full sm:w-auto"
              >
                <Link href="/solucoes">Conhecer Soluções →</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-2 border-white text-white hover:bg-white hover:text-green-600 font-semibold px-6 py-3 sm:px-8 sm:py-4 text-base sm:text-lg rounded-full transition-all duration-300 hover:scale-105 bg-transparent w-full sm:w-auto"
              >
                <Link href="/contato">Fale Conosco</Link>
              </Button>
            </div>

            {/* Statistics Cards */}
            <RevealHero className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 max-w-4xl mx-auto mb-8 sm:mb-0" stagger={0.15}>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-5 sm:p-6 border border-white/20 hover:bg-white/15 transition-all duration-300 flex flex-col items-center justify-center text-center h-full">
                <div className="w-12 h-12 mb-3 flex items-center justify-center">
                  <CheckCircle className="w-8 h-8 text-green-200" />
                </div>
                <div className="text-2xl sm:text-3xl font-bold mb-1 sm:mb-2">500+</div>
                <div className="text-green-100 font-medium text-sm sm:text-base">Projetos Sustentáveis</div>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-5 sm:p-6 border border-white/20 hover:bg-white/15 transition-all duration-300 flex flex-col items-center justify-center text-center h-full">
                <div className="w-12 h-12 mb-3 flex items-center justify-center">
                  <Clock className="w-8 h-8 text-green-200" />
                </div>
                <div className="text-2xl sm:text-3xl font-bold mb-1 sm:mb-2">5+</div>
                <div className="text-green-100 font-medium text-sm sm:text-base">Anos de Experiência</div>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-5 sm:p-6 border border-white/20 hover:bg-white/15 transition-all duration-300 flex flex-col items-center justify-center text-center h-full">
                <div className="w-12 h-12 mb-3 flex items-center justify-center">
                  <Heart className="w-8 h-8 text-green-200" />
                </div>
                <div className="text-2xl sm:text-3xl font-bold mb-1 sm:mb-2">100%</div>
                <div className="text-green-100 font-medium text-sm sm:text-base">Comprometimento Ambiental</div>
              </div>
            </RevealHero>
            <div className="block sm:hidden h-8" />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-12 sm:py-20 px-2 sm:px-4 bg-gradient-to-br from-emerald-50 to-green-50">
        <div className="max-w-6xl mx-auto">
          <RevealSection className="text-center mb-10 sm:mb-16" stagger={0.2}>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-emerald-900 mb-4 sm:mb-6">Quem Somos</h2>
            <div className="max-w-4xl mx-auto">
              <p className="text-base sm:text-xl text-emerald-800 leading-relaxed mb-4 sm:mb-6">
                A <strong>ITÁGEO Ambiental</strong> é uma empresa especializada em consultoria ambiental, fundada com o
                propósito de oferecer soluções técnicas de alta qualidade para empresas que buscam excelência em gestão
                ambiental e conformidade regulatória.
              </p>
              <p className="text-sm sm:text-lg text-emerald-700 leading-relaxed">
                Nossa equipe é formada por profissionais altamente qualificados, com vasta experiência em diferentes
                áreas da engenharia ambiental, biologia, geologia e gestão de projetos. Combinamos conhecimento técnico
                com uma abordagem prática e inovadora.
              </p>
            </div>
          </RevealSection>

          {/* Values */}
          <div className="mb-14 sm:mb-20">
            <h3 className="text-2xl sm:text-3xl font-bold text-emerald-900 text-center mb-8 sm:mb-12">Nossos Valores</h3>
            <RevealSection className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-8" stagger={0.1}>
              {values.map((value, index) => {
                const IconComponent = value.icon;
                return (
                  <div
                    key={index}
                    className="flex flex-col items-center justify-center text-center p-4 sm:p-6 bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow h-full"
                  >
                    <div className="w-14 h-14 sm:w-16 sm:h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                      <IconComponent className="w-7 h-7 sm:w-8 sm:h-8 text-emerald-600" />
                    </div>
                    <h4 className="text-lg sm:text-xl font-bold text-emerald-900 mb-2 sm:mb-3">{value.title}</h4>
                    <p className="text-emerald-700 text-sm sm:text-base leading-relaxed">{value.description}</p>
                  </div>
                );
              })}
            </RevealSection>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-12 sm:py-20 px-2 sm:px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-emerald-900 mb-8 sm:mb-12">Nosso Propósito</h2>
            <RevealSection className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-12" stagger={0.3}>
              <div className="flex flex-col items-center justify-center text-center bg-emerald-50 rounded-2xl p-5 sm:p-8 h-full">
                <h3 className="text-xl sm:text-2xl font-bold text-emerald-800 mb-4 sm:mb-6">Missão</h3>
                <p className="text-base sm:text-xl text-emerald-700 leading-relaxed">
                  Oferecer soluções ambientais inovadoras e sustentáveis, contribuindo para o desenvolvimento
                  responsável de empresas e comunidades, sempre com excelência técnica e compromisso ético.
                </p>
              </div>
              <div className="flex flex-col items-center justify-center text-center bg-green-50 rounded-2xl p-5 sm:p-8 h-full">
                <h3 className="text-xl sm:text-2xl font-bold text-emerald-800 mb-4 sm:mb-6">Visão</h3>
                <p className="text-base sm:text-xl text-emerald-700 leading-relaxed">
                  Ser reconhecida como referência em consultoria ambiental, liderando a transformação para práticas mais
                  sustentáveis no mercado brasileiro.
                </p>
              </div>
            </RevealSection>
          </div>

          {/* Pillars */}
          <div>
            <h3 className="text-2xl sm:text-3xl font-bold text-emerald-900 text-center mb-8 sm:mb-12">Nossos Pilares</h3>
            <RevealSection className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-8" stagger={0.2}>
              {pillars.map((pillar, index) => {
                const IconComponent = pillar.icon;
                return (
                  <div key={index} className="flex flex-col items-center justify-center text-center bg-emerald-50 rounded-2xl p-5 sm:p-8 hover:shadow-md transition-shadow h-full">
                    <div className="w-14 h-14 sm:w-16 sm:h-16 bg-emerald-100 rounded-full flex items-center justify-center mb-2 sm:mb-4">
                      <IconComponent className="w-7 h-7 sm:w-8 sm:h-8 text-emerald-600" />
                    </div>
                    <h4 className="text-lg sm:text-2xl font-bold text-emerald-900 mb-2 sm:mb-4">{pillar.title}</h4>
                    <p className="text-emerald-700 text-sm sm:text-base leading-relaxed">{pillar.description}</p>
                  </div>
                );
              })}
            </RevealSection>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-14 sm:py-24 px-2 sm:px-4 bg-gradient-to-br from-slate-50 to-emerald-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-20">
            <h2 className="text-3xl sm:text-5xl font-bold text-emerald-900 mb-5 sm:mb-8">Nossas Soluções</h2>
            <p className="text-base sm:text-xl text-emerald-700 max-w-4xl mx-auto leading-relaxed">
              Oferecemos um portfólio completo de serviços ambientais especializados, desenvolvidos para atender às
              necessidades específicas de cada cliente com excelência técnica e inovação.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-8 mb-10 sm:mb-16 p-0 sm:p-4 md:p-6">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <RevealSection key={index} stagger={0.1}>
                  <div className="group flex h-full">
                    <div
                      className={`
                        bg-white rounded-2xl p-5 sm:p-8 w-full flex flex-col items-center text-center relative overflow-hidden my-2 transition-all duration-300 group-hover:shadow-xl group-hover:-translate-y-2
                        min-h-[480px] max-h-[480px] h-[480px]
                      `}
                      style={{
                        minHeight: "480px",
                        maxHeight: "480px",
                        height: "480px",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "space-between"
                      }}
                    >
                      {/* Icon */}
                      <div
                        className={`inline-flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-r ${service.color} rounded-xl text-white mb-4 sm:mb-6 transform transition-transform duration-300 hover:scale-110 hover:rotate-3`}
                      >
                        <IconComponent className="w-7 h-7 sm:w-8 sm:h-8" />
                      </div>

                      {/* Content */}
                      <div className="flex-1 flex flex-col items-center justify-center text-center w-full">
                        <h3 className="text-lg sm:text-2xl font-bold text-emerald-900 mb-1 sm:mb-2">
                          {service.title}
                        </h3>
                        <p className="text-emerald-600 font-medium mb-2 sm:mb-4 text-sm sm:text-base">
                          {service.detailedDescription}
                        </p>
                        <p className="text-emerald-700 text-xs sm:text-sm leading-relaxed mb-4 sm:mb-6">
                          {service.description}
                        </p>

                        {/* Features List */}
                        <div className="flex-1 w-full">
                          <ul className="space-y-2 sm:space-y-3">
                            {service.features.map((feature, featureIndex) => (
                              <li
                                key={featureIndex}
                                className="flex items-center justify-center space-x-2 sm:space-x-3 text-emerald-700 opacity-0 -translate-x-4 animate-[slideIn_0.4s_ease-out_forwards]"
                                style={{ animationDelay: `${featureIndex * 0.1 + 0.2}s` }}
                              >
                                <div className={`w-2 h-2 bg-gradient-to-r ${service.color} rounded-full`}></div>
                                <span className="text-xs sm:text-sm font-medium">{feature}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      {/* CTA Button */}
                      <div className="mt-6 sm:mt-8 transform transition-transform duration-200 hover:scale-[1.02] w-full">
                        <Button
                          asChild
                          className={`w-full bg-gradient-to-r ${service.color} text-white hover:shadow-lg transition-all duration-200`}
                        >
                          <Link href="/solucoes" className="flex items-center justify-center gap-2">
                            Saiba Mais
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                          </Link>
                        </Button>
                      </div>
                    </div>
                  </div>
                </RevealSection>
              );
            })}
          </div>

          <div className="bg-gradient-to-r from-emerald-600 to-emerald-700 rounded-3xl p-6 sm:p-12 shadow-2xl text-white mb-10 sm:mb-16">
            <h3 className="text-2xl sm:text-4xl font-bold text-center mb-8 sm:mb-16">Nosso Processo de Trabalho</h3>
            <RevealSection className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5 sm:gap-8" stagger={0.2}>
              {[
                {
                  step: "01",
                  title: "Diagnóstico",
                  description: "Análise detalhada das necessidades e contexto do projeto",
                  icon: BarChart3,
                },
                {
                  step: "02",
                  title: "Planejamento",
                  description: "Desenvolvimento de estratégia personalizada e cronograma",
                  icon: Target,
                },
                {
                  step: "03",
                  title: "Execução",
                  description: "Implementação das soluções com acompanhamento técnico",
                  icon: CheckCircle,
                },
                {
                  step: "04",
                  title: "Monitoramento",
                  description: "Acompanhamento contínuo e relatórios de resultados",
                  icon: TrendingUp,
                },
              ].map((process, index) => {
                const ProcessIcon = process.icon;
                return (
                  <div key={index} className="flex flex-col items-center justify-center text-center group h-full">
                    <div className="relative mb-4 sm:mb-6">
                      <div className="w-14 h-14 sm:w-20 sm:h-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-2 sm:mb-4 group-hover:scale-110 transition-transform duration-300">
                        <ProcessIcon className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
                      </div>
                      <div className="absolute -top-2 -right-2 w-7 h-7 sm:w-8 sm:h-8 bg-emerald-400 rounded-full flex items-center justify-center text-emerald-900 font-bold text-xs sm:text-sm">
                        {process.step}
                      </div>
                    </div>
                    <h4 className="text-base sm:text-xl font-bold mb-2 sm:mb-4">{process.title}</h4>
                    <p className="text-emerald-100 text-xs sm:text-base leading-relaxed">{process.description}</p>
                  </div>
                );
              })}
            </RevealSection>
          </div>

          {/* CTA Section */}
          <section className="full-bleed overflow-x-hidden py-10 sm:py-20 bg-emerald-600 -mb-10 sm:-mb-24">
            <div className="max-w-4xl mx-auto text-center text-white px-2 sm:px-4">
              <RevealSection stagger={0.2}>
                <h2 className="text-2xl sm:text-4xl font-bold mb-4 sm:mb-6">Pronto para Transformar seu Negócio?</h2>
                <p className="text-base sm:text-xl mb-6 sm:mb-8 opacity-90">
                  Entre em contato conosco e descubra como podemos ajudar sua empresa a alcançar a excelência ambiental.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center w-full">
                  <Button
                    asChild
                    size="lg"
                    variant="outline"
                    className="border-white text-white hover:bg-white hover:text-emerald-600 px-6 py-3 sm:px-8 sm:py-4 rounded-full bg-transparent w-full sm:w-auto"
                  >
                    <Link href="/contato">Fale Conosco</Link>
                  </Button>
                  <Button
                    asChild
                    size="lg"
                    className="bg-white text-emerald-600 hover:bg-emerald-50 px-6 py-3 sm:px-8 sm:py-4 rounded-full w-full sm:w-auto"
                  >
                    <Link href="/cases">Ver Nossos Cases</Link>
                  </Button>
                </div>
              </RevealSection>
            </div>
          </section>
        </div>
      </section>
    </div>
  );
}