"use client"

import Link from "next/link"
import Image from "next/image"
import { useState } from "react"
import { Menu, X, MessageCircle, Users, Shield, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isContatoOpen, setIsContatoOpen] = useState(false)

  const opcoesContato = [
    {
      href: "/contato?tab=fale-conosco",
      icon: <MessageCircle className="h-5 w-5 text-emerald-600" />,
      titulo: "Fale Conosco",
      descricao: "Entre em contato para orçamentos e informações",
    },
    {
      href: "/contato?tab=trabalhe-conosco",
      icon: <Users className="h-5 w-5 text-emerald-600" />,
      titulo: "Trabalhe Conosco",
      descricao: "Faça parte da nossa equipe",
    },
    {
      href: "/contato?tab=ouvidoria",
      icon: <Shield className="h-5 w-5 text-emerald-600" />,
      titulo: "Complice (Ouvidoria)",
      descricao: "Canal de denúncias e ouvidoria",
    },
  ]

  return (
    <header className="bg-white shadow-sm border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-24 md:h-32">
          {/* Logo */}
          <Link href="/" className="flex items-center cursor-pointer">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logoITAGEO-cPKDbe3zoiI5tS6D6KwCBQkZRja7Qe.png"
              alt="ITÁGEO Ambiental"
              width={320}
              height={112}
              className="h-20 md:h-28 w-auto"
              priority
            />
          </Link>

          {/* Navegação Desktop */}
          <NavigationMenu className="hidden lg:flex relative">
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link href="/" className="px-4 py-3 font-semibold !text-xl cursor-pointer">
                    Home
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link href="/solucoes" className="px-4 py-3 font-semibold !text-xl cursor-pointer">
                    Nossas Soluções
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link href="/cases" className="px-4 py-3 font-semibold !text-xl cursor-pointer">
                    Cases
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger className="px-4 py-3 font-semibold !text-xl cursor-pointer">
                  Contato
                </NavigationMenuTrigger>
                <NavigationMenuContent className="bg-white shadow-lg rounded-md border border-gray-200 z-50">
                  <div className="grid gap-3 p-4 w-[340px]">
                    {opcoesContato.map((opcao) => (
                      <Link
                        key={opcao.href}
                        href={opcao.href}
                        className="flex items-center space-x-3 p-2 hover:bg-emerald-50 rounded-md cursor-pointer"
                      >
                        {opcao.icon}
                        <div>
                          <div className="text-base font-medium">{opcao.titulo}</div>
                          <p className="text-sm text-gray-500">{opcao.descricao}</p>
                        </div>
                      </Link>
                    ))}
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
            <NavigationMenuViewport
              className="absolute left-0 top-full w-full bg-white shadow-lg border rounded-md
                data-[state=closed]:h-0 data-[state=closed]:border-0 
                data-[state=closed]:shadow-none data-[state=closed]:overflow-hidden"
            />
          </NavigationMenu>

          {/* Botão do menu mobile */}
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-8 w-8" /> : <Menu className="h-8 w-8" />}
          </Button>
        </div>

        {/* Navegação Mobile */}
        {isMenuOpen && (
          <div className="lg:hidden border-t border-gray-200 py-6">
            <div className="flex flex-col space-y-6">
              <Link href="/" className="text-gray-700 hover:text-emerald-600 font-semibold text-xl">
                Home
              </Link>
              <Link href="/solucoes" className="text-gray-700 hover:text-emerald-600 font-semibold text-xl">
                Nossas Soluções
              </Link>
              <Link href="/cases" className="text-gray-700 hover:text-emerald-600 font-semibold text-xl">
                Cases
              </Link>

              {/* Dropdown de Contato no mobile */}
              <button
                type="button"
                onClick={() => setIsContatoOpen(!isContatoOpen)}
                className="flex items-center justify-between text-gray-700 font-semibold text-xl w-full"
              >
                Contato
                <ChevronDown
                  className={`h-6 w-6 transition-transform ${isContatoOpen ? "rotate-180" : ""}`}
                />
              </button>
              {isContatoOpen && (
                <div className="pl-4 space-y-2">
                  {opcoesContato.map((opcao) => (
                    <Link
                      key={opcao.href}
                      href={opcao.href}
                      className="block text-gray-800 hover:text-emerald-600 text-base"
                    >
                      {opcao.titulo}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
