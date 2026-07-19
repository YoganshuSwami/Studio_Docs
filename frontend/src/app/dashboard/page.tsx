"use client";

import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { FilePlus2, SplitSquareHorizontal, Minimize2, ScanText, FileSignature, FileText, MoreVertical, Clock, Sparkles } from 'lucide-react';

interface Document {
  id: string;
  name: string;
  size: string;
  type: string;
  createdAt: string;
}

export default function DashboardPage() {
  const [documents, setDocuments] = useState<Document[]>([]);
  const [loading, setLoading] = useState(true);
  const [userName, setUserName] = useState<string>('');

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) return;

    // Fetch user profile for banner
    fetch('http://localhost:5000/api/user/me', {
      headers: { Authorization: `Bearer ${token}` }
    })
      .then(res => res.json())
      .then(data => {
        if (!data.error) setUserName(data.name);
      })
      .catch(() => {});

    // Fetch documents
    fetch('http://localhost:5000/api/documents', {
      headers: { Authorization: `Bearer ${token}` }
    })
      .then(res => res.json())
      .then(data => {
        if (!data.error && Array.isArray(data)) {
          setDocuments(data);
        }
      })
      .catch(() => {})
      .finally(() => setLoading(false));
  }, []);

  const quickActions = [
    { name: 'New PDF', icon: FilePlus2, color: 'text-rose-400', bg: 'bg-rose-500/10 hover:bg-rose-500/20', border: 'border-rose-500/20' },
    { name: 'Merge', icon: FilePlus2, color: 'text-amber-400', bg: 'bg-amber-500/10 hover:bg-amber-500/20', border: 'border-amber-500/20' },
    { name: 'Split', icon: SplitSquareHorizontal, color: 'text-indigo-400', bg: 'bg-indigo-500/10 hover:bg-indigo-500/20', border: 'border-indigo-500/20' },
    { name: 'Compress', icon: Minimize2, color: 'text-emerald-400', bg: 'bg-emerald-500/10 hover:bg-emerald-500/20', border: 'border-emerald-500/20' },
    { name: 'OCR', icon: ScanText, color: 'text-purple-400', bg: 'bg-purple-500/10 hover:bg-purple-500/20', border: 'border-purple-500/20' },
    { name: 'Sign', icon: FileSignature, color: 'text-sky-400', bg: 'bg-sky-500/10 hover:bg-sky-500/20', border: 'border-sky-500/20' },
  ];

  return (
    <div className="space-y-10 max-w-6xl mx-auto">
      
      {/* Welcome Banner */}
      {/* Welcome Banner */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-slate-100 via-rose-50 to-indigo-50 dark:from-slate-900 dark:via-rose-950 dark:to-indigo-950 p-8 border border-slate-200 dark:border-white/10 shadow-lg dark:shadow-2xl transition-colors duration-300">
        <div className="absolute top-0 right-0 w-64 h-64 bg-rose-300 dark:bg-rose-600 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-[80px] opacity-30 dark:opacity-20 pointer-events-none transition-colors duration-300"></div>
        <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <h1 className="text-3xl font-bold text-slate-900 dark:text-white mb-2 flex items-center gap-3 transition-colors duration-300">
              Welcome back, {userName ? userName.split(' ')[0] : 'Professional'} <Sparkles className="w-6 h-6 text-amber-500 dark:text-amber-400" />
            </h1>
            <p className="text-slate-600 dark:text-slate-300 text-sm max-w-xl leading-relaxed transition-colors duration-300">
              You have {documents.length} document{documents.length !== 1 ? 's' : ''} in your workspace. Ready to create your next masterpiece?
            </p>
          </div>
          <Button className="shrink-0 bg-slate-900 dark:bg-white text-white dark:text-rose-900 hover:bg-slate-800 dark:hover:bg-slate-100 rounded-xl px-6 py-6 font-semibold shadow-lg dark:shadow-[0_0_20px_rgba(255,255,255,0.3)] transition-all">
            <FilePlus2 className="w-5 h-5 mr-2" />
            Create Blank PDF
          </Button>
        </div>
      </div>

      {/* Quick Actions */}
      <div>
        <h2 className="text-xl font-semibold text-slate-900 dark:text-white mb-6 flex items-center gap-2 transition-colors duration-300">
          <Sparkles className="w-5 h-5 text-amber-500" /> Quick Tools
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-5">
          {quickActions.map((action, i) => (
            <Card key={i} className={`bg-white dark:bg-gradient-to-b dark:from-slate-900/80 dark:to-black/40 backdrop-blur-xl border-slate-200 dark:border-white/10 shadow-sm hover:shadow-md dark:shadow-[0_4px_20px_rgba(0,0,0,0.3)] dark:hover:shadow-[0_8px_30px_rgba(0,0,0,0.5)] hover:-translate-y-1 hover:border-slate-300 dark:hover:border-white/20 transition-all duration-300 cursor-pointer group rounded-2xl overflow-hidden`}>
              <CardContent className="p-8 flex flex-col items-center justify-center text-center space-y-5 relative">
                <div className={`absolute inset-0 opacity-0 group-hover:opacity-5 dark:group-hover:opacity-10 transition-opacity duration-500 ${action.bg}`}></div>
                <div className={`relative z-10 w-16 h-16 rounded-2xl ${action.bg.replace('hover:', 'dark:hover:')} ${action.border.replace('border-', 'border-').replace('20', '30 dark:border-opacity-20')} border-2 flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300 shadow-sm dark:shadow-inner bg-slate-50 dark:bg-transparent`}>
                  <action.icon className={`w-8 h-8 ${action.color} drop-shadow-sm dark:drop-shadow-md`} />
                </div>
                <span className="relative z-10 font-semibold text-slate-700 dark:text-slate-300 text-[15px] tracking-wide group-hover:text-slate-900 dark:group-hover:text-white transition-colors">{action.name}</span>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Recent Documents Table */}
      <div>
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-semibold text-slate-900 dark:text-white transition-colors duration-300">Recent Documents</h2>
          <Button variant="ghost" className="text-rose-600 dark:text-rose-400 hover:text-rose-700 dark:hover:text-rose-300 hover:bg-rose-50 dark:hover:bg-rose-500/10 rounded-xl transition-all">View all</Button>
        </div>
        
        <div className="bg-white/80 dark:bg-slate-900/40 backdrop-blur-xl border border-slate-200 dark:border-white/10 rounded-3xl overflow-hidden shadow-sm dark:shadow-[0_8px_30px_rgba(0,0,0,0.4)] transition-colors duration-300">
          <div className="grid grid-cols-12 gap-4 p-6 border-b border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-black/40 text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-widest transition-colors duration-300">
            <div className="col-span-6 md:col-span-5 pl-2">Name</div>
            <div className="col-span-4 md:col-span-3 hidden md:block">Date Modified</div>
            <div className="col-span-3 md:col-span-2 hidden md:block">Size</div>
            <div className="col-span-6 md:col-span-2 text-right pr-2">Actions</div>
          </div>
          
          <div className="divide-y divide-slate-100 dark:divide-white/5 transition-colors duration-300">
            {loading ? (
              <div className="p-12 text-center text-slate-500 font-medium">Loading documents...</div>
            ) : documents.length === 0 ? (
              <div className="p-16 text-center flex flex-col items-center">
                <div className="w-20 h-20 rounded-3xl bg-slate-100 dark:bg-slate-800/50 flex items-center justify-center mb-5 border border-slate-200 dark:border-white/5 shadow-inner transition-colors duration-300">
                  <FileText className="w-10 h-10 text-slate-400 dark:text-slate-600" />
                </div>
                <h3 className="text-xl font-semibold text-slate-900 dark:text-slate-300 mb-2 transition-colors duration-300">No documents yet</h3>
                <p className="text-sm text-slate-500 max-w-sm">Upload or create a new PDF to get started with your professional workspace.</p>
              </div>
            ) : (
              documents.map((doc, i) => (
                <div key={i} className="grid grid-cols-12 gap-4 p-6 items-center hover:bg-slate-50 dark:hover:bg-white/5 transition-all duration-200 group cursor-pointer relative overflow-hidden">
                  <div className="absolute left-0 top-0 bottom-0 w-1 bg-rose-500 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <div className="col-span-8 md:col-span-5 flex items-center gap-5">
                    <div className="w-14 h-14 rounded-2xl bg-rose-50 dark:bg-gradient-to-br dark:from-rose-500/20 dark:to-red-600/20 border border-rose-200 dark:border-rose-500/30 flex items-center justify-center shrink-0 shadow-sm dark:shadow-lg group-hover:scale-105 transition-transform">
                      <FileText className="w-7 h-7 text-rose-500 dark:text-rose-400" />
                    </div>
                    <span className="font-semibold text-slate-900 dark:text-slate-200 truncate group-hover:text-rose-600 dark:group-hover:text-white transition-colors text-[15px]">{doc.name}</span>
                  </div>
                  <div className="col-span-3 hidden md:flex items-center text-sm font-medium text-slate-500 dark:text-slate-400 gap-2.5 transition-colors duration-300">
                    <Clock className="w-4 h-4 text-slate-400 dark:text-slate-500" />
                    {new Date(doc.createdAt).toLocaleDateString()}
                  </div>
                  <div className="col-span-2 hidden md:block text-sm font-medium text-slate-500 dark:text-slate-400 transition-colors duration-300">
                    {doc.size}
                  </div>
                  <div className="col-span-4 md:col-span-2 flex items-center justify-end gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Button size="sm" className="h-9 px-4 bg-white dark:bg-white/10 hover:bg-slate-100 dark:hover:bg-white/20 text-slate-900 dark:text-white hidden lg:flex border border-slate-200 dark:border-white/10 shadow-sm rounded-xl transition-all">Open</Button>
                    <Button variant="ghost" size="icon" className="h-9 w-9 text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-white/10 rounded-xl transition-all">
                      <MoreVertical className="w-5 h-5" />
                    </Button>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
