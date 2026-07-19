"use client";

import Link from 'next/link';
import { useRouter, usePathname } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { 
  FileText, 
  LayoutDashboard, 
  Folder, 
  Users, 
  LayoutTemplate, 
  Trash2, 
  Settings, 
  Search, 
  Upload, 
  Bell, 
  LogOut 
} from 'lucide-react';
import { ThemeToggle } from '@/components/ThemeToggle';
import { useEffect, useState } from 'react';

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const pathname = usePathname();
  const [userName, setUserName] = useState<string | null>(null);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      router.push('/login');
      return;
    }

    // Fetch user profile
    fetch('http://localhost:5000/api/user/me', {
      headers: { Authorization: `Bearer ${token}` }
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.error) {
          localStorage.removeItem('token');
          router.push('/login');
        } else {
          setUserName(data.name);
        }
      })
      .catch(() => {
        // Silent catch for layout
      });
  }, [router]);

  const handleLogout = () => {
    localStorage.removeItem('token');
    router.push('/login');
  };

  const navItems = [
    { name: 'Dashboard', href: '/dashboard', icon: LayoutDashboard },
    { name: 'My PDFs', href: '/dashboard/pdfs', icon: Folder },
    { name: 'Shared', href: '/dashboard/shared', icon: Users },
    { name: 'Templates', href: '/dashboard/templates', icon: LayoutTemplate },
  ];

  return (
    <div className="flex h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-300 font-sans overflow-hidden transition-colors duration-300">
      {/* Left Sidebar */}
      <aside className="w-64 bg-white/80 dark:bg-slate-900/50 backdrop-blur-xl border-r border-slate-200 dark:border-white/5 flex flex-col hidden md:flex shrink-0 z-20 transition-colors duration-300">
        <div className="h-16 flex items-center px-6 border-b border-slate-200 dark:border-white/5 transition-colors duration-300">
          <div className="flex items-center gap-3 text-rose-500">
            <div className="w-8 h-8 rounded-lg bg-white shadow-md dark:shadow-lg flex items-center justify-center border border-slate-200 dark:border-white/20 overflow-hidden">
              <img src="/icon.png" alt="StudioDoc Logo" className="w-full h-full object-cover" />
            </div>
            <span className="text-xl font-bold tracking-tight text-slate-900 dark:text-white transition-colors duration-300">StudioDoc</span>
          </div>
        </div>
        
        <div className="flex-1 overflow-y-auto py-6 px-3 space-y-2">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link 
                key={item.name}
                href={item.href} 
                className={`flex items-center gap-3 px-4 py-3 rounded-xl font-medium transition-all ${
                  isActive 
                    ? 'bg-rose-50 dark:bg-rose-500/10 text-rose-600 dark:text-rose-400 border border-rose-200 dark:border-rose-500/20 shadow-sm dark:shadow-[0_0_15px_rgba(225,29,72,0.1)]' 
                    : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-white/5 hover:text-slate-900 dark:hover:text-slate-200'
                }`}
              >
                <item.icon className="w-5 h-5" />
                {item.name}
              </Link>
            );
          })}
        </div>

        <div className="p-4 border-t border-slate-200 dark:border-white/5 space-y-2 bg-slate-50 dark:bg-slate-950/30 transition-colors duration-300">
          <Link href="/dashboard/trash" className="flex items-center gap-3 px-4 py-2.5 text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-white/5 hover:text-slate-900 dark:hover:text-slate-200 rounded-xl font-medium transition-colors">
            <Trash2 className="w-5 h-5" />
            Trash
          </Link>
          <Link href="/dashboard/settings" className="flex items-center gap-3 px-4 py-2.5 text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-white/5 hover:text-slate-900 dark:hover:text-slate-200 rounded-xl font-medium transition-colors">
            <Settings className="w-5 h-5" />
            Settings
          </Link>
        </div>
      </aside>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col min-w-0 relative">
        {/* Background Gradients (visible mostly in dark mode) */}
        <div className="absolute top-[-20%] right-[-10%] w-96 h-96 bg-rose-900 rounded-full mix-blend-screen filter blur-[120px] opacity-0 dark:opacity-20 pointer-events-none transition-opacity duration-300"></div>
        <div className="absolute bottom-[-10%] left-[10%] w-96 h-96 bg-indigo-900 rounded-full mix-blend-screen filter blur-[120px] opacity-0 dark:opacity-20 pointer-events-none animate-blob transition-opacity duration-300"></div>

        {/* Top Navigation */}
        <header className="h-16 bg-white/50 dark:bg-slate-900/30 backdrop-blur-md border-b border-slate-200 dark:border-white/5 flex items-center justify-between px-6 shrink-0 z-10 transition-colors duration-300">
          <div className="flex-1 flex items-center max-w-xl">
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400 dark:text-slate-500" />
              <input 
                type="text" 
                placeholder="Search documents..." 
                className="w-full bg-slate-100 dark:bg-black/20 border border-slate-200 dark:border-white/5 rounded-xl pl-10 pr-4 py-2 text-sm text-slate-900 dark:text-slate-200 placeholder:text-slate-500 focus:bg-white dark:focus:bg-black/40 focus:border-rose-400 dark:focus:border-rose-500/50 focus:ring-1 focus:ring-rose-400 dark:focus:ring-rose-500/50 transition-all outline-none"
              />
            </div>
          </div>
          <div className="flex items-center gap-5 ml-6">
            <Button className="bg-gradient-to-r from-rose-600 to-rose-700 hover:from-rose-700 hover:to-rose-800 text-white rounded-xl shadow-md dark:shadow-[0_0_15px_rgba(225,29,72,0.3)] hidden sm:flex items-center gap-2 border border-rose-500/50 transition-all">
              <Upload className="w-4 h-4" />
              Upload PDF
            </Button>
            <div className="h-6 w-px bg-slate-200 dark:bg-white/10 hidden sm:block mx-1 transition-colors duration-300"></div>
            <button className="text-slate-500 dark:text-slate-400 hover:text-rose-600 dark:hover:text-rose-400 transition-colors relative">
              <Bell className="w-5 h-5" />
              <span className="absolute -top-1 -right-1 w-2 h-2 bg-rose-500 rounded-full shadow-[0_0_8px_rgba(225,29,72,0.8)]"></span>
            </button>
            <div className="flex items-center gap-3 pl-2">
              <ThemeToggle />
              <div className="flex flex-col text-right hidden md:flex">
                <span className="text-sm font-medium text-slate-900 dark:text-slate-200 transition-colors duration-300">{userName || 'Loading...'}</span>
                <span className="text-xs text-slate-500">Pro Plan</span>
              </div>
              <button onClick={handleLogout} className="w-9 h-9 rounded-full bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-white/10 flex items-center justify-center hover:bg-rose-50 dark:hover:bg-slate-700 hover:text-rose-600 dark:hover:text-rose-400 transition-colors group">
                <LogOut className="w-4 h-4 group-hover:scale-110 transition-transform" />
              </button>
            </div>
          </div>
        </header>

        {/* Dashboard Content */}
        <main className="flex-1 overflow-y-auto p-6 md:p-8 z-10">
          {children}
        </main>
      </div>
    </div>
  );
}
