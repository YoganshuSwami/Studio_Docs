import { LayoutTemplate, Plus } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function TemplatesPage() {
  const templates = [
    { name: 'Invoice', desc: 'Standard professional invoice layout', color: 'from-blue-100 to-cyan-100 dark:from-blue-500/20 dark:to-cyan-500/20', border: 'border-blue-200 dark:border-blue-500/30' },
    { name: 'Contract', desc: 'Legal agreement boilerplate', color: 'from-emerald-100 to-teal-100 dark:from-emerald-500/20 dark:to-teal-500/20', border: 'border-emerald-200 dark:border-emerald-500/30' },
    { name: 'Resume', desc: 'Modern ATS-friendly layout', color: 'from-purple-100 to-pink-100 dark:from-purple-500/20 dark:to-pink-500/20', border: 'border-purple-200 dark:border-purple-500/30' },
  ];

  return (
    <div className="space-y-8 max-w-6xl mx-auto animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-slate-900 dark:text-white mb-2 flex items-center gap-3 transition-colors duration-300">
            <LayoutTemplate className="w-8 h-8 text-amber-500 dark:text-amber-400" />
            Templates
          </h1>
          <p className="text-slate-600 dark:text-slate-400 transition-colors duration-300">Jumpstart your documents with our premium templates.</p>
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        <div className="bg-slate-50 dark:bg-black/20 border border-slate-300 dark:border-white/10 border-dashed rounded-3xl p-8 flex flex-col items-center justify-center text-center cursor-pointer hover:bg-slate-100 dark:hover:bg-white/5 hover:border-slate-400 dark:hover:border-white/30 transition-all group min-h-[250px]">
          <div className="w-16 h-16 rounded-2xl bg-white dark:bg-white/5 flex items-center justify-center mb-4 group-hover:scale-110 shadow-sm dark:shadow-none transition-transform">
            <Plus className="w-8 h-8 text-slate-400 group-hover:text-slate-600 dark:group-hover:text-white transition-colors" />
          </div>
          <h3 className="text-lg font-semibold text-slate-700 dark:text-slate-300 group-hover:text-slate-900 dark:group-hover:text-white transition-colors">Create Template</h3>
          <p className="text-sm text-slate-500 mt-2">Save your own designs</p>
        </div>

        {templates.map((tpl, i) => (
          <div key={i} className={`bg-gradient-to-br ${tpl.color} border ${tpl.border} rounded-3xl p-8 flex flex-col relative overflow-hidden group cursor-pointer hover:-translate-y-1 transition-all duration-300 min-h-[250px] shadow-sm hover:shadow-md dark:shadow-none`}>
            <div className="flex-1 z-10">
              <div className="w-12 h-12 rounded-xl bg-white/60 dark:bg-black/20 flex items-center justify-center mb-6 shadow-sm dark:shadow-inner backdrop-blur-sm transition-colors duration-300">
                <LayoutTemplate className="w-6 h-6 text-slate-700 dark:text-white" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2 transition-colors duration-300">{tpl.name}</h3>
              <p className="text-sm text-slate-600 dark:text-slate-300/80 transition-colors duration-300">{tpl.desc}</p>
            </div>
            <div className="mt-6 z-10 opacity-0 group-hover:opacity-100 transition-opacity">
              <Button className="w-full bg-white/80 dark:bg-white/20 hover:bg-white dark:hover:bg-white/30 text-slate-900 dark:text-white border border-slate-200 dark:border-white/10 rounded-xl shadow-sm transition-colors">Use Template</Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
