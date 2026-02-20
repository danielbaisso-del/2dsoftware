import React from 'react'

function TechBadge({ children }: { children: React.ReactNode }) {
  return (
    <span className="px-3 py-1 bg-white/10 rounded-full text-sm text-white/90">{children}</span>
  )
}

export default function SitesSection() {
  return (
    <section className="relative py-24 px-6 bg-gradient-to-b from-blue-50 via-white to-white">
      <div className="max-w-6xl mx-auto text-center mb-16">
        <span className="text-teal-500 font-medium tracking-wide">Produtos & Serviços</span>

        <h2 className="text-5xl font-bold mt-4 leading-tight text-slate-900">
          Sites Profissionais
          <br />
          <span className="bg-gradient-to-r from-blue-600 to-indigo-500 bg-clip-text text-transparent">claros, rápidos e fáceis de manter</span>
        </h2>

        <p className="text-slate-700 mt-6 max-w-2xl mx-auto">Design e engenharia alinhados: entregamos experiências que convertem, com foco em performance e manutenção reduzida.</p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">

        {/* Cards principais */}
        <div className="md:col-span-2 grid sm:grid-cols-2 gap-8">

          <article className="p-8 rounded-3xl bg-white/70 backdrop-blur-md shadow-lg hover:shadow-blue-200 transition duration-300 hover:-translate-y-2">
            <div className="mb-4">
              {/* ícone moderno */}
              <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center">●</div>
            </div>
            <h3 className="text-xl font-semibold mb-3 text-slate-900">Landing Pages de Alta Conversão</h3>
            <p className="text-slate-600">Foco em mensagens claras, testes A/B e carregamento instantâneo.</p>
          </article>

          <article className="p-8 rounded-3xl bg-white/70 backdrop-blur-md shadow-lg hover:shadow-blue-200 transition duration-300 hover:-translate-y-2">
            <div className="mb-4">
              <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center">●</div>
            </div>
            <h3 className="text-xl font-semibold mb-3 text-slate-900">Sites Institucionais e Portfólios</h3>
            <p className="text-slate-600">Identidade visual, SEO técnico e edições fáceis.</p>
          </article>

          <article className="p-8 rounded-3xl bg-white/70 backdrop-blur-md shadow-lg hover:shadow-blue-200 transition duration-300 hover:-translate-y-2">
            <div className="mb-4">
              <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center">●</div>
            </div>
            <h3 className="text-xl font-semibold mb-3 text-slate-900">E-commerce e Integrações</h3>
            <p className="text-slate-600">Checkout rápido, integrações e monitoramento de vendas.</p>
          </article>

          <article className="p-8 rounded-3xl bg-white/70 backdrop-blur-md shadow-lg hover:shadow-blue-200 transition duration-300 hover:-translate-y-2">
            <div className="mb-4">
              <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center">●</div>
            </div>
            <h3 className="text-xl font-semibold mb-3 text-slate-900">Manutenção & Suporte</h3>
            <p className="text-slate-600">Código organizado, deploys previsíveis e suporte contínuo.</p>
          </article>

        </div>

        {/* Card Destaques */}
        <aside className="p-8 rounded-3xl bg-gradient-to-br from-slate-900 to-slate-800 text-white shadow-xl relative">
          <div className="absolute -left-6 top-6 w-2 h-24 bg-gradient-to-b from-indigo-400 to-teal-300 opacity-50 blur-xl rounded" />
          <h3 className="text-xl font-semibold mb-6 text-teal-400">Destaques</h3>

          <ul className="space-y-4 text-slate-200">
            <li>
              <strong>Performance</strong>
              <p className="text-slate-300 text-sm">Otimização real e métricas mensuráveis.</p>
            </li>

            <li>
              <strong>Acessibilidade</strong>
              <p className="text-slate-300 text-sm">Interfaces inclusivas e testadas.</p>
            </li>

            <li>
              <strong>SEO Técnico</strong>
              <p className="text-slate-300 text-sm">Estrutura indexável e performance.</p>
            </li>
          </ul>

          <div className="mt-6 flex flex-wrap gap-2">
            <TechBadge>React</TechBadge>
            <TechBadge>TypeScript</TechBadge>
            <TechBadge>Vite</TechBadge>
            <TechBadge>Tailwind</TechBadge>
          </div>
        </aside>

      </div>
    </section>
  )
}
