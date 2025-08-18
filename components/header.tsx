"use client"

import Link from "next/link"
import Image from "next/image"
import { useState } from "react"
import { Menu, X, MessageCircle, Users, Shield } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-white shadow-sm border-b border-gray-100 sticky top-0 z-50">
      {/* Main header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center cursor-pointer">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logoITAGEO-cPKDbe3zoiI5tS6D6KwCBQkZRja7Qe.png"
              alt="ITÁGEO Ambiental"
              width={180}
              height={60}
              className="h-12 w-auto"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <NavigationMenu className="hidden lg:flex">
            <NavigationMenuList>
              <NavigationMenuItem>
                <Link href="/" legacyBehavior passHref>
                  <NavigationMenuLink className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 cursor-pointer">
                    Home
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <Link href="/solucoes" legacyBehavior passHref>
                  <NavigationMenuLink className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 cursor-pointer">
                    Nossas Soluções
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <Link href="/cases" legacyBehavior passHref>
                  <NavigationMenuLink className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 cursor-pointer">
                    Cases
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger className="cursor-pointer">Contato</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="grid gap-3 p-6 w-[400px]">
                    <Link
                      href="/contato?tab=fale-conosco"
                      className="flex items-center space-x-3 select-none rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground cursor-pointer"
                    >
                      <MessageCircle className="h-5 w-5 text-emerald-600" />
                      <div>
                        <div className="text-sm font-medium leading-none">Fale Conosco</div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          Entre em contato para orçamentos e informações
                        </p>
                      </div>
                    </Link>

                    <Link
                      href="/contato?tab=trabalhe-conosco"
                      className="flex items-center space-x-3 select-none rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground cursor-pointer"
                    >
                      <Users className="h-5 w-5 text-emerald-600" />
                      <div>
                        <div className="text-sm font-medium leading-none">Trabalhe Conosco</div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          Faça parte da nossa equipe
                        </p>
                      </div>
                    </Link>

                    <Link
                      href="/contato?tab=ouvidoria"
                      className="flex items-center space-x-3 select-none rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground cursor-pointer"
                    >
                      <Shield className="h-5 w-5 text-emerald-600" />
                      <div>
                        <div className="text-sm font-medium leading-none">Complice (Ouvidoria)</div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          Canal de denúncias e ouvidoria
                        </p>
                      </div>
                    </Link>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          {/* Mobile menu button */}
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden cursor-pointer"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden border-t border-gray-200 py-4">
            <div className="flex flex-col space-y-4">
              <Link href="/" className="text-gray-700 hover:text-emerald-600 font-medium cursor-pointer">
                Home
              </Link>
              <Link href="/solucoes" className="text-gray-700 hover:text-emerald-600 font-medium cursor-pointer">
                Nossas Soluções
              </Link>
              <Link href="/cases" className="text-gray-700 hover:text-emerald-600 font-medium cursor-pointer">
                Cases
              </Link>
              <div className="space-y-2">
                <div className="text-gray-700 font-medium">Contato</div>
                <div className="pl-4 space-y-2">
                  <Link
                    href="/contato?tab=fale-conosco"
                    className="block text-gray-600 hover:text-emerald-600 cursor-pointer"
                  >
                    Fale Conosco
                  </Link>
                  <Link
                    href="/contato?tab=trabalhe-conosco"
                    className="block text-gray-600 hover:text-emerald-600 cursor-pointer"
                  >
                    Trabalhe Conosco
                  </Link>
                  <Link
                    href="/contato?tab=ouvidoria"
                    className="block text-gray-600 hover:text-emerald-600 cursor-pointer"
                  >
                    Ouvidoria
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
