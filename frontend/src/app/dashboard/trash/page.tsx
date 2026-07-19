import { Trash2, AlertTriangle } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function TrashPage() {
  return (
    <div className="space-y-8 max-w-6xl mx-auto animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-slate-900 dark:text-white mb-2 flex items-center gap-3 transition-colors duration-300">
            <Trash2 className="w-8 h-8 text-slate-500" />
            Trash
          </h1>
          <p className="text-slate-600 dark:text-slate-400 transition-colors duration-300">Items in trash will be permanently deleted after 30 days.</p>
        </div>
        <Button variant="outline" className="border-red-200 dark:border-red-500/30 text-red-600 dark:text-red-400 bg-red-50 dark:bg-transparent hover:bg-red-100 dark:hover:bg-red-500/10 hover:text-red-700 dark:hover:text-red-300 rounded-xl transition-all">
          Empty Trash
        </Button>
      </div>

      <div className="bg-white dark:bg-slate-900/40 backdrop-blur-xl border border-slate-200 dark:border-white/10 rounded-3xl p-16 text-center shadow-sm dark:shadow-[0_8px_30px_rgba(0,0,0,0.4)] transition-colors duration-300">
        <div className="w-24 h-24 rounded-full bg-slate-100 dark:bg-slate-800/50 flex items-center justify-center mx-auto mb-6 border border-slate-200 dark:border-white/5 shadow-inner transition-colors duration-300">
          <Trash2 className="w-12 h-12 text-slate-400 dark:text-slate-600" />
        </div>
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-3 transition-colors duration-300">Trash is empty</h2>
        <p className="text-slate-600 dark:text-slate-400 max-w-md mx-auto mb-8 transition-colors duration-300">
          You don't have any deleted documents.
        </p>
      </div>
    </div>
  );
}
