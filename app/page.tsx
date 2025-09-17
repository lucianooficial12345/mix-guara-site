"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MapPin, Clock, Instagram, Facebook, ChevronRight, Menu, X, MessageCircle, PhoneOff, Users } from "lucide-react"

function FallingProducts() {
  const products = ["🍎", "🥕", "🥛", "🍞", "🧀", "🍌", "🥩", "🛒", "🦩"]

  return (
    <div className="falling-products">
      {[...Array(15)].map((_, i) => (
        <div
          key={i}
          className="falling-item text-2xl opacity-30"
          style={{
            left: `${Math.random() * 100}%`,
            animationDuration: `${8 + Math.random() * 4}s`,
            animationDelay: `${Math.random() * 5}s`,
          }}
        >
          {products[Math.floor(Math.random() * products.length)]}
        </div>
      ))}
    </div>
  )
}

export default function MixGuaraHome() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [currentPromo, setCurrentPromo] = useState(0)
  const [isOpen, setIsOpen] = useState(false)

  const checkIfOpen = () => {
    const now = new Date()
    const currentDay = now.getDay() // 0 = Domingo, 1 = Segunda, ..., 6 = Sábado
    const currentHour = now.getHours()
    const currentMinute = now.getMinutes()
    const currentTime = currentHour * 60 + currentMinute // Converter para minutos

    if (currentDay === 0) {
      // Domingo: 7:30 às 11:30
      const openTime = 7 * 60 + 30 // 7:30 em minutos
      const closeTime = 11 * 60 + 30 // 11:30 em minutos
      return currentTime >= openTime && currentTime <= closeTime
    } else {
      const morningOpen = 7 * 60 // 7:00 em minutos
      const morningClose = 11 * 60 + 30 // 11:30 em minutos
      const afternoonOpen = 14 * 60 // 14:00 em minutos
      const afternoonClose = 18 * 60 // 18:00 em minutos

      return (
        (currentTime >= morningOpen && currentTime <= morningClose) ||
        (currentTime >= afternoonOpen && currentTime <= afternoonClose)
      )
    }
  }

  const promos = [
    {
      title: "🔥 Operação Fecha Mês",
      description: "Descontos imperdíveis em todos os departamentos! Venha economizar de verdade!",
      gradient: "from-red-500 to-red-600",
    },
    {
      title: "💰 Super Ofertas da Semana",
      description: "Produtos selecionados com preços especiais! Economia garantida todos os dias!",
      gradient: "from-yellow-500 to-orange-500",
    },
    {
      title: "🛒 Mix de Economia",
      description: "Combine produtos e economize ainda mais! Promoções que cabem no seu orçamento!",
      gradient: "from-green-500 to-emerald-600",
    },
  ]

  const testimonials = [
    {
      name: "Maria Silva",
      text: "Há 5 anos faço minhas compras aqui! Sempre encontro tudo que preciso com preços justos e atendimento que faz a diferença.",
    },
    {
      name: "João Santos",
      text: "O melhor supermercado da região! Produtos sempre frescos, qualidade garantida e aquele atendimento familiar que a gente ama.",
    },
    {
      name: "Ana Costa",
      text: "Adoro a organização e limpeza do ambiente. Os funcionários são super atenciosos e sempre dispostos a ajudar. Recomendo!",
    },
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentPromo((prev) => (prev + 1) % promos.length)
    }, 4000)

    const checkStatus = () => {
      setIsOpen(checkIfOpen())
    }

    checkStatus() // Verificar imediatamente
    const statusTimer = setInterval(checkStatus, 60000) // Verificar a cada minuto

    return () => {
      clearInterval(timer)
      clearInterval(statusTimer)
    }
  }, [])

  const openWhatsApp = () => {
    const phoneNumber = "5598984573078"
    const message = "Olá! Gostaria de saber mais informações sobre o Mix Guará."
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, "_blank")
  }

  const openWhatsAppPromos = () => {
    const phoneNumber = "5598984573078"
    const message = "Olá! Gostaria de saber sobre as promoções atuais do Mix Guará."
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, "_blank")
  }

  const participarSorteio = () => {
    window.open("https://www.instagram.com/p/DNiigc6ubpT/?igsh=M2E1b3B4YmRlZzRs", "_blank")
  }

  const openInstagram = () => {
    window.open("https://instagram.com/mixguaraoficial", "_blank")
  }

  const openFacebook = () => {
    window.open("https://facebook.com/mixguara1", "_blank")
  }

  const openWhatsAppGroup = () => {
    window.open("https://chat.whatsapp.com/FfyeByVf4SB9fMxxuucj0r", "_blank")
  }

  return (
    <div className="min-h-screen bg-white relative overflow-hidden">
      <FallingProducts />

      <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
        <Button
          onClick={openWhatsApp}
          className="w-16 h-16 rounded-full bg-green-500 hover:bg-green-600 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
          size="lg"
        >
          <MessageCircle className="h-8 w-8 text-white" />
        </Button>

        <Button
          onClick={openInstagram}
          className="w-14 h-14 rounded-full bg-gradient-to-br from-purple-500 via-pink-500 to-orange-400 hover:from-purple-600 hover:via-pink-600 hover:to-orange-500 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
          size="lg"
        >
          <Instagram className="h-6 w-6 text-white" />
        </Button>

        <Button
          onClick={openFacebook}
          className="w-14 h-14 rounded-full bg-blue-600 hover:bg-blue-700 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
          size="lg"
        >
          <Facebook className="h-6 w-6 text-white" />
        </Button>
      </div>

      <header className="bg-black border-b-2 border-red-600 sticky top-0 z-50 shadow-md h-24">
        <div className="container mx-auto px-4 h-full">
          <div className="flex items-center justify-between h-full">
            <div className="flex items-center space-x-3">
              <img
                src="/logo-mixguara.png"
                alt="Mix Guará Logo"
                className="h-20 w-auto hover:scale-105 transition-transform duration-300"
                onError={(e) => {
                  e.currentTarget.src =
                    "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='60' viewBox='0 0 120 60'%3E%3Crect width='120' height='60' fill='%23dc2626'/%3E%3Ctext x='60' y='35' fontFamily='Arial' fontSize='14' fontWeight='bold' textAnchor='middle' fill='white'%3EMix Guará%3C/text%3E%3C/svg%3E"
                }}
              />
            </div>

            <div className="hidden lg:flex items-center space-x-6">
              <div className="relative group">
                <button className="text-white hover:text-red-400 transition-all duration-300 flex items-center space-x-1 px-6 py-3 rounded-lg hover:bg-red-900/30 font-semibold text-lg">
                  <span>Institucional</span>
                  <ChevronRight className="h-5 w-5 transform group-hover:rotate-90 transition-transform" />
                </button>
                <div className="absolute top-full right-0 mt-2 w-72 bg-gray-900 rounded-xl shadow-xl border-2 border-red-600 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                  <div className="p-4">
                    <h5 className="text-red-400 font-bold text-base px-3 py-3 border-b-2 border-red-600">
                      Institucional
                    </h5>
                    <a
                      href="#sobre"
                      className="block px-3 py-3 text-sm text-gray-300 hover:text-red-400 hover:bg-red-900/30 rounded-lg transition-colors font-medium"
                    >
                      Sobre o Mix Guará
                    </a>
                    <a
                      href="#historia"
                      className="block px-3 py-3 text-sm text-gray-300 hover:text-red-400 hover:bg-red-900/30 rounded-lg transition-colors font-medium"
                    >
                      Nossa História
                    </a>
                    <a
                      href="#missao"
                      className="block px-3 py-3 text-sm text-gray-300 hover:text-red-400 hover:bg-red-900/30 rounded-lg transition-colors font-medium"
                    >
                      Missão e Valores
                    </a>

                    <h5 className="text-red-400 font-bold text-base px-3 py-3 border-b-2 border-red-600 mt-3">
                      Informações Legais
                    </h5>
                    <a
                      href="#termos"
                      className="block px-3 py-3 text-sm text-gray-300 hover:text-red-400 hover:bg-red-900/30 rounded-lg transition-colors font-medium"
                    >
                      Termos de Uso
                    </a>
                    <a
                      href="#privacidade"
                      className="block px-3 py-3 text-sm text-gray-300 hover:text-red-400 hover:bg-red-900/30 rounded-lg transition-colors font-medium"
                    >
                      Política de Privacidade
                    </a>
                    <a
                      href="#consumidor"
                      className="block px-3 py-3 text-sm text-gray-300 hover:text-red-400 hover:bg-red-900/30 rounded-lg transition-colors font-medium"
                    >
                      Direitos do Consumidor
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <button
              className="md:hidden p-3 rounded-lg bg-red-600 hover:bg-red-700 transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={28} className="text-white" /> : <Menu size={28} className="text-white" />}
            </button>
          </div>

          {isMenuOpen && (
            <nav className="md:hidden mt-6 pb-6 border-t-2 border-red-600 bg-gray-900 rounded-xl shadow-lg">
              <div className="flex flex-col space-y-3 pt-6 px-6">
                <a
                  href="#inicio"
                  className="text-gray-300 hover:text-red-400 transition-colors py-4 px-3 rounded-lg hover:bg-red-900/30 font-semibold text-lg"
                >
                  Início
                </a>
                <a
                  href="#sobre"
                  className="text-gray-300 hover:text-red-400 transition-colors py-4 px-3 rounded-lg hover:bg-red-900/30 font-semibold text-lg"
                >
                  Sobre
                </a>
                <a
                  href="#localizacao"
                  className="text-gray-300 hover:text-red-400 transition-colors py-4 px-3 rounded-lg hover:bg-red-900/30 font-semibold text-lg"
                >
                  Localização
                </a>
                <a
                  href="#promocoes"
                  className="text-gray-300 hover:text-red-400 transition-colors py-4 px-3 rounded-lg hover:bg-red-900/30 font-semibold text-lg"
                >
                  Promoções
                </a>
                <a
                  href="#contato"
                  className="text-gray-300 hover:text-red-400 transition-colors py-4 px-3 rounded-lg hover:bg-red-900/30 font-semibold text-lg"
                >
                  Contato
                </a>
              </div>
            </nav>
          )}
        </div>
      </header>

      <section id="inicio" className="relative py-20 bg-gradient-to-br from-red-50 to-white">
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-6xl font-bold text-gray-800 mb-8 text-balance">
              Bem-vindo ao <span className="text-red-600">Mix Guará</span>
            </h1>
            <p className="text-xl text-gray-600 mb-10 max-w-3xl mx-auto text-pretty leading-relaxed">
              Há mais de uma década servindo com qualidade, economia e carinho toda a comunidade do Cujupe e Nova
              Alcântara. Aqui você encontra tudo que precisa com preços que cabem no seu bolso!
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button
                size="lg"
                className="bg-red-600 hover:bg-red-700 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 text-white text-lg px-8 py-4"
                asChild
              >
                <a href="https://share.google/lVRBHuGmTZ361sPpp" target="_blank" rel="noopener noreferrer">
                  <MapPin className="mr-3 h-6 w-6" />
                  Como Chegar
                </a>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-2 border-red-600 text-red-600 hover:bg-red-50 hover:border-red-700 transition-all duration-300 hover:scale-105 font-semibold text-lg px-8 py-4 bg-transparent"
                onClick={openWhatsApp}
              >
                <MessageCircle className="mr-3 h-6 w-6" />
                Fale Conosco
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section id="sobre" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-gray-800 mb-6">Sobre o Mix Guará</h2>
            <p className="text-gray-600 max-w-3xl mx-auto text-pretty text-xl">
              Mais que um supermercado, somos parte da família de cada cliente que nos visita
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-10">
            <Card className="hover:shadow-xl transition-all duration-300 bg-white border-2 border-red-100 hover:border-red-300 transform hover:-translate-y-2">
              <CardHeader className="pb-4">
                <CardTitle className="text-red-600 text-2xl font-bold flex items-center">
                  <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mr-4">🏆</div>
                  Qualidade Garantida
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 leading-relaxed text-lg">
                  Selecionamos cuidadosamente cada produto pensando na sua família. Qualidade superior com preços que
                  respeitam o seu orçamento, todos os dias da semana.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-all duration-300 bg-white border-2 border-red-100 hover:border-red-300 transform hover:-translate-y-2">
              <CardHeader className="pb-4">
                <CardTitle className="text-red-600 text-2xl font-bold flex items-center">
                  <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mr-4">❤️</div>
                  Atendimento Familiar
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 leading-relaxed text-lg">
                  Nosso time conhece cada cliente pelo nome! Atendimento caloroso e personalizado que faz você se sentir
                  em casa. Aqui, você não é apenas um número.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-all duration-300 bg-white border-2 border-red-100 hover:border-red-300 transform hover:-translate-y-2">
              <CardHeader className="pb-4">
                <CardTitle className="text-red-600 text-2xl font-bold flex items-center">
                  <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mr-4">💰</div>
                  Economia de Verdade
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 leading-relaxed text-lg">
                  Líder em economia na região! Promoções semanais, preços baixos permanentes e ofertas especiais que
                  fazem a diferença no final do mês.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="localizacao" className="py-20 bg-gradient-to-br from-red-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-gray-800 mb-6">Nossa Localização</h2>
            <p className="text-gray-600 max-w-3xl mx-auto text-pretty text-xl">Fácil acesso na Estrada do Cujupe</p>
          </div>

          <div className="grid md:grid-cols-2 gap-10 items-center">
            <Card className="hover:shadow-xl transition-all duration-300 bg-white border-2 border-red-100 hover:border-red-300 transform hover:-translate-y-2">
              <CardHeader className="pb-4">
                <CardTitle className="text-red-600 text-2xl font-bold flex items-center">
                  <MapPin className="mr-3 h-6 w-6" />
                  Endereço Completo
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 leading-relaxed text-lg mb-4">
                  <strong>Estrada do Cujupe, MA-106</strong>
                  <br />
                  Nova Alcântara, Alcântara – MA
                  <br />
                  CEP: 65250-000
                </p>
                <Button
                  className="w-full bg-red-600 hover:bg-red-700 shadow-lg hover:shadow-xl transition-all duration-300 text-white"
                  asChild
                >
                  <a href="https://share.google/lVRBHuGmTZ361sPpp" target="_blank" rel="noopener noreferrer">
                    <MapPin className="mr-2 h-4 w-4" />
                    Abrir no Google Maps
                  </a>
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-all duration-300 bg-white border-2 border-red-100 hover:border-red-300 transform hover:-translate-y-2">
              <CardHeader className="pb-4">
                <CardTitle className="text-red-600 text-2xl font-bold flex items-center">
                  <Clock className="mr-3 h-6 w-6" />
                  Horários de Funcionamento
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex justify-between items-center p-3 rounded-lg bg-red-50">
                    <span className="text-gray-700 font-medium">Segunda a Sábado:</span>
                    <div className="text-right">
                      <div className="text-red-600 font-bold text-sm">07h00 – 11h30</div>
                      <div className="text-red-600 font-bold text-sm">14h00 – 18h00</div>
                    </div>
                  </div>
                  <div className="flex justify-between items-center p-3 rounded-lg bg-red-50">
                    <span className="text-gray-700 font-medium">Domingo:</span>
                    <span className="text-red-600 font-bold">07h30 – 11h30</span>
                  </div>
                </div>
                <Badge
                  className={`mt-4 ${isOpen ? "bg-green-100 text-green-700 border-green-300" : "bg-red-100 text-red-700 border-red-300"}`}
                >
                  {isOpen ? "✅ Aberto agora" : "❌ Fechado agora"}
                </Badge>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-br from-green-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-6">Entre no Nosso Grupo</h2>
            <p className="text-gray-600 max-w-3xl mx-auto text-pretty text-xl">
              Faça parte da nossa comunidade no WhatsApp e receba ofertas exclusivas em primeira mão!
            </p>
          </div>

          <div className="max-w-2xl mx-auto">
            <Card className="hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-green-50 to-white border-2 border-green-200 hover:border-green-400 transform hover:-translate-y-2">
              <CardHeader className="text-center pb-4">
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-10 w-10 text-green-600" />
                </div>
                <CardTitle className="text-green-600 text-3xl font-bold">Grupo Oficial Mix Guará</CardTitle>
                <CardDescription className="text-gray-700 text-lg">
                  Receba promoções exclusivas, novidades e ofertas especiais direto no seu WhatsApp!
                </CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <div className="bg-green-50 rounded-lg p-6 mb-6">
                  <h4 className="text-lg font-bold text-green-700 mb-3">🎁 Vantagens do Grupo:</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
                    <div className="flex items-center text-green-700">
                      <span className="text-green-500 mr-2">✅</span>
                      <span>Ofertas exclusivas para membros</span>
                    </div>
                    <div className="flex items-center text-green-700">
                      <span className="text-green-500 mr-2">✅</span>
                      <span>Promoções em primeira mão</span>
                    </div>
                    <div className="flex items-center text-green-700">
                      <span className="text-green-500 mr-2">✅</span>
                      <span>Novidades e lançamentos</span>
                    </div>
                    <div className="flex items-center text-green-700">
                      <span className="text-green-500 mr-2">✅</span>
                      <span>Sorteios exclusivos</span>
                    </div>
                  </div>
                </div>

                <Button
                  onClick={openWhatsAppGroup}
                  size="lg"
                  className="bg-green-600 hover:bg-green-700 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 text-white text-lg px-8 py-4 w-full md:w-auto"
                >
                  <MessageCircle className="mr-3 h-6 w-6" />
                  Entrar no Grupo do WhatsApp
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="promocoes" className="py-16 bg-slate-800/40 backdrop-blur-md">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-4xl font-bold text-card-foreground mb-4">Promoções & Campanhas</h3>
            <p className="text-muted-foreground text-lg">Ofertas especiais que você não pode perder!</p>
          </div>

          <div className="relative">
            <Card
              className={`bg-gradient-to-br ${promos[currentPromo].gradient} text-white animate-fade-in shadow-2xl border-0 overflow-hidden relative`}
            >
              <div className="absolute inset-0 bg-black/10"></div>
              <CardHeader className="relative z-10">
                <CardTitle className="text-3xl font-bold">{promos[currentPromo].title}</CardTitle>
                <CardDescription className="text-white/90 text-lg">{promos[currentPromo].description}</CardDescription>
              </CardHeader>
              <CardContent className="relative z-10">
                <Button
                  onClick={openWhatsAppPromos}
                  size="lg"
                  className="bg-white/90 text-gray-900 hover:bg-white shadow-lg font-semibold"
                >
                  <MessageCircle className="mr-2 h-4 w-4" />
                  Ver Promoções no WhatsApp
                  <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>

            <div className="flex justify-center mt-6 space-x-3">
              {promos.map((_, index) => (
                <button
                  key={index}
                  className={`w-4 h-4 rounded-full transition-all duration-300 ${
                    index === currentPromo ? "bg-red-600 scale-125" : "bg-gray-300 hover:bg-gray-400"
                  }`}
                  onClick={() => setCurrentPromo(index)}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="contato" className="py-20 bg-gradient-to-br from-red-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-gray-800 mb-6">Entre em Contato</h2>
            <p className="text-gray-600 max-w-3xl mx-auto text-pretty text-xl">
              Nossa equipe está sempre pronta para atender você com carinho e atenção
            </p>
            <div className="mt-6 p-4 bg-yellow-100 border-2 border-yellow-300 rounded-lg max-w-md mx-auto">
              <div className="flex items-center justify-center text-yellow-700">
                <PhoneOff className="h-5 w-5 mr-2" />
                <span className="text-sm font-bold">⚠️ Não atendemos ligações telefônicas - Use apenas WhatsApp!</span>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-10">
            <div className="space-y-6 mx-auto max-w-md">
              <Card
                className="hover:shadow-xl transition-all duration-300 cursor-pointer border-2 border-green-200 bg-green-50 hover:border-green-400 transform hover:-translate-y-1"
                onClick={openWhatsApp}
              >
                <CardContent className="flex items-center p-6">
                  <MessageCircle className="h-8 w-8 text-green-600 mr-4" />
                  <div>
                    <h4 className="font-bold text-gray-800 text-lg">WhatsApp - PREFERENCIAL</h4>
                    <p className="text-green-600 font-bold text-lg">(98) 98457-3078</p>
                    <p className="text-sm text-green-700 font-medium">✅ Clique para conversar conosco!</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover:shadow-xl transition-all duration-300 border-2 border-red-200 bg-red-50">
                <CardContent className="flex items-center p-6">
                  <PhoneOff className="h-8 w-8 text-red-600 mr-4" />
                  <div>
                    <h4 className="font-bold text-gray-800 text-lg">Telefone</h4>
                    <p className="text-gray-700 text-lg">(98) 98457-3078</p>
                    <p className="text-sm text-red-600 font-medium">❌ Não atendemos ligações - Use WhatsApp!</p>
                  </div>
                </CardContent>
              </Card>

              <Card
                className="hover:shadow-xl transition-all duration-300 cursor-pointer border-2 border-purple-200 bg-gradient-to-r from-purple-50 to-pink-50 hover:border-purple-400 hover:scale-105 transform"
                onClick={openInstagram}
              >
                <CardContent className="flex items-center p-6">
                  <Instagram className="h-8 w-8 text-purple-600 mr-4" />
                  <div>
                    <h4 className="font-bold text-gray-800 text-lg">Instagram</h4>
                    <p className="text-purple-600 font-bold text-lg">@mixguaraoficial</p>
                    <p className="text-sm text-purple-700 font-medium">📸 Siga-nos para ofertas exclusivas!</p>
                  </div>
                </CardContent>
              </Card>

              <Card
                className="hover:shadow-xl transition-all duration-300 cursor-pointer border-2 border-blue-200 bg-blue-50 hover:border-blue-400 hover:scale-105 transform"
                onClick={openFacebook}
              >
                <CardContent className="flex items-center p-6">
                  <Facebook className="h-8 w-8 text-blue-600 mr-4" />
                  <div>
                    <h4 className="font-bold text-gray-800 text-lg">Facebook</h4>
                    <p className="text-blue-600 font-bold text-lg">@mixguara1</p>
                    <p className="text-sm text-blue-700 font-medium">👥 Curta nossa página oficial!</p>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="space-y-6 mx-auto max-w-md">
              <Card className="hover:shadow-xl transition-all duration-300 border-2 border-gray-200 bg-gray-50">
                <CardContent className="p-6 text-center">
                  <MapPin className="h-12 w-12 text-red-600 mx-auto mb-4" />
                  <h4 className="font-bold text-gray-800 text-lg mb-2">Nossa Localização</h4>
                  <p className="text-gray-700 mb-2">Estrada do Cujupe, MA-106</p>
                  <p className="text-gray-700 mb-2">Nova Alcântara, Alcântara – MA</p>
                  <p className="text-gray-700 mb-4">CEP: 65250-000</p>
                  <Button className="w-full bg-red-600 hover:bg-red-700 text-white" asChild>
                    <a href="https://share.google/lVRBHuGmTZ361sPpp" target="_blank" rel="noopener noreferrer">
                      <MapPin className="mr-2 h-4 w-4" />
                      Como Chegar
                    </a>
                  </Button>
                </CardContent>
              </Card>

              <Card className="hover:shadow-xl transition-all duration-300 border-2 border-gray-200 bg-gray-50">
                <CardContent className="p-6 text-center">
                  <Clock className="h-12 w-12 text-red-600 mx-auto mb-4" />
                  <h4 className="font-bold text-gray-800 text-lg mb-4">Horário de Funcionamento</h4>
                  <div className="space-y-2">
                    <div className="flex justify-between items-center p-2 rounded bg-red-50">
                      <span className="text-gray-700 font-medium">Segunda a Sábado:</span>
                      <div className="text-right">
                        <div className="text-red-600 font-bold text-sm">07h00 – 11h30</div>
                        <div className="text-red-600 font-bold text-sm">14h00 – 18h00</div>
                      </div>
                    </div>
                    <div className="flex justify-between items-center p-2 rounded bg-red-50">
                      <span className="text-gray-700 font-medium">Domingo:</span>
                      <span className="text-red-600 font-bold">07h30 – 11h30</span>
                    </div>
                  </div>
                  <Badge
                    className={`mt-4 ${isOpen ? "bg-green-100 text-green-700 border-green-300" : "bg-red-100 text-red-700 border-red-300"}`}
                  >
                    {isOpen ? "✅ Aberto agora" : "❌ Fechado agora"}
                  </Badge>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-white border-t-2 border-red-200 text-gray-700 py-12 relative">
        <div className="absolute inset-0 bg-gradient-to-br from-red-50/30 to-white"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h4 className="text-lg font-bold mb-4 text-red-600">Institucional</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#sobre" className="hover:text-red-600 transition-colors font-medium">
                    Sobre o Mix Guará
                  </a>
                </li>
                <li>
                  <a href="#historia" className="hover:text-red-600 transition-colors font-medium">
                    Nossa História
                  </a>
                </li>
                <li>
                  <a href="#missao" className="hover:text-red-600 transition-colors font-medium">
                    Missão e Valores
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-bold mb-4 text-red-600">Informações Legais</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#termos" className="hover:text-red-600 transition-colors font-medium">
                    Termos de Uso
                  </a>
                </li>
                <li>
                  <a href="#privacidade" className="hover:text-red-600 transition-colors font-medium">
                    Política de Privacidade
                  </a>
                </li>
                <li>
                  <a href="#consumidor" className="hover:text-red-600 transition-colors font-medium">
                    Direitos do Consumidor
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-bold mb-4 text-red-600">Conecte-se</h4>
              <ul className="space-y-2">
                <li>
                  <button onClick={openWhatsApp} className="hover:text-red-600 transition-colors text-left font-medium">
                    WhatsApp: (98) 98457-3078
                  </button>
                </li>
                <li>
                  <button
                    onClick={openInstagram}
                    className="hover:text-red-600 transition-colors text-left font-medium"
                  >
                    Instagram @mixguaraoficial
                  </button>
                </li>
                <li>
                  <button onClick={openFacebook} className="hover:text-red-600 transition-colors text-left font-medium">
                    Facebook @mixguara1
                  </button>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-bold mb-4 text-red-600">Nossa Loja</h4>
              <p className="text-sm mb-2 font-medium">Estrada do Cujupe, MA-106</p>
              <p className="text-sm mb-2 font-medium">Nova Alcântara, Alcântara – MA</p>
              <p className="text-sm mb-4 font-medium">CEP: 65250-000</p>
              <Button
                variant="outline"
                size="sm"
                className="border-2 border-red-600 text-red-600 hover:bg-red-50 bg-white font-semibold"
                asChild
              >
                <a href="https://share.google/lVRBHuGmTZ361sPpp" target="_blank" rel="noopener noreferrer">
                  <MapPin className="mr-2 h-4 w-4" />
                  Como Chegar
                </a>
              </Button>
            </div>
          </div>

          <div className="border-t-2 border-red-200 mt-8 pt-8 text-center">
            <p className="text-sm text-gray-600 font-medium">
              © 2024 Mix Guará. Todos os direitos reservados. | Mais que um supermercado, somos família! Servindo com
              amor a comunidade do Cujupe e Nova Alcântara.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
