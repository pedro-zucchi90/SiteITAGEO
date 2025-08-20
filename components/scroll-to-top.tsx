"use client"

import { useEffect, useState } from "react"
import { ChevronUp } from "lucide-react"
import { Button } from "@/components/ui/button"

export function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener("scroll", toggleVisibility)

    return () => {
      window.removeEventListener("scroll", toggleVisibility)
    }
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  return (
    <Button
      variant="default"
      size="icon"
      className={`
        fixed bottom-6 right-6 bg-emerald-600 hover:bg-emerald-700 rounded-full shadow-lg z-50
        w-12 h-12 md:w-16 md:h-16 flex items-center justify-center
        transition-all duration-300 ease-in-out
        ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'}
      `}
      style={{ minWidth: 48, minHeight: 48 }}
      onClick={scrollToTop}
      aria-label="Voltar ao topo"
    >
      <ChevronUp className="h-6 w-6 md:h-8 md:w-8" />
    </Button>
  )
}
