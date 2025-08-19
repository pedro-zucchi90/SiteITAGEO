import Link from "next/link"
import Image from "next/image"
import { MapPin, Phone, Clock, Mail, Leaf, Shield, Award } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* info da empresa */}
          <div className="space-y-4">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logoITAGEO-cPKDbe3zoiI5tS6D6KwCBQkZRja7Qe.png"
              alt="ITÁGEO Ambiental"
              width={160}
              height={50}
              className="h-10 w-auto brightness-0 invert"
            />
            <p className="text-gray-300 text-sm leading-relaxed">
              Consultoria ambiental especializada em licenciamento, estudos ambientais e gestão de resíduos para
              empresas em Santa Catarina.
            </p>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2 text-emerald-400">
                <Leaf className="h-4 w-4" />
                <span className="text-xs">Sustentabilidade</span>
              </div>
              <div className="flex items-center gap-2 text-emerald-400">
                <Shield className="h-4 w-4" />
                <span className="text-xs">Conformidade</span>
              </div>
            </div>
          </div>

          {/* info de contato */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-emerald-400">Contato</h3>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-emerald-400 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-sm text-gray-300">
                    Av. Tancredo Neves, 294
                    <br />
                    Pioneiros, Itá - SC
                    <br />
                    CEP: 89760-000
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-emerald-400" />
                <p className="text-sm text-gray-300">(49) 3458-2055</p>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-emerald-400" />
                <p className="text-sm text-gray-300">contato@itageoambiental.com.br</p>
              </div>
              <div className="flex items-start gap-3">
                <Clock className="h-5 w-5 text-emerald-400 mt-0.5" />
                <div>
                  <p className="text-sm text-gray-300">
                    Segunda a Sexta
                    <br />
                    8:00 - 12:00 | 13:30 - 18:00
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* serviços */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-emerald-400">Serviços</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/solucoes" className="text-sm text-gray-300 hover:text-emerald-400 transition-colors">
                  Licenciamento Ambiental
                </Link>
              </li>
              <li>
                <Link href="/solucoes" className="text-sm text-gray-300 hover:text-emerald-400 transition-colors">
                  Consultoria e Assessoria
                </Link>
              </li>
              <li>
                <Link href="/solucoes" className="text-sm text-gray-300 hover:text-emerald-400 transition-colors">
                  Estudos Ambientais
                </Link>
              </li>
              <li>
                <Link href="/solucoes" className="text-sm text-gray-300 hover:text-emerald-400 transition-colors">
                  Gestão de Resíduos
                </Link>
              </li>
              <li>
                <Link href="/solucoes" className="text-sm text-gray-300 hover:text-emerald-400 transition-colors">
                  Monitoramento Ambiental
                </Link>
              </li>
            </ul>
          </div>

          {/* links rápidos */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-emerald-400">Links Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/sobre/quem-somos"
                  className="text-sm text-gray-300 hover:text-emerald-400 transition-colors"
                >
                  Quem Somos
                </Link>
              </li>
              <li>
                <Link
                  href="/sobre/proposito"
                  className="text-sm text-gray-300 hover:text-emerald-400 transition-colors"
                >
                  Nosso Propósito
                </Link>
              </li>
              <li>
                <Link href="/cases" className="text-sm text-gray-300 hover:text-emerald-400 transition-colors">
                  Cases de Sucesso
                </Link>
              </li>
              <li>
                <Link href="/contato" className="text-sm text-gray-300 hover:text-emerald-400 transition-colors">
                  Solicitar Orçamento
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-400">© {new Date().getFullYear()} ITÁGEO Ambiental. Todos os direitos reservados.</p>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2 text-emerald-400">
                <Award className="h-4 w-4" />
                <span className="text-xs">Certificação ISO 14001</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
