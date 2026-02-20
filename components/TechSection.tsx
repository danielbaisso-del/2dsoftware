
import React from 'react'
import { Smartphone, Monitor, Cloud, MapPin, Gift, Code } from 'lucide-react'

const features = [
  { label: 'Apps Mobile', icon: Smartphone },
  { label: 'Sistemas Web', icon: Monitor },
  { label: 'Plataformas SaaS', icon: Cloud },
  { label: 'Mapas Inteligentes', icon: MapPin },
  { label: 'Programas de Fidelização', icon: Gift },
  { label: 'APIs e Integrações', icon: Code },
]

export default function TechSection() {
  return (
    <section id="tecnologia" className="py-24 px-6 bg-gradient-to-b from-white to-slate-50">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">

        {/* Left: title, subtitle, feature grid */}
        <div>
          <h2 className="text-4xl font-bold leading-tight mb-6 text-slate-900">
            Desenvolvemos qualquer tipo
            <br />
            <span className="bg-gradient-to-r from-blue-600 to-indigo-500 bg-clip-text text-transparent">de aplicação</span>
          </h2>

          <p className="text-slate-600 mb-8 max-w-lg">Tecnologia moderna, escalável e pronta para o mercado.</p>

          <div className="grid grid-cols-2 gap-4 text-slate-700 max-w-md">
            {features.map((f) => {
              const Icon = f.icon
              return (
                <div key={f.label} className="flex items-center gap-3">
                  <div className="w-9 h-9 flex items-center justify-center rounded-lg bg-blue-50 text-blue-600">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div className="text-sm font-medium">{f.label}</div>
                </div>
              )
            })}
          </div>
        </div>

        {/* Right: clean metrics */}
        <div className="flex gap-6 md:justify-end">
          <div className="flex-1 p-8 rounded-3xl bg-white text-center border border-slate-100">
            <div className="text-5xl font-bold text-blue-600">99%</div>
            <p className="text-slate-500 mt-2 tracking-wider text-sm uppercase">Uptime</p>
          </div>

          <div className="flex-1 p-8 rounded-3xl bg-white text-center border border-slate-100">
            <div className="text-5xl font-bold text-indigo-600">100%</div>
            <p className="text-slate-500 mt-2 tracking-wider text-sm uppercase">Escalável</p>
          </div>
        </div>

      </div>
    </section>
  )
}
