import { Users, Link as LinkIcon, UserPlus } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function SharedPage() {
  return (
    <div className="space-y-8 max-w-6xl mx-auto animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-slate-900 dark:text-white mb-2 flex items-center gap-3 transition-colors duration-300">
            <Users className="w-8 h-8 text-indigo-500 dark:text-indigo-400" />
            Shared with me
          </h1>
          <p className="text-slate-600 dark:text-slate-400 transition-colors duration-300">Documents that your team or clients have shared with you.</p>
        </div>
        <Button className="bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl shadow-md dark:shadow-[0_0_15px_rgba(79,70,229,0.3)] transition-all">
          <UserPlus className="w-4 h-4 mr-2" />
          Invite Team
        </Button>
      </div>

      <div className="bg-white dark:bg-slate-900/40 backdrop-blur-xl border border-slate-200 dark:border-white/10 rounded-3xl overflow-hidden shadow-sm dark:shadow-[0_8px_30px_rgba(0,0,0,0.4)] relative transition-colors duration-300">
        <div className="absolute top-[-20%] left-[-10%] w-96 h-96 bg-indigo-300 dark:bg-indigo-600 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-[120px] opacity-30 dark:opacity-10 pointer-events-none transition-colors duration-300"></div>
        
        <div className="p-16 text-center z-10 relative">
          <div className="w-24 h-24 rounded-3xl bg-indigo-50 dark:bg-indigo-500/10 flex items-center justify-center mx-auto mb-6 border border-indigo-100 dark:border-indigo-500/20 shadow-inner transition-colors duration-300">
            <LinkIcon className="w-10 h-10 text-indigo-500 dark:text-indigo-400" />
          </div>
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-3 transition-colors duration-300">No shared documents</h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-md mx-auto mb-8 transition-colors duration-300">
            When someone shares a document or folder with you, it will appear here. Collaborate in real-time with your team.
          </p>
        </div>
      </div>
    </div>
  );
}
