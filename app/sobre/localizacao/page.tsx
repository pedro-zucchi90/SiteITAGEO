import { MapPin, Phone, Mail, Clock } from "lucide-react"

export default function LocalizacaoPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 to-green-50">
      {/* Hero Section */}
      <section className="relative py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-emerald-900 mb-8">Onde Estamos</h1>
          <p className="text-xl text-emerald-700 leading-relaxed">
            Estamos estrategicamente localizados para atender clientes em todo o território nacional, com foco especial
            na região Sudeste.
          </p>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Details */}
            <div className="space-y-8">
              <div className="bg-white rounded-2xl p-8 shadow-sm">
                <h2 className="text-2xl font-bold text-emerald-900 mb-6">Informações de Contato</h2>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-emerald-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-emerald-900 mb-1">Endereço</h3>
                      <p className="text-emerald-700">
                        Av. Tancredo Neves, 294
                        <br />
                        Pioneiros, Itá - SC
                        <br />
                        89760-000
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <Phone className="w-6 h-6 text-emerald-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-emerald-900 mb-1">Telefone</h3>
                      <p className="text-emerald-700">
                        (49) 3458-2055
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <Mail className="w-6 h-6 text-emerald-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-emerald-900 mb-1">E-mail</h3>
                      <p className="text-emerald-700">
                        itageo@itageoambiental.com.br
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <Clock className="w-6 h-6 text-emerald-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-emerald-900 mb-1">Horário de Funcionamento</h3>
                      <p className="text-emerald-700">
                        Segunda a Sexta: 8h às 12h e 13h às 18h<br />
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <h3 className="text-xl font-bold text-emerald-900 mb-4">Nossa Localização</h3>

              <div className="relative rounded-2xl overflow-hidden shadow-lg aspect-video">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14184.73326445581!2d-52.34916401284183!3d-27.276131799999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94e49fde250a3ef7%3A0xa26834a7c937f19f!2sItageo%20Ambiental!5e0!3m2!1spt-BR!2sbr!4v1755640138225!5m2!1spt-BR!2sbr"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Localização ITÁGEO Ambiental - Av. Tancredo Neves, 294, Itá/SC"
                />
              </div>

              <div className="mt-6 text-center">
                <p className="text-emerald-700 font-semibold text-lg">ITÁGEO Ambiental</p>
                <p className="text-emerald-600 text-sm">
                  Av. Tancredo Neves, 294 - Pioneiros, Itá/SC
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Coverage Area */}
      <section className="py-16 px-4 bg-white/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-emerald-900 text-center mb-12">Área de Atuação</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-white rounded-2xl shadow-sm">
              <h3 className="text-xl font-bold text-emerald-900 mb-4">Região Sudeste</h3>
              <p className="text-emerald-700">
                Atendimento prioritário em São Paulo, Rio de Janeiro, Minas Gerais e Espírito Santo
              </p>
            </div>
            <div className="text-center p-6 bg-white rounded-2xl shadow-sm">
              <h3 className="text-xl font-bold text-emerald-900 mb-4">Projetos Nacionais</h3>
              <p className="text-emerald-700">
                Capacidade para atender projetos de grande porte em todo o território nacional
              </p>
            </div>
            <div className="text-center p-6 bg-white rounded-2xl shadow-sm">
              <h3 className="text-xl font-bold text-emerald-900 mb-4">Consultoria Remota</h3>
              <p className="text-emerald-700">
                Serviços de consultoria e assessoria disponíveis remotamente para todo o Brasil
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
