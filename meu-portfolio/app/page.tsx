'use client'

import { useState } from 'react'

interface Project {
  id: number
  title: string
  description: string
  category: string
  tech: string[]
  year: string
  duration: string
  featured: boolean
}

export default function NetflixPortfolio() {
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)
  const [searchQuery, setSearchQuery] = useState('')

  const projects: Project[] = [
    {
      id: 1,
      title: "E-commerce Platform",
      description: "Plataforma completa de e-commerce com React, Node.js e MongoDB. Sistema de pagamentos, gestão de produtos e dashboard administrativo.",
      category: "Web Development",
      tech: ["React", "Node.js", "MongoDB", "Stripe"],
      year: "2024",
      duration: "3 meses",
      featured: true
    },
    {
      id: 2,
      title: "Mobile Banking App",
      description: "Aplicativo mobile para transações bancárias com React Native. Interface intuitiva, biometria e notificações push.",
      category: "Mobile Apps",
      tech: ["React Native", "TypeScript", "Firebase"],
      year: "2024",
      duration: "4 meses",
      featured: true
    },
    {
      id: 3,
      title: "Brand Identity Design",
      description: "Criação de identidade visual completa para startup de tecnologia. Logo, paleta de cores e guia de estilo.",
      category: "Design",
      tech: ["Figma", "Illustrator", "Photoshop"],
      year: "2023",
      duration: "2 meses",
      featured: false
    },
    {
      id: 4,
      title: "Portfolio Website",
      description: "Website responsivo desenvolvido com Next.js e Tailwind CSS. Design moderno e performance otimizada.",
      category: "Web Development",
      tech: ["Next.js", "Tailwind", "TypeScript"],
      year: "2024",
      duration: "1 mês",
      featured: false
    },
    {
      id: 5,
      title: "Task Management App",
      description: "Aplicativo de gerenciamento de tarefas com funcionalidades avançadas de colaboração e relatórios.",
      category: "Mobile Apps",
      tech: ["Flutter", "Firebase", "Dart"],
      year: "2023",
      duration: "5 meses",
      featured: true
    },
    {
      id: 6,
      title: "UI/UX Case Study",
      description: "Estudo completo de experiência do usuário para aplicativo de delivery. Pesquisa, wireframes e protótipo.",
      category: "Design",
      tech: ["Figma", "Miro", "Principle"],
      year: "2024",
      duration: "6 semanas",
      featured: false
    }
  ]

  const categories = ['all', 'Web Development', 'Mobile Apps', 'Design']

  const filteredProjects = projects.filter(project => {
    const matchesCategory = selectedCategory === 'all' || project.category === selectedCategory
    const matchesSearch = project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         project.tech.some(tech => tech.toLowerCase().includes(searchQuery.toLowerCase()))
    return matchesCategory && matchesSearch
  })

  const featuredProjects = projects.filter(p => p.featured)

  return (
    <div className="min-h-screen bg-black text-white font-sans">
      {/* Header */}
      <header className="fixed top-0 w-full z-50 bg-gradient-to-b from-black via-black/80 to-transparent px-4 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-8">
            <h1 className="text-red-600 text-2xl font-bold">PORTFOLIO</h1>
            <nav className="hidden md:flex space-x-6">
              <button className="hover:text-gray-300 transition-colors">Início</button>
              <button className="hover:text-gray-300 transition-colors">Projetos</button>
              <button className="hover:text-gray-300 transition-colors">Sobre</button>
              <button className="hover:text-gray-300 transition-colors">Contato</button>
            </nav>
          </div>
          <div className="flex items-center space-x-4">
            <input
              type="text"
              placeholder="Buscar projetos..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="bg-black/50 border border-gray-600 text-white placeholder-gray-400 w-64 rounded px-3 py-1"
            />
            <div className="w-8 h-8 bg-red-600 rounded flex items-center justify-center font-bold">
              P
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center pt-20">
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-transparent z-10" />
        <img 
          src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1920&q=80"
          alt="Workspace"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="relative z-20 max-w-7xl mx-auto px-4">
          <div className="max-w-2xl">
            <h2 className="text-6xl font-bold mb-4">
              Desenvolvedor <span className="text-red-600">Full Stack</span>
            </h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Criando experiências digitais excepcionais com tecnologias modernas. 
              Especialista em React, Node.js e desenvolvimento mobile.
            </p>
            <div className="flex space-x-4">
              <button className="bg-white text-black hover:bg-gray-200 px-8 py-3 text-lg font-semibold rounded">
                ▶ Ver Projetos
              </button>
              <button className="border border-gray-500 text-white hover:bg-white/10 px-8 py-3 text-lg rounded">
                Mais Informações
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="px-4 py-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex space-x-4 mb-8">
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded font-semibold ${
                  selectedCategory === category 
                    ? 'bg-red-600 text-white' 
                    : 'text-gray-300 hover:text-white hover:bg-gray-800'
                }`}
              >
                {category === 'all' ? 'Todos' : category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="px-4 py-8">
        <div className="max-w-7xl mx-auto">
          <h3 className="text-2xl font-bold mb-6">Projetos em Destaque</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredProjects.map(project => (
              <div
                key={project.id}
                onClick={() => setSelectedProject(project)}
                className="bg-gray-900 border border-gray-800 rounded cursor-pointer transform hover:scale-105 transition-transform duration-300 overflow-hidden"
              >
                <div className="h-48 bg-gray-700 flex items-center justify-center text-gray-400 text-sm">
                  Imagem do projeto
                </div>
                <div className="p-4">
                  <h4 className="font-bold text-lg mb-2">{project.title}</h4>
                  <p className="text-gray-400 text-sm mb-3 line-clamp-2">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-3">
                    {project.tech.slice(0, 3).map(tech => (
                      <span key={tech} className="text-xs border border-gray-600 text-gray-300 rounded px-2 py-0.5">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex justify-between text-xs text-gray-500">
                    <span>{project.year}</span>
                    <span>{project.duration}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* All Projects */}
      <section className="px-4 py-8">
        <div className="max-w-7xl mx-auto">
          <h3 className="text-2xl font-bold mb-6">
            {selectedCategory === 'all' ? 'Todos os Projetos' : selectedCategory}
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {filteredProjects.map(project => (
              <div
                key={project.id}
                onClick={() => setSelectedProject(project)}
                className="bg-gray-900 border border-gray-800 rounded cursor-pointer transform hover:scale-105 transition-transform duration-300 aspect-[3/4] overflow-hidden"
              >
                <div className="h-full bg-gray-700 flex items-center justify-center text-gray-400 text-xs">
                  Imagem do projeto
                </div>
                <div className="absolute bottom-0 p-3 text-white">
                  <h4 className="font-semibold text-sm mb-1">{project.title}</h4>
                  <p className="text-xs text-gray-300">{project.category}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4">
          <div className="bg-gray-900 rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto relative">
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-4 right-4 bg-black/50 hover:bg-black/70 rounded-full p-2 text-white text-xl"
              aria-label="Fechar modal"
            >
              ✕
            </button>
            <div className="h-64 bg-gray-700 flex items-center justify-center text-gray-400 text-sm mb-4">
              Imagem detalhada do projeto
            </div>
            <div className="p-6">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-2xl font-bold mb-2">{selectedProject.title}</h3>
                  <span className="inline-block bg-red-600 rounded px-3 py-1 text-sm mb-4">
                    {selectedProject.category}
                  </span>
                </div>
                <div className="text-right text-sm text-gray-400">
                  <p>{selectedProject.year}</p>
                  <p>{selectedProject.duration}</p>
                </div>
              </div>
              <p className="text-gray-300 mb-6 leading-relaxed">
                {selectedProject.description}
              </p>
              <div className="mb-6">
                <h4 className="text-lg font-semibold mb-3">Tecnologias Utilizadas</h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.tech.map(tech => (
                    <span key={tech} className="text-xs border border-gray-600 text-gray-300 rounded px-2 py-0.5">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <div className="flex space-x-4">
                <button className="bg-red-600 hover:bg-red-700 px-6 py-2 rounded text-white font-semibold">
                  Ver Demo
                </button>
                <button className="border border-gray-600 text-white hover:bg-white/10 px-6 py-2 rounded font-semibold">
                  Código Fonte
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="bg-gray-900 px-4 py-12 mt-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h4 className="text-red-600 text-xl font-bold mb-4">PORTFOLIO</h4>
              <p className="text-gray-400 text-sm">
                Desenvolvedor apaixonado por criar soluções inovadoras e experiências digitais excepcionais.
              </p>
            </div>
            <div>
              <h5 className="font-semibold mb-3">Navegação</h5>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Início</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Projetos</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Sobre</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contato</a></li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold mb-3">Tecnologias</h5>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>React & Next.js</li>
                <li>Node.js & Express</li>
                <li>React Native</li>
                <li>MongoDB & PostgreSQL</li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold mb-3">Contato</h5>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>email@exemplo.com</li>
                <li>+55 (11) 99999-9999</li>
                <li>LinkedIn</li>
                <li>GitHub</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-500">
            <p>&copy; 2024 Portfolio. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}