"use client";

import { Settings, User, Bell, Shield, CreditCard } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function SettingsPage() {
  const settingsTabs = [
    { name: 'Profile', icon: User, active: true },
    { name: 'Billing', icon: CreditCard, active: false },
    { name: 'Notifications', icon: Bell, active: false },
    { name: 'Security', icon: Shield, active: false },
  ];

  return (
    <div className="space-y-8 max-w-6xl mx-auto animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-slate-900 dark:text-white mb-2 flex items-center gap-3 transition-colors duration-300">
            <Settings className="w-8 h-8 text-slate-500 dark:text-slate-400" />
            Settings
          </h1>
          <p className="text-slate-600 dark:text-slate-400 transition-colors duration-300">Manage your account preferences and configurations.</p>
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-8">
        {/* Settings Sidebar */}
        <div className="w-full md:w-64 shrink-0 space-y-2">
          {settingsTabs.map((tab) => (
            <button
              key={tab.name}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl font-medium transition-all text-left ${
                tab.active
                  ? 'bg-rose-50 dark:bg-rose-500/10 text-rose-600 dark:text-rose-400 border border-rose-200 dark:border-rose-500/20 shadow-sm dark:shadow-[0_0_15px_rgba(225,29,72,0.1)]'
                  : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-white/5 hover:text-slate-900 dark:hover:text-slate-200'
              }`}
            >
              <tab.icon className="w-5 h-5" />
              {tab.name}
            </button>
          ))}
        </div>

        {/* Settings Content */}
        <div className="flex-1 bg-white dark:bg-slate-900/40 backdrop-blur-xl border border-slate-200 dark:border-white/10 rounded-3xl p-8 shadow-sm dark:shadow-[0_8px_30px_rgba(0,0,0,0.4)] transition-colors duration-300">
          <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-6 transition-colors duration-300">Profile Settings</h2>
          
          <div className="space-y-6">
            <div className="space-y-2">
              <label className="text-sm font-medium text-slate-700 dark:text-slate-300 transition-colors duration-300">Full Name</label>
              <input 
                type="text" 
                defaultValue="Yoganshu Swami"
                className="w-full bg-slate-50 dark:bg-black/40 border border-slate-200 dark:border-white/10 rounded-xl px-4 py-3 text-slate-900 dark:text-slate-200 focus:border-rose-400 dark:focus:border-rose-500/50 focus:ring-1 focus:ring-rose-400 dark:focus:ring-rose-500/50 outline-none transition-all"
              />
            </div>
            
            <div className="space-y-2">
              <label className="text-sm font-medium text-slate-700 dark:text-slate-300 transition-colors duration-300">Email Address</label>
              <input 
                type="email" 
                defaultValue="contact@yoganshu.com"
                className="w-full bg-slate-50 dark:bg-black/40 border border-slate-200 dark:border-white/10 rounded-xl px-4 py-3 text-slate-900 dark:text-slate-200 focus:border-rose-400 dark:focus:border-rose-500/50 focus:ring-1 focus:ring-rose-400 dark:focus:ring-rose-500/50 outline-none transition-all opacity-70 cursor-not-allowed"
                disabled
              />
              <p className="text-xs text-slate-500">Your email address cannot be changed right now.</p>
            </div>

            <div className="pt-4 border-t border-slate-200 dark:border-white/10 flex justify-end transition-colors duration-300">
              <Button className="bg-rose-600 hover:bg-rose-700 text-white rounded-xl shadow-md dark:shadow-lg dark:shadow-rose-900/20 px-8 transition-all">
                Save Changes
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
