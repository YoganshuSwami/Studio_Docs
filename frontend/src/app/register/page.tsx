"use client";

import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { FileText, Mail, Lock, User } from 'lucide-react';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function RegisterPage() {
  const router = useRouter();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    try {
      const response = await fetch('http://localhost:5000/api/auth/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, password })
      });

      const data = await response.json();

      if (!response.ok) {
        setError(data.error || 'Registration failed');
        return;
      }

      // Store JWT token
      localStorage.setItem('token', data.token);
      
      // Redirect to dashboard
      router.push('/dashboard');
    } catch (err) {
      setError('Failed to connect to the server');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="h-screen flex w-full font-sans bg-white overflow-hidden">
      
      {/* Left side: Graphic / Branding */}
      <div className="hidden lg:flex flex-col justify-between w-1/2 bg-gradient-to-br from-slate-900 via-rose-950 to-indigo-950 p-10 relative overflow-hidden shrink-0">
        <div className="absolute top-[-10%] left-[-10%] w-96 h-96 bg-rose-700 rounded-full mix-blend-screen filter blur-[100px] opacity-40 animate-blob"></div>
        <div className="absolute top-[20%] right-[-10%] w-96 h-96 bg-amber-500 rounded-full mix-blend-screen filter blur-[100px] opacity-30 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-[-10%] left-[20%] w-96 h-96 bg-indigo-500 rounded-full mix-blend-screen filter blur-[100px] opacity-40 animate-blob animation-delay-4000"></div>

        <div className="relative z-10 flex items-center gap-3 text-white">
          <div className="w-10 h-10 rounded-xl bg-white shadow-lg flex items-center justify-center border border-white/20 overflow-hidden">
            <Image src="/icon.png" alt="StudioDoc Logo" width={40} height={40} className="w-full h-full object-cover" />
          </div>
          <span className="text-2xl font-bold tracking-tight">StudioDoc</span>
        </div>

        <div className="relative z-10 w-full max-w-lg mt-auto mb-10">
          <div className="p-8 rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 shadow-2xl">
            <h1 className="text-4xl font-bold text-white mb-4 leading-tight">
              Join the <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 to-rose-300">Professionals.</span>
            </h1>
            <p className="text-slate-300 text-base mb-8 leading-relaxed">
              Create an account to unlock premium PDF editing features and secure cloud storage.
            </p>
          </div>
        </div>
        
        <div className="relative z-10 text-slate-400 text-sm font-medium">
          &copy; {new Date().getFullYear()} StudioDoc Inc. All rights reserved.
        </div>
      </div>

      {/* Right side: Register Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-6 relative overflow-y-auto">
        <div className="w-full max-w-md flex flex-col justify-center min-h-full py-8">
          
          <div className="text-center lg:text-left mb-8">
            <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight mb-2">Sign up</h2>
            <p className="text-slate-500">Create your StudioDoc account today.</p>
          </div>

          {error && (
            <div className="mb-4 p-3 bg-red-50 border border-red-200 text-red-600 text-sm rounded-lg">
              {error}
            </div>
          )}

          <form className="space-y-4" onSubmit={handleRegister}>
            <div className="space-y-1.5">
              <label className="text-sm font-semibold text-slate-700" htmlFor="name">
                Full Name
              </label>
              <div className="relative">
                <User className="absolute left-3.5 top-3 h-5 w-5 text-slate-400" />
                <input
                  id="name"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="John Doe"
                  className="w-full rounded-xl border border-slate-300 pl-11 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-rose-600/20 focus:border-rose-600 transition-all bg-slate-50 hover:bg-white"
                  required
                />
              </div>
            </div>

            <div className="space-y-1.5">
              <label className="text-sm font-semibold text-slate-700" htmlFor="email">
                Email
              </label>
              <div className="relative">
                <Mail className="absolute left-3.5 top-3 h-5 w-5 text-slate-400" />
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="name@company.com"
                  className="w-full rounded-xl border border-slate-300 pl-11 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-rose-600/20 focus:border-rose-600 transition-all bg-slate-50 hover:bg-white"
                  required
                />
              </div>
            </div>

            <div className="space-y-1.5">
              <label className="text-sm font-semibold text-slate-700" htmlFor="password">
                Password
              </label>
              <div className="relative">
                <Lock className="absolute left-3.5 top-3 h-5 w-5 text-slate-400" />
                <input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="w-full rounded-xl border border-slate-300 pl-11 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-rose-600/20 focus:border-rose-600 transition-all bg-slate-50 hover:bg-white"
                  required
                />
              </div>
            </div>

            <Button disabled={isLoading} type="submit" className="w-full h-12 bg-rose-700 hover:bg-rose-800 text-white rounded-xl shadow-md font-semibold text-base transition-all active:scale-[0.98] mt-2">
              {isLoading ? 'Creating account...' : 'Create account'}
            </Button>
          </form>

          <p className="text-center text-sm text-slate-600 mt-8">
            Already have an account?{' '}
            <Link href="/login" className="font-semibold text-rose-600 hover:text-rose-700 hover:underline transition-all">
              Sign in
            </Link>
          </p>

        </div>
      </div>
    </div>
  );
}
