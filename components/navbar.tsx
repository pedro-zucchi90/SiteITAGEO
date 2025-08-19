"use client"

import Link from "next/link"
import Image from "next/image"
import { useState } from "react"
import { Menu, X, MessageCircle, Users, Shield, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"

const menuItems = [
  { href: "/", label: "Home" },
  { href: "/solucoes", label: "Nossas Soluções" },
  { href: "/cases", label: "Cases" },
]

const contatoItems = [
  {
    href: "/contato?tab=fale-conosco",
    icon: <MessageCircle className="h-5 w-5 text-emerald-600" />,
    label: "Fale Conosco",
    description: "Entre em contato para orçamentos e informações",
  },
  {
    href: "/contato?tab=trabalhe-conosco",
    icon: <Users className="h-5 w-5 text-emerald-600" />,
    label: "Trabalhe Conosco",
    description: "Faça parte da nossa equipe",
  },
  {
    href: "/contato?tab=ouvidoria",
    icon: <Shield className="h-5 w-5 text-emerald-600" />,
    label: "Complice (Ouvidoria)",
    description: "Canal de denúncias e ouvidoria",
  },
]

export function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isContatoOpen, setIsContatoOpen] = useState(false)

  return (
    <nav className="fixed w-full top-0 z-[9999] bg-white/80 backdrop-blur-sm shadow-sm border-b border-gray-100 transition-all duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logoITAGEO-cPKDbe3zoiI5tS6D6KwCBQkZRja7Qe.png"
              alt="ITÁGEO Ambiental"
              width={320}
              height={112}
              className="h-12 md:h-16 w-auto"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex lg:items-center lg:space-x-8">
            {menuItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-gray-700 hover:text-emerald-600 font-semibold text-lg"
              >
                {item.label}
              </Link>
            ))}

            {/* Desktop Contato Dropdown */}
            <div className="relative">
              <button
                onClick={() => setIsContatoOpen(!isContatoOpen)}
                className="flex items-center space-x-1 text-gray-700 hover:text-emerald-600 font-semibold text-lg"
              >
                <span>Contato</span>
                <ChevronDown
                  className={`h-5 w-5 transition-transform duration-200 ${
                    isContatoOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {/* Dropdown Menu */}
              <div
                className={`
                  absolute right-0 mt-2 w-72 bg-white rounded-lg shadow-lg border border-gray-100
                  transition-all duration-200 ease-in-out origin-top-right
                  ${isContatoOpen ? "opacity-100 scale-100" : "opacity-0 scale-95 pointer-events-none"}
                `}
              >
                <div className="p-3 space-y-2">
                  {contatoItems.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="flex items-start space-x-3 p-2 hover:bg-emerald-50 rounded-md"
                      onClick={() => setIsContatoOpen(false)}
                    >
                      {item.icon}
                      <div>
                        <div className="font-medium">{item.label}</div>
                        <p className="text-sm text-gray-500">{item.description}</p>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`
            lg:hidden border-t border-gray-100
            transition-all duration-300 ease-in-out
            ${isMobileMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0 overflow-hidden"}
          `}
        >
          <div className="py-4 space-y-4">
            {menuItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block text-gray-700 hover:text-emerald-600 font-semibold text-lg px-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}

            {/* Mobile Contato Section */}
            <div className="space-y-2">
              <button
                onClick={() => setIsContatoOpen(!isContatoOpen)}
                className="flex items-center justify-between w-full px-2 text-gray-700 font-semibold text-lg"
              >
                <span>Contato</span>
                <ChevronDown
                  className={`h-5 w-5 transition-transform duration-200 ${
                    isContatoOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              <div
                className={`
                  space-y-2 pl-4
                  transition-all duration-200 ease-in-out
                  ${isContatoOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0 overflow-hidden"}
                `}
              >
                {contatoItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="flex items-start space-x-3 p-2 hover:bg-emerald-50 rounded-md"
                    onClick={() => {
                      setIsContatoOpen(false)
                      setIsMobileMenuOpen(false)
                    }}
                  >
                    {item.icon}
                    <div>
                      <div className="font-medium">{item.label}</div>
                      <p className="text-sm text-gray-500">{item.description}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}
