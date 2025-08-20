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
        w-16 h-16 flex items-center justify-center
        transition-all duration-300 ease-in-out
        ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'}
      `}
      style={{ minWidth: 64, minHeight: 64 }}
      onClick={scrollToTop}
      aria-label="Voltar ao topo"
    >
      <ChevronUp className="h-8 w-8" />
    </Button>
  )
}
