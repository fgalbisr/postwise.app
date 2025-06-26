"use client"

import { useState, useEffect } from "react"
import {
  Calendar,
  BarChart3,
  Users,
  Settings,
  PlusCircle,
  Bell,
  ChevronDown,
  Edit,
  Trash2,
  TrendingUp,
  Eye,
  MousePointer,
  Heart,
  Share2,
  Target,
  Clock,
  Zap,
  Brain,
  Facebook,
  Instagram,
  Twitter,
  Linkedin,
  Youtube,
  Copy,
  Download,
  RefreshCw,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
  SidebarInset,
  SidebarHeader,
} from "@/components/ui/sidebar"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { toast } from "@/components/ui/use-toast"

const navigationItems = [
  { title: "Panel de Control", icon: BarChart3, href: "/", active: true },
  { title: "Generador de Contenido", icon: Zap, href: "/content" },
  { title: "Recomendaciones de Anuncios", icon: Target, href: "/ads" },
  { title: "Publicaciones Programadas", icon: Calendar, href: "/scheduled" },
  { title: "Conoce tu Audiencia", icon: Users, href: "/audience" },
  { title: "Analíticas", icon: BarChart3, href: "/analytics" },
  { title: "Configuración", icon: Settings, href: "/settings" },
]

const socialPlatforms = [
  { name: "Facebook", icon: Facebook, color: "text-blue-500", connected: true },
  { name: "Instagram", icon: Instagram, color: "text-pink-500", connected: true },
  { name: "Twitter", icon: Twitter, color: "text-sky-400", connected: false },
  { name: "LinkedIn", icon: Linkedin, color: "text-blue-600", connected: true },
  { name: "YouTube", icon: Youtube, color: "text-red-500", connected: false },
]

const initialPosts = [
  {
    id: 1,
    title: "Consejos de Marketing de Verano",
    content: "Descubre las mejores estrategias para impulsar tus campañas de verano...",
    image: "/placeholder.svg?height=100&width=150",
    platform: "Instagram",
    engagement: "2.4k",
    date: "2 hours ago",
    status: "published",
  },
  {
    id: 2,
    title: "Anuncio de Lanzamiento de Producto",
    content: "Estamos emocionados de anunciar nuestra última característica de producto...",
    image: "/placeholder.svg?height=100&width=150",
    platform: "LinkedIn",
    engagement: "1.8k",
    date: "5 hours ago",
    status: "published",
  },
  {
    id: 3,
    title: "Historia de Éxito del Cliente",
    content: "Lee cómo nuestro cliente aumentó su ROI en un 300%...",
    platform: "Facebook",
    engagement: "3.2k",
    date: "1 day ago",
    status: "published",
  },
]

const initialScheduledPosts = [
  { id: 1, date: "2024-01-15", title: "Newsletter Semanal", time: "09:00 AM", platform: "LinkedIn" },
  { id: 2, date: "2024-01-16", title: "Actualización de Producto", time: "02:00 PM", platform: "Facebook" },
  { id: 3, date: "2024-01-18", title: "Destacado de la Comunidad", time: "11:00 AM", platform: "Instagram" },
]

const audienceInsights = [
  { segment: "Age 25-34", percentage: 35, color: "bg-blue-500" },
  { segment: "Age 35-44", percentage: 28, color: "bg-cyan-500" },
  { segment: "Age 18-24", percentage: 22, color: "bg-sky-400" },
  { segment: "Age 45+", percentage: 15, color: "bg-blue-300" },
]

export default function Dashboard() {
  // Content Generation State
  const [prompt, setPrompt] = useState("")
  const [generatedContent, setGeneratedContent] = useState("")
  const [contentType, setContentType] = useState("text")
  const [imagePrompt, setImagePrompt] = useState("")
  const [videoPrompt, setVideoPrompt] = useState("")
  const [generatedImage, setGeneratedImage] = useState("")
  const [generatedVideo, setGeneratedVideo] = useState("")
  const [isGenerating, setIsGenerating] = useState(false)

  // Content Settings
  const [contentSettings, setContentSettings] = useState({
    contentType: "Publicación en Redes Sociales",
    tone: "Profesional",
    style: "Fotorrealista",
    aspectRatio: "Cuadrado (1:1)",
    videoType: "Formato Corto (15s)",
    platform: "TikTok/Reels",
  })

  // Posts Management
  const [posts, setPosts] = useState(initialPosts)
  const [scheduledPosts, setScheduledPosts] = useState(initialScheduledPosts)
  const [newPost, setNewPost] = useState({ title: "", content: "", platform: "Instagram" })

  // Performance Metrics (simulated real-time updates)
  const [metrics, setMetrics] = useState({
    reach: 24500,
    engagement: 3200,
    ctr: 4.8,
  })

  // Navigation State
  const [activeSection, setActiveSection] = useState("Panel de Control")

  // Simulate real-time metrics updates
  useEffect(() => {
    const interval = setInterval(() => {
      setMetrics((prev) => ({
        reach: prev.reach + Math.floor(Math.random() * 100),
        engagement: prev.engagement + Math.floor(Math.random() * 50),
        ctr: +(prev.ctr + (Math.random() - 0.5) * 0.1).toFixed(1),
      }))
    }, 10000) // Update every 10 seconds

    return () => clearInterval(interval)
  }, [])

  // AI Content Generation Functions
  const handleGenerateContent = async () => {
    if (!prompt.trim()) {
      toast({
        title: "Error",
        description: "Por favor ingresa una descripción del contenido.",
        variant: "destructive",
      })
      return
    }

    setIsGenerating(true)

    // Simulate AI generation delay
    await new Promise((resolve) => setTimeout(resolve, 2000))

    const templates = {
      "Publicación en Redes Sociales": `🚀 ${prompt}

✨ Descubre cómo esta estrategia puede transformar tu negocio:

• Aumenta tu alcance orgánico
• Mejora la interacción con tu audiencia  
• Genera más leads calificados

¿Listo para llevar tu marketing al siguiente nivel?

#Marketing #SocialMedia #Growth #PostWise #Estrategia`,

      "Artículo de Blog": `# ${prompt}

## Introducción

En el mundo digital actual, es fundamental entender cómo ${prompt.toLowerCase()} puede impactar significativamente en el crecimiento de tu negocio.

## Puntos Clave

1. **Estrategia Integral**: Desarrolla un enfoque holístico
2. **Medición de Resultados**: Utiliza métricas relevantes
3. **Optimización Continua**: Ajusta según los datos

## Conclusión

Implementar estas estrategias te permitirá alcanzar tus objetivos de marketing de manera más efectiva.`,

      "Campaña de Email": `Asunto: 🎯 ${prompt} - No te lo pierdas

Hola [Nombre],

Esperamos que estés teniendo una excelente semana.

Queremos compartir contigo una oportunidad única relacionada con ${prompt.toLowerCase()}.

🔥 Beneficios exclusivos:
• Acceso prioritario
• Descuentos especiales
• Soporte personalizado

[BOTÓN: Aprovechar Oferta]

¡Nos vemos pronto!
El equipo de PostWise`,
    }

    const generated = templates[contentSettings.contentType] || templates["Publicación en Redes Sociales"]
    setGeneratedContent(generated)
    setIsGenerating(false)

    toast({
      title: "¡Contenido generado!",
      description: "Tu contenido ha sido creado exitosamente.",
    })
  }

  const handleGenerateImage = async () => {
    if (!imagePrompt.trim()) {
      toast({
        title: "Error",
        description: "Por favor describe la imagen que quieres generar.",
        variant: "destructive",
      })
      return
    }

    setIsGenerating(true)
    await new Promise((resolve) => setTimeout(resolve, 3000))

    // Simulate different image generation based on style
    const imageUrls = {
      Fotorrealista: "/placeholder.svg?height=400&width=400&text=Foto+Realista",
      "Arte Digital": "/placeholder.svg?height=400&width=400&text=Arte+Digital",
      Ilustración: "/placeholder.svg?height=400&width=400&text=Ilustración",
      Minimalista: "/placeholder.svg?height=400&width=400&text=Minimalista",
      Abstracto: "/placeholder.svg?height=400&width=400&text=Abstracto",
    }

    setGeneratedImage(imageUrls[contentSettings.style] || imageUrls["Fotorrealista"])
    setIsGenerating(false)

    toast({
      title: "¡Imagen generada!",
      description: "Tu imagen ha sido creada exitosamente.",
    })
  }

  const handleGenerateVideo = async () => {
    if (!videoPrompt.trim()) {
      toast({
        title: "Error",
        description: "Por favor describe el video que quieres crear.",
        variant: "destructive",
      })
      return
    }

    setIsGenerating(true)
    await new Promise((resolve) => setTimeout(resolve, 4000))

    setGeneratedVideo("/placeholder.mp4")
    setIsGenerating(false)

    toast({
      title: "¡Video generado!",
      description: "Tu video ha sido creado exitosamente.",
    })
  }

  // Post Management Functions
  const handleCreatePost = () => {
    if (!newPost.title.trim() || !newPost.content.trim()) {
      toast({
        title: "Error",
        description: "Por favor completa todos los campos.",
        variant: "destructive",
      })
      return
    }

    const post = {
      id: Date.now(),
      ...newPost,
      engagement: "0",
      date: "Ahora",
      status: "draft",
    }

    setPosts((prev) => [post, ...prev])
    setNewPost({ title: "", content: "", platform: "Instagram" })

    toast({
      title: "¡Publicación creada!",
      description: "Tu publicación ha sido guardada como borrador.",
    })
  }

  const handleDeletePost = (id) => {
    setPosts((prev) => prev.filter((post) => post.id !== id))
    toast({
      title: "Publicación eliminada",
      description: "La publicación ha sido eliminada exitosamente.",
    })
  }

  const handleSchedulePost = (postId, date, time) => {
    const post = posts.find((p) => p.id === postId)
    if (post) {
      const scheduledPost = {
        id: Date.now(),
        date,
        time,
        title: post.title,
        platform: post.platform,
      }
      setScheduledPosts((prev) => [...prev, scheduledPost])

      toast({
        title: "¡Publicación programada!",
        description: `Tu publicación se publicará el ${date} a las ${time}.`,
      })
    }
  }

  // Utility Functions
  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text)
    toast({
      title: "¡Copiado!",
      description: "El contenido ha sido copiado al portapapeles.",
    })
  }

  const downloadContent = (content, filename) => {
    const blob = new Blob([content], { type: "text/plain" })
    const url = URL.createObjectURL(blob)
    const a = document.createElement("a")
    a.href = url
    a.download = filename
    a.click()
    URL.revokeObjectURL(url)

    toast({
      title: "¡Descargado!",
      description: "El archivo ha sido descargado exitosamente.",
    })
  }

  const connectPlatform = (platformName) => {
    // Simulate platform connection
    toast({
      title: "Conectando...",
      description: `Conectando con ${platformName}. Esto puede tomar unos segundos.`,
    })

    setTimeout(() => {
      toast({
        title: "¡Conectado!",
        description: `${platformName} ha sido conectado exitosamente.`,
      })
    }, 2000)
  }

  return (
    <div className="min-h-screen bg-black text-white">
      <SidebarProvider>
        <Sidebar className="border-r border-gray-800">
          <SidebarHeader className="p-6 bg-black">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">PW</span>
              </div>
              <span className="text-xl font-bold text-white">PostWise</span>
            </div>
          </SidebarHeader>
          <SidebarContent className="bg-black">
            <SidebarGroup>
              <SidebarGroupContent>
                <SidebarMenu>
                  {navigationItems.map((item) => (
                    <SidebarMenuItem key={item.title}>
                      <SidebarMenuButton
                        onClick={() => setActiveSection(item.title)}
                        isActive={activeSection === item.title}
                        className="text-gray-300 hover:text-white hover:bg-blue-500/20 data-[active=true]:bg-blue-500 data-[active=true]:text-white cursor-pointer"
                      >
                        <div className="flex items-center gap-3">
                          <item.icon className="w-5 h-5" />
                          <span>{item.title}</span>
                        </div>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  ))}
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>
          </SidebarContent>
        </Sidebar>

        <SidebarInset>
          {/* Top Navigation */}
          <header className="border-b border-gray-800 bg-black/50 backdrop-blur-sm sticky top-0 z-50">
            <div className="flex items-center justify-between px-6 py-4 bg-black">
              <div className="flex items-center gap-4">
                <h1 className="text-2xl font-bold text-white">{activeSection}</h1>
              </div>

              <div className="flex items-center gap-4">
                <Button
                  onClick={handleCreatePost}
                  className="bg-white hover:bg-gray-100 text-black border border-gray-300"
                >
                  <PlusCircle className="w-4 h-4 mr-2" />
                  Crear Publicación
                </Button>

                <Button variant="ghost" size="icon" className="text-gray-400 hover:text-white relative">
                  <Bell className="w-5 h-5" />
                  <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full text-xs flex items-center justify-center">
                    3
                  </span>
                </Button>

                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" className="flex items-center gap-2 text-white hover:bg-gray-800">
                      <Avatar className="w-8 h-8">
                        <AvatarImage src="/placeholder.svg?height=32&width=32" />
                        <AvatarFallback>JD</AvatarFallback>
                      </Avatar>
                      <span>John Doe</span>
                      <ChevronDown className="w-4 h-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end" className="bg-gray-900 border-gray-700">
                    <DropdownMenuLabel className="text-white">Mi Cuenta</DropdownMenuLabel>
                    <DropdownMenuSeparator className="bg-gray-700" />
                    <DropdownMenuItem className="text-gray-300 hover:text-white hover:bg-gray-800">
                      Perfil
                    </DropdownMenuItem>
                    <DropdownMenuItem className="text-gray-300 hover:text-white hover:bg-gray-800">
                      Facturación
                    </DropdownMenuItem>
                    <DropdownMenuItem className="text-gray-300 hover:text-white hover:bg-gray-800">
                      Cerrar Sesión
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </div>
          </header>

          {/* Main Content */}
          <main className="p-6 space-y-6 bg-black">
            {/* AI Insights Banner */}
            <Card className="bg-gradient-to-r from-purple-500/10 via-blue-500/10 to-cyan-500/10 border-purple-500/20">
              <CardContent className="p-6 bg-black">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center">
                    <Brain className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-white font-semibold text-lg">Recomendaciones Impulsadas por IA</h3>
                    <p className="text-gray-300 text-sm">
                      Basado en tu rendimiento reciente, recomendamos publicar contenido de video los martes a las 2 PM
                      para 40% más interacción. Tu audiencia responde mejor al contenido educativo con un tono casual.
                    </p>
                  </div>
                  <Button
                    onClick={() => setActiveSection("Analíticas")}
                    className="bg-white hover:bg-gray-100 text-black border border-gray-300"
                  >
                    <Brain className="w-4 h-4 mr-2" />
                    Ver Todos los Insights
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Quick Post Creation */}
            <Card className="bg-gray-900 border-gray-800">
              <CardHeader>
                <CardTitle className="text-white flex items-center gap-2">
                  <PlusCircle className="w-5 h-5" />
                  Crear Publicación Rápida
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="post-title" className="text-gray-300">
                      Título
                    </Label>
                    <Input
                      id="post-title"
                      value={newPost.title}
                      onChange={(e) => setNewPost((prev) => ({ ...prev, title: e.target.value }))}
                      placeholder="Título de la publicación..."
                      className="bg-gray-800 border-gray-700 text-white"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="post-platform" className="text-gray-300">
                      Plataforma
                    </Label>
                    <select
                      id="post-platform"
                      value={newPost.platform}
                      onChange={(e) => setNewPost((prev) => ({ ...prev, platform: e.target.value }))}
                      className="w-full p-2 bg-gray-800 border border-gray-700 rounded-lg text-white"
                    >
                      <option>Instagram</option>
                      <option>Facebook</option>
                      <option>LinkedIn</option>
                      <option>Twitter</option>
                      <option>YouTube</option>
                    </select>
                  </div>
                  <div className="flex items-end">
                    <Button
                      onClick={handleCreatePost}
                      className="bg-gray-700 hover:bg-gray-600 border border-gray-600 text-white w-full"
                    >
                      Crear Borrador
                    </Button>
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="post-content" className="text-gray-300">
                    Contenido
                  </Label>
                  <Textarea
                    id="post-content"
                    value={newPost.content}
                    onChange={(e) => setNewPost((prev) => ({ ...prev, content: e.target.value }))}
                    placeholder="Escribe el contenido de tu publicación..."
                    className="bg-gray-800 border-gray-700 text-white placeholder-gray-500"
                    rows={3}
                  />
                </div>
              </CardContent>
            </Card>

            {/* Social Media Integration Section */}
            <Card className="bg-gray-900 border-gray-800">
              <CardHeader>
                <CardTitle className="bg-gradient-to-r from-purple-400 via-pink-400 to-yellow-400 bg-clip-text text-transparent flex items-center gap-2">
                  <Share2 className="w-5 h-5" />
                  Plataformas de Redes Sociales
                </CardTitle>
                <CardDescription className="text-gray-400">
                  Gestiona tu presencia en redes sociales en todas las plataformas
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-4">
                  {socialPlatforms.map((platform) => (
                    <div key={platform.name} className="flex items-center gap-2 p-3 bg-gray-800 rounded-lg">
                      <platform.icon className={`w-5 h-5 ${platform.color}`} />
                      <span className="text-white text-sm">{platform.name}</span>
                      {platform.connected ? (
                        <Badge variant="secondary" className="bg-green-500/20 text-green-400 border-green-500/30">
                          Conectado
                        </Badge>
                      ) : (
                        <Button
                          size="sm"
                          onClick={() => connectPlatform(platform.name)}
                          className="bg-gray-700 hover:bg-gray-600 text-white text-xs px-2 py-1"
                        >
                          Conectar
                        </Button>
                      )}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Dashboard Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
              {/* AI Content Creation Hub */}
              <Card className="bg-gray-900 border-gray-800 xl:col-span-2">
                <CardHeader>
                  <CardTitle className="bg-gradient-to-r from-purple-400 via-pink-400 to-yellow-400 bg-clip-text text-transparent flex items-center gap-2">
                    <Brain className="w-5 h-5 text-purple-500" />
                    Centro de Creación de Contenido IA
                  </CardTitle>
                  <CardDescription className="text-gray-400">
                    Generación de contenido IA multimodal • OpenAI, DALL-E, RunwayML Integration
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  {/* Content Type Selector */}
                  <div className="flex gap-2">
                    <Button
                      variant={contentType === "text" ? "default" : "outline"}
                      onClick={() => setContentType("text")}
                      className={
                        contentType === "text"
                          ? "bg-white text-black border border-gray-300"
                          : "border-gray-600 text-gray-400 hover:text-white hover:border-gray-500"
                      }
                    >
                      <Zap className="w-4 h-4 mr-2" />
                      Texto
                    </Button>
                    <Button
                      variant={contentType === "image" ? "default" : "outline"}
                      onClick={() => setContentType("image")}
                      className={
                        contentType === "image"
                          ? "bg-white text-black border border-gray-300"
                          : "border-gray-600 text-gray-400 hover:text-white hover:border-gray-500"
                      }
                    >
                      <Eye className="w-4 h-4 mr-2" />
                      Imagen
                    </Button>
                    <Button
                      variant={contentType === "video" ? "default" : "outline"}
                      onClick={() => setContentType("video")}
                      className={
                        contentType === "video"
                          ? "bg-white text-black border border-gray-300"
                          : "border-gray-600 text-gray-400 hover:text-white hover:border-gray-500"
                      }
                    >
                      <div className="w-4 h-4 mr-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-sm"></div>
                      Video
                    </Button>
                  </div>

                  {/* Text Generation */}
                  {contentType === "text" && (
                    <div className="space-y-4">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <label className="text-sm text-gray-300">Tipo de Contenido</label>
                          <select
                            value={contentSettings.contentType}
                            onChange={(e) => setContentSettings((prev) => ({ ...prev, contentType: e.target.value }))}
                            className="w-full p-2 bg-gray-800 border border-gray-700 rounded-lg text-white"
                          >
                            <option>Publicación en Redes Sociales</option>
                            <option>Artículo de Blog</option>
                            <option>Campaña de Email</option>
                            <option>Descripción de Producto</option>
                            <option>Texto Publicitario</option>
                          </select>
                        </div>
                        <div className="space-y-2">
                          <label className="text-sm text-gray-300">Tono</label>
                          <select
                            value={contentSettings.tone}
                            onChange={(e) => setContentSettings((prev) => ({ ...prev, tone: e.target.value }))}
                            className="w-full p-2 bg-gray-800 border border-gray-700 rounded-lg text-white"
                          >
                            <option>Profesional</option>
                            <option>Casual</option>
                            <option>Amigable</option>
                            <option>Persuasivo</option>
                            <option>Humorístico</option>
                          </select>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm text-gray-300">Descripción del Contenido</label>
                        <Textarea
                          placeholder="Describe el contenido que quieres generar..."
                          value={prompt}
                          onChange={(e) => setPrompt(e.target.value)}
                          className="bg-gray-800 border-gray-700 text-white placeholder-gray-500"
                          rows={3}
                        />
                      </div>
                      <Button
                        onClick={handleGenerateContent}
                        disabled={isGenerating}
                        className="bg-gray-700 hover:bg-gray-600 border border-gray-600 text-white w-full"
                      >
                        {isGenerating ? (
                          <RefreshCw className="w-4 h-4 mr-2 animate-spin" />
                        ) : (
                          <Brain className="w-4 h-4 mr-2" />
                        )}
                        {isGenerating ? "Generando..." : "Generar Contenido de Texto"}
                      </Button>
                    </div>
                  )}

                  {/* Image Generation */}
                  {contentType === "image" && (
                    <div className="space-y-4">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <label className="text-sm text-gray-300">Estilo</label>
                          <select
                            value={contentSettings.style}
                            onChange={(e) => setContentSettings((prev) => ({ ...prev, style: e.target.value }))}
                            className="w-full p-2 bg-gray-800 border border-gray-700 rounded-lg text-white"
                          >
                            <option>Fotorrealista</option>
                            <option>Arte Digital</option>
                            <option>Ilustración</option>
                            <option>Minimalista</option>
                            <option>Abstracto</option>
                          </select>
                        </div>
                        <div className="space-y-2">
                          <label className="text-sm text-gray-300">Relación de Aspecto</label>
                          <select
                            value={contentSettings.aspectRatio}
                            onChange={(e) => setContentSettings((prev) => ({ ...prev, aspectRatio: e.target.value }))}
                            className="w-full p-2 bg-gray-800 border border-gray-700 rounded-lg text-white"
                          >
                            <option>Cuadrado (1:1)</option>
                            <option>Retrato (4:5)</option>
                            <option>Paisaje (16:9)</option>
                            <option>Historia (9:16)</option>
                          </select>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm text-gray-300">Descripción de la Imagen</label>
                        <Textarea
                          placeholder="Describe la imagen que quieres generar..."
                          value={imagePrompt}
                          onChange={(e) => setImagePrompt(e.target.value)}
                          className="bg-gray-800 border-gray-700 text-white placeholder-gray-500"
                          rows={3}
                        />
                      </div>
                      <Button
                        onClick={handleGenerateImage}
                        disabled={isGenerating}
                        className="bg-gray-700 hover:bg-gray-600 border border-gray-600 text-white w-full"
                      >
                        {isGenerating ? (
                          <RefreshCw className="w-4 h-4 mr-2 animate-spin" />
                        ) : (
                          <Eye className="w-4 h-4 mr-2" />
                        )}
                        {isGenerating ? "Generando..." : "Generar Imagen (DALL-E 3)"}
                      </Button>
                    </div>
                  )}

                  {/* Video Generation */}
                  {contentType === "video" && (
                    <div className="space-y-4">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <label className="text-sm text-gray-300">Tipo de Video</label>
                          <select
                            value={contentSettings.videoType}
                            onChange={(e) => setContentSettings((prev) => ({ ...prev, videoType: e.target.value }))}
                            className="w-full p-2 bg-gray-800 border border-gray-700 rounded-lg text-white"
                          >
                            <option>Formato Corto (15s)</option>
                            <option>Medio (30s)</option>
                            <option>Formato Largo (60s)</option>
                            <option>Formato Historia</option>
                          </select>
                        </div>
                        <div className="space-y-2">
                          <label className="text-sm text-gray-300">Plataforma</label>
                          <select
                            value={contentSettings.platform}
                            onChange={(e) => setContentSettings((prev) => ({ ...prev, platform: e.target.value }))}
                            className="w-full p-2 bg-gray-800 border border-gray-700 rounded-lg text-white"
                          >
                            <option>TikTok/Reels</option>
                            <option>YouTube Shorts</option>
                            <option>Instagram Stories</option>
                            <option>LinkedIn Video</option>
                          </select>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm text-gray-300">Concepto del Video</label>
                        <Textarea
                          placeholder="Describe el video que quieres crear..."
                          value={videoPrompt}
                          onChange={(e) => setVideoPrompt(e.target.value)}
                          className="bg-gray-800 border-gray-700 text-white placeholder-gray-500"
                          rows={3}
                        />
                      </div>
                      <Button
                        onClick={handleGenerateVideo}
                        disabled={isGenerating}
                        className="bg-gray-700 hover:bg-gray-600 border border-gray-600 text-white w-full"
                      >
                        {isGenerating ? (
                          <RefreshCw className="w-4 h-4 mr-2 animate-spin" />
                        ) : (
                          <div className="w-4 h-4 mr-2 bg-white rounded-sm"></div>
                        )}
                        {isGenerating ? "Generando..." : "Generar Video (RunwayML)"}
                      </Button>
                    </div>
                  )}

                  {/* Generated Content Display */}
                  {(generatedContent || generatedImage || generatedVideo) && (
                    <div className="space-y-4 p-4 bg-gray-800 rounded-lg border border-purple-500/20">
                      <div className="flex items-center gap-2">
                        <Brain className="w-4 h-4 text-purple-500" />
                        <span className="text-white font-medium">Contenido Generado por IA</span>
                      </div>

                      {generatedContent && contentType === "text" && (
                        <div className="space-y-2">
                          <pre className="text-white text-sm whitespace-pre-wrap bg-gray-900 p-3 rounded border">
                            {generatedContent}
                          </pre>
                          <div className="flex gap-2">
                            <Button
                              size="sm"
                              onClick={() => copyToClipboard(generatedContent)}
                              className="bg-gray-700 hover:bg-gray-600 text-white border border-gray-600"
                            >
                              <Copy className="w-3 h-3 mr-1" />
                              Copiar
                            </Button>
                            <Button
                              size="sm"
                              onClick={() => downloadContent(generatedContent, "contenido-generado.txt")}
                              variant="outline"
                              className="border-gray-600 text-gray-400 hover:text-white"
                            >
                              <Download className="w-3 h-3 mr-1" />
                              Descargar
                            </Button>
                            <Button
                              size="sm"
                              onClick={handleGenerateContent}
                              variant="outline"
                              className="border-gray-600 text-gray-400 hover:text-white"
                            >
                              <RefreshCw className="w-3 h-3 mr-1" />
                              Regenerar
                            </Button>
                          </div>
                        </div>
                      )}

                      {generatedImage && contentType === "image" && (
                        <div className="space-y-2">
                          <img
                            src={generatedImage || "/placeholder.svg"}
                            alt="Generated"
                            className="w-full max-w-md rounded-lg border"
                          />
                          <div className="flex gap-2">
                            <Button
                              size="sm"
                              className="bg-gray-700 hover:bg-gray-600 text-white border border-gray-600"
                            >
                              <Download className="w-3 h-3 mr-1" />
                              Descargar
                            </Button>
                            <Button
                              size="sm"
                              variant="outline"
                              className="border-gray-600 text-gray-400 hover:text-white"
                            >
                              <Edit className="w-3 h-3 mr-1" />
                              Editar
                            </Button>
                            <Button
                              size="sm"
                              onClick={handleGenerateImage}
                              variant="outline"
                              className="border-gray-600 text-gray-400 hover:text-white"
                            >
                              <RefreshCw className="w-3 h-3 mr-1" />
                              Regenerar
                            </Button>
                          </div>
                        </div>
                      )}

                      {generatedVideo && contentType === "video" && (
                        <div className="space-y-2">
                          <video controls className="w-full max-w-md rounded-lg">
                            <source src={generatedVideo} type="video/mp4" />
                          </video>
                          <div className="flex gap-2">
                            <Button
                              size="sm"
                              className="bg-gray-700 hover:bg-gray-600 text-white border border-gray-600"
                            >
                              <Download className="w-3 h-3 mr-1" />
                              Descargar
                            </Button>
                            <Button
                              size="sm"
                              variant="outline"
                              className="border-gray-600 text-gray-400 hover:text-white"
                            >
                              <Edit className="w-3 h-3 mr-1" />
                              Editar
                            </Button>
                            <Button
                              size="sm"
                              onClick={handleGenerateVideo}
                              variant="outline"
                              className="border-gray-600 text-gray-400 hover:text-white"
                            >
                              <RefreshCw className="w-3 h-3 mr-1" />
                              Regenerar
                            </Button>
                          </div>
                        </div>
                      )}
                    </div>
                  )}
                </CardContent>
              </Card>

              {/* Performance Snapshot */}
              <Card className="bg-gray-900 border-gray-800">
                <CardHeader>
                  <CardTitle className="bg-gradient-to-r from-purple-400 via-pink-400 to-yellow-400 bg-clip-text text-transparent flex items-center gap-2">
                    <TrendingUp className="w-5 h-5 text-green-500" />
                    Resumen de Rendimiento
                  </CardTitle>
                  <CardDescription className="text-gray-400">Métricas en tiempo real</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 gap-4">
                    <div className="flex items-center justify-between p-3 bg-gray-800 rounded-lg">
                      <div className="flex items-center gap-2">
                        <Eye className="w-4 h-4 text-blue-500" />
                        <span className="text-gray-300 text-sm">Alcance</span>
                      </div>
                      <span className="text-white font-semibold">{metrics.reach.toLocaleString()}</span>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-gray-800 rounded-lg">
                      <div className="flex items-center gap-2">
                        <Heart className="w-4 h-4 text-red-500" />
                        <span className="text-gray-300 text-sm">Interacción</span>
                      </div>
                      <span className="text-white font-semibold">{metrics.engagement.toLocaleString()}</span>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-gray-800 rounded-lg">
                      <div className="flex items-center gap-2">
                        <MousePointer className="w-4 h-4 text-yellow-500" />
                        <span className="text-gray-300 text-sm">CTR</span>
                      </div>
                      <span className="text-white font-semibold">{metrics.ctr}%</span>
                    </div>
                  </div>
                  <Button
                    onClick={() => setActiveSection("Analíticas")}
                    className="w-full bg-gray-700 hover:bg-gray-600 border border-gray-600 text-white"
                  >
                    Ver Analíticas Completas
                  </Button>
                </CardContent>
              </Card>
            </div>

            {/* Second Row */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Latest Posts */}
              <Card className="bg-gray-900 border-gray-800">
                <CardHeader>
                  <CardTitle className="bg-gradient-to-r from-purple-400 via-pink-400 to-yellow-400 bg-clip-text text-transparent">
                    Últimas Publicaciones
                  </CardTitle>
                  <CardDescription className="text-gray-400">Gestiona tus publicaciones recientes</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  {posts.slice(0, 3).map((post) => (
                    <div key={post.id} className="p-4 bg-gray-800 rounded-lg space-y-3">
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <h4 className="text-white font-medium">{post.title}</h4>
                          <p className="text-gray-400 text-sm mt-1">{post.content}</p>
                          <div className="flex items-center gap-4 mt-2">
                            <Badge variant="secondary" className="bg-blue-500/20 text-blue-400 border-blue-500/30">
                              {post.platform}
                            </Badge>
                            <span className="text-gray-500 text-xs">{post.date}</span>
                            <span className="text-gray-500 text-xs">{post.engagement} interacciones</span>
                          </div>
                        </div>
                        {post.image && (
                          <img
                            src={post.image || "/placeholder.svg"}
                            alt={post.title}
                            className="w-16 h-16 rounded-lg object-cover ml-4"
                          />
                        )}
                      </div>
                      <div className="flex gap-2">
                        <Button
                          size="sm"
                          variant="outline"
                          className="bg-gray-700 hover:bg-gray-600 text-white border-gray-600"
                        >
                          <Edit className="w-3 h-3 mr-1" />
                          Editar
                        </Button>
                        <Button
                          size="sm"
                          onClick={() => handleDeletePost(post.id)}
                          variant="outline"
                          className="border-gray-600 text-gray-400 hover:text-white hover:bg-gray-700"
                        >
                          <Trash2 className="w-3 h-3 mr-1" />
                          Eliminar
                        </Button>
                      </div>
                    </div>
                  ))}
                  <Button
                    onClick={() => setActiveSection("Publicaciones Programadas")}
                    className="w-full bg-gray-700 hover:bg-gray-600 border border-gray-600 text-white"
                  >
                    Ver Todas las Publicaciones
                  </Button>
                </CardContent>
              </Card>

              {/* Calendar Overview */}
              <Card className="bg-gray-900 border-gray-800">
                <CardHeader>
                  <CardTitle className="bg-gradient-to-r from-purple-400 via-pink-400 to-yellow-400 bg-clip-text text-transparent flex items-center gap-2">
                    <Calendar className="w-5 h-5 text-green-500" />
                    Vista del Calendario
                  </CardTitle>
                  <CardDescription className="text-gray-400">Publicaciones programadas</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-7 gap-1 text-center text-xs">
                    {["D", "L", "M", "M", "J", "V", "S"].map((day) => (
                      <div key={day} className="text-gray-500 font-medium p-2">
                        {day}
                      </div>
                    ))}
                    {Array.from({ length: 35 }, (_, i) => {
                      const day = i - 6
                      const hasPost = [8, 12, 15, 18, 22, 25].includes(day)
                      return (
                        <div
                          key={i}
                          className={`p-2 text-xs rounded cursor-pointer ${
                            day > 0 && day <= 31
                              ? hasPost
                                ? "bg-blue-500 text-white"
                                : "text-gray-400 hover:bg-gray-800"
                              : "text-gray-700"
                          }`}
                        >
                          {day > 0 && day <= 31 ? day : ""}
                        </div>
                      )
                    })}
                  </div>

                  <div className="space-y-2">
                    <h4 className="text-white text-sm font-medium">Próximas Publicaciones</h4>
                    {scheduledPosts.slice(0, 3).map((post, index) => (
                      <div key={index} className="flex items-center justify-between p-2 bg-gray-800 rounded">
                        <div>
                          <span className="text-white text-sm">{post.title}</span>
                          <div className="flex items-center gap-2 text-xs text-gray-400">
                            <Clock className="w-3 h-3" />
                            {post.time} • {post.platform}
                          </div>
                        </div>
                        <Badge variant="outline" className="border-blue-500 text-blue-400">
                          {new Date(post.date).toLocaleDateString()}
                        </Badge>
                      </div>
                    ))}
                  </div>
                  <Button
                    onClick={() => setActiveSection("Publicaciones Programadas")}
                    className="w-full bg-gray-700 hover:bg-gray-600 border border-gray-600 text-white"
                  >
                    Ver Calendario Completo
                  </Button>
                </CardContent>
              </Card>
            </div>
          </main>
        </SidebarInset>
      </SidebarProvider>
    </div>
  )
}
