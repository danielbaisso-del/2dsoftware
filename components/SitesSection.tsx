import React from 'react'
import { Phone, ExternalLink } from 'lucide-react'

const whatsappLink = (msg: string) =>
  `https://wa.me/5581999999999?text=${encodeURIComponent(msg)}`

function TechTag({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-block bg-gray-800/50 text-gray-200 px-3 py-1 rounded-full text-sm">{children}</span>
  )
}

export default function SitesSection() {
  return (
    <section id="sites" className="w-full bg-[#061223] text-gray-100 py-20 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row gap-10 items-start">
          <div className="lg:w-1/2">
            <p className="text-sm text-teal-300 font-medium">Produtos & Serviços</p>
            <h2 className="text-3xl md:text-4xl font-bold mt-2">Sites Profissionais — claros, rápidos e fáceis de manter</h2>
            <p className="text-gray-300 mt-4 max-w-xl">Design e engenharia alinhados: entregamos experiências que convertem, com foco em performance e manutenção reduzida.</p>

            <ul className="mt-6 space-y-3">
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-teal-400 rounded-full mt-2" />
                <div>
                  <div className="font-semibold">Landing Pages de Alta Conversão</div>
                  <div className="text-gray-300 text-sm">Foco em mensagens claras, testes A/B e carregamento instantâneo.</div>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-teal-400 rounded-full mt-2" />
                <div>
                  <div className="font-semibold">Sites Institucionais e Portfólios</div>
                  <div className="text-gray-300 text-sm">Identidade visual, SEO técnico e edições fáceis.</div>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-teal-400 rounded-full mt-2" />
                <div>
                  <div className="font-semibold">E‑commerce e Integrations</div>
                  <div className="text-gray-300 text-sm">Checkout rápido, integrações e monitoramento de vendas.</div>
                </div>
              </li>
            </ul>

            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <a
                className="inline-flex items-center gap-2 bg-teal-500 hover:bg-teal-600 text-black font-semibold px-4 py-3 rounded"
                href={whatsappLink('Olá, quero um orçamento para um site profissional.')}
                target="_blank"
                rel="noreferrer"
              >
                <Phone size={16} /> Orçar agora
              </a>

              <a
                className="inline-flex items-center gap-2 border border-gray-700 px-4 py-3 rounded text-gray-200 hover:bg-gray-800"
                href={whatsappLink('Gostaria de ver o portfólio e propostas anteriores.')}
                target="_blank"
                rel="noreferrer"
              >
                Ver portfólio
              </a>

              <a
                className="inline-flex items-center gap-2 text-teal-300 hover:text-teal-400 px-4 py-3"
                href="#contact"
              >
                Saiba mais <ExternalLink size={14} />
              </a>
            </div>

            <div className="mt-8">
              <div className="bg-gradient-to-r from-[#07202a] to-transparent p-4 rounded-lg border border-gray-800">
                <div className="text-sm text-gray-400">Preview técnico</div>
                <div className="mt-3 bg-[#01121a] rounded text-sm font-mono text-green-300 p-4 h-40 overflow-auto">
                  <pre>
{`> git clone git@repo:client/site.git
> npm run build
> deploy --target=production`}
                  </pre>
                </div>
              </div>
            </div>
          </div>

          <aside className="lg:w-1/2">
            <div className="grid gap-4">
              <div className="bg-[#02131a] border border-gray-800 rounded-lg p-5">
                <h4 className="text-teal-300 font-medium">Nosso processo</h4>
                <ol className="mt-4 space-y-3 text-gray-300 text-sm">
                  <li><strong>Brief</strong> • alinhamento de escopo e métricas</li>
                  <li><strong>Design</strong> • protótipos e validação</li>
                  <li><strong>Implementação</strong> • código testado e modular</li>
                  <li><strong>Operação</strong> • deploy e monitoramento</li>
                </ol>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-4">
                  <p className="text-sm text-gray-300">Performance</p>
                  <p className="text-white font-semibold mt-1">Otimização real</p>
                </div>
                <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-4">
                  <p className="text-sm text-gray-300">Manutenção</p>
                  <p className="text-white font-semibold mt-1">Código limpo</p>
                </div>
                <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-4">
                  <p className="text-sm text-gray-300">Acessibilidade</p>
                  <p className="text-white font-semibold mt-1">Foco em usabilidade</p>
                </div>
                <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-4">
                  <p className="text-sm text-gray-300">SEO</p>
                  <p className="text-white font-semibold mt-1">Estrutura indexável</p>
                </div>
              </div>

              <div className="bg-transparent">
                <div className="text-sm text-gray-400">Tech stack</div>
                <div className="mt-3 flex flex-wrap gap-2">
                  <TechTag>React</TechTag>
                  <TechTag>TypeScript</TechTag>
                  <TechTag>Vite</TechTag>
                  <TechTag>Tailwind</TechTag>
                  <TechTag>Node</TechTag>
                </div>
              </div>
            </div>
          </aside>
        </div>
        </div>

        {/* Wave divider: smooth gradient from section color to white for gentle transition */}
        <div className="absolute left-0 right-0 bottom-0 pointer-events-none">
          <svg
            className="w-full h-36 block"
            viewBox="0 0 1440 320"
            preserveAspectRatio="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <defs>
              <linearGradient id="sites-divider-gradient" x1="0%" x2="0%" y1="0%" y2="100%">
                <stop offset="0%" stopColor="#061223" />
                <stop offset="65%" stopColor="#e8eef3" />
                <stop offset="100%" stopColor="#ffffff" />
              </linearGradient>
            </defs>
            <path
              fill="url(#sites-divider-gradient)"
              d="M0,64L48,69.3C96,75,192,85,288,106.7C384,128,480,160,576,160C672,160,768,128,864,117.3C960,107,1056,117,1152,128C1248,139,1344,149,1392,154.7L1440,160L1440,320L0,320Z"
            />
          </svg>

          {/* soft blur to blend edges */}
          <div className="absolute left-0 right-0 -top-6 h-6 bg-white opacity-10 blur-sm"></div>
        </div>
      </section>
  )
}
