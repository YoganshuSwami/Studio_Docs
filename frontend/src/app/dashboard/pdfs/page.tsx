import { Folder, Search, Filter } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function MyPDFsPage() {
  return (
    <div className="space-y-8 max-w-6xl mx-auto animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-slate-900 dark:text-white mb-2 flex items-center gap-3 transition-colors duration-300">
            <Folder className="w-8 h-8 text-rose-500" />
            My PDFs
          </h1>
          <p className="text-slate-600 dark:text-slate-400 transition-colors duration-300">Manage, organize, and view all your personal documents.</p>
        </div>
        <div className="flex items-center gap-3">
          <Button variant="outline" className="border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-white/5 text-slate-700 dark:text-white hover:bg-slate-100 dark:hover:bg-white/10 hidden sm:flex transition-colors duration-300">
            <Filter className="w-4 h-4 mr-2" />
            Filter
          </Button>
          <Button className="bg-gradient-to-r from-rose-600 to-rose-700 hover:from-rose-700 hover:to-rose-800 text-white rounded-xl shadow-[0_0_15px_rgba(225,29,72,0.3)] transition-all">
            Upload PDF
          </Button>
        </div>
      </div>

      <div className="bg-white dark:bg-slate-900/40 backdrop-blur-xl border border-slate-200 dark:border-white/10 rounded-3xl p-16 text-center shadow-sm dark:shadow-[0_8px_30px_rgba(0,0,0,0.4)] transition-colors duration-300">
        <div className="w-24 h-24 rounded-full bg-rose-50 dark:bg-rose-500/10 flex items-center justify-center mx-auto mb-6 border border-rose-100 dark:border-rose-500/20 shadow-inner transition-colors duration-300">
          <Folder className="w-12 h-12 text-rose-500 dark:text-rose-400" />
        </div>
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-3 transition-colors duration-300">No PDFs found</h2>
        <p className="text-slate-600 dark:text-slate-400 max-w-md mx-auto mb-8 transition-colors duration-300">
          You haven't uploaded any documents yet. Drag and drop your files here or click the upload button to get started.
        </p>
        <Button className="bg-slate-900 dark:bg-white text-white dark:text-rose-900 hover:bg-slate-800 dark:hover:bg-slate-200 rounded-xl px-8 py-6 font-semibold shadow-md dark:shadow-[0_0_20px_rgba(255,255,255,0.2)] transition-all">
          Upload your first PDF
        </Button>
      </div>
    </div>
  );
}
