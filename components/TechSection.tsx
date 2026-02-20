
import React from 'react';
import { motion } from 'framer-motion';

const TechSection: React.FC = () => {
  const stacks = ["Apps Mobile", "Sistemas Web", "Plataformas SaaS", "Mapas Inteligentes", "Programas de Fidelização", "APIs"];

  return (
    <section id="tecnologia" className="py-24 px-6 overflow-hidden">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl lg:text-5xl font-bold mb-8 leading-tight">
              Nossa tecnologia permite desenvolver qualquer tipo de <span className="text-gradient">aplicação.</span>
            </h2>
            <p className="text-gray-400 mb-10 text-lg">
              Utilizamos as ferramentas mais modernas do ecossistema de software para garantir 
              que seu projeto seja resiliente ao tempo e pronto para o mercado global.
            </p>
            
            <div className="flex flex-wrap gap-3">
              {stacks.map((item) => (
                <span 
                  key={item} 
                  className="px-4 py-2 glass rounded-full text-sm font-medium hover:bg-white/10 transition-colors"
                >
                  {item}
                </span>
              ))}
            </div>
          </motion.div>

          <div className="relative">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 flex items-center justify-center opacity-20 pointer-events-none"
            >
              <div className="w-[400px] h-[400px] border border-blue-500/50 rounded-full" />
              <div className="absolute w-[300px] h-[300px] border border-purple-500/50 rounded-full" />
              <div className="absolute w-[200px] h-[200px] border border-emerald-500/50 rounded-full" />
            </motion.div>
            
            <div className="grid grid-cols-2 gap-4 relative z-10">
              <motion.div 
                whileHover={{ y: -10 }}
                className="glass p-8 rounded-3xl text-center"
              >
                <div className="text-4xl font-bold mb-1">99%</div>
                <div className="text-xs text-gray-500 uppercase font-bold tracking-widest">Uptime</div>
              </motion.div>
              <motion.div 
                whileHover={{ y: -10 }}
                className="glass p-8 rounded-3xl text-center mt-8"
              >
                <div className="text-4xl font-bold mb-1">100%</div>
                <div className="text-xs text-gray-500 uppercase font-bold tracking-widest">Scalable</div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechSection;
