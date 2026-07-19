import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { FileText, SplitSquareHorizontal, Minimize2, ScanText, FileSignature, ShieldCheck, FileType, Cloud, Users } from 'lucide-react';

export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white text-slate-900 font-sans">
      {/* Top Navigation */}
      <header className="sticky top-0 z-50 w-full border-b bg-white/80 backdrop-blur-md">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded bg-blue-600 flex items-center justify-center">
              <FileText className="text-white w-5 h-5" />
            </div>
            <span className="text-xl font-bold tracking-tight">StudioDoc</span>
          </div>
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
            <Link href="#features" className="hover:text-blue-600 transition-colors">Features</Link>
            <Link href="#pricing" className="hover:text-blue-600 transition-colors">Pricing</Link>
            <Link href="#faq" className="hover:text-blue-600 transition-colors">FAQ</Link>
          </nav>
          <div className="flex items-center gap-4">
            <Link href="/login" className="text-sm font-medium hover:text-blue-600 transition-colors">Log in</Link>
            <Button className="bg-blue-600 hover:bg-blue-700 text-white rounded-md shadow-sm">
              Get Started
            </Button>
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-24 md:py-32 px-4 container mx-auto text-center max-w-4xl">
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-8 text-slate-900">
            Edit PDFs <span className="text-blue-600">Smarter</span>
          </h1>
          <p className="text-xl md:text-2xl text-slate-600 mb-10 max-w-2xl mx-auto">
            The professional PDF workspace designed for modern teams. Create, edit, merge, and collaborate in real-time.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white text-lg h-14 px-8 rounded-md shadow-lg shadow-blue-200">
              Start Editing
            </Button>
            <Button size="lg" variant="outline" className="text-lg h-14 px-8 rounded-md border-2 border-slate-200 hover:bg-slate-50">
              Upload PDF
            </Button>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-24 bg-slate-50 px-4">
          <div className="container mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">Everything you need</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { icon: FileText, title: 'Edit PDFs', desc: 'Modify text, images, and links directly within your documents.' },
                { icon: SplitSquareHorizontal, title: 'Merge & Split', desc: 'Combine multiple files or extract specific pages effortlessly.' },
                { icon: Minimize2, title: 'Compress', desc: 'Reduce file size without compromising on quality.' },
                { icon: ScanText, title: 'OCR', desc: 'Make scanned documents searchable and editable.' },
                { icon: FileSignature, title: 'Sign Documents', desc: 'Add legally binding e-signatures to your contracts.' },
                { icon: ShieldCheck, title: 'Protect PDFs', desc: 'Secure your files with passwords and encryption.' },
                { icon: FileType, title: 'Convert Files', desc: 'Transform PDFs to Word, Excel, JPG, and more.' },
                { icon: Cloud, title: 'Cloud Storage', desc: 'Access your documents from anywhere, securely synced.' },
                { icon: Users, title: 'Collaboration', desc: 'Work together with your team in real-time.' },
              ].map((feature, i) => (
                <Card key={i} className="border-0 shadow-sm hover:shadow-md transition-shadow bg-white rounded-xl">
                  <CardHeader>
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                      <feature.icon className="w-6 h-6 text-blue-600" />
                    </div>
                    <CardTitle>{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-600 leading-relaxed">{feature.desc}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section id="pricing" className="py-24 px-4 container mx-auto max-w-5xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">Simple, transparent pricing</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border border-slate-200 rounded-2xl shadow-sm">
              <CardHeader className="text-center pb-8">
                <CardTitle className="text-2xl mb-2">Basic</CardTitle>
                <div className="text-4xl font-bold mb-4">Free</div>
                <CardDescription>Essential PDF tools for personal use.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <ul className="space-y-3 text-slate-600">
                  <li className="flex gap-3"><ShieldCheck className="w-5 h-5 text-green-500" /> Edit up to 3 PDFs/day</li>
                  <li className="flex gap-3"><ShieldCheck className="w-5 h-5 text-green-500" /> Basic Merge & Split</li>
                  <li className="flex gap-3"><ShieldCheck className="w-5 h-5 text-green-500" /> 1GB Storage</li>
                </ul>
                <Button className="w-full bg-slate-900 hover:bg-slate-800 text-white rounded-md h-12">Get Started</Button>
              </CardContent>
            </Card>
            
            <Card className="border-2 border-blue-600 rounded-2xl shadow-lg relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-blue-600 text-white px-4 py-1 text-sm font-medium rounded-bl-lg">Popular</div>
              <CardHeader className="text-center pb-8 pt-10">
                <CardTitle className="text-2xl mb-2">Pro</CardTitle>
                <div className="text-4xl font-bold mb-4">$20<span className="text-lg text-slate-500 font-normal">/mo</span></div>
                <CardDescription>Advanced features for professionals.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <ul className="space-y-3 text-slate-600">
                  <li className="flex gap-3"><ShieldCheck className="w-5 h-5 text-blue-600" /> Unlimited Editing</li>
                  <li className="flex gap-3"><ShieldCheck className="w-5 h-5 text-blue-600" /> Advanced OCR & E-Sign</li>
                  <li className="flex gap-3"><ShieldCheck className="w-5 h-5 text-blue-600" /> 100GB Cloud Storage</li>
                  <li className="flex gap-3"><ShieldCheck className="w-5 h-5 text-blue-600" /> Real-time Collaboration</li>
                </ul>
                <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white rounded-md h-12">Upgrade to Pro</Button>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* FAQ Section */}
        <section id="faq" className="py-24 bg-slate-50 px-4">
          <div className="container mx-auto max-w-3xl">
            <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
            <Accordion type="single" collapsible className="w-full bg-white rounded-xl shadow-sm border px-6 py-2">
              <AccordionItem value="item-1">
                <AccordionTrigger className="text-lg font-medium">Is my data secure?</AccordionTrigger>
                <AccordionContent className="text-slate-600">
                  Yes, we use bank-level encryption. Your documents are stored securely and you retain full ownership.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger className="text-lg font-medium">Can I cancel anytime?</AccordionTrigger>
                <AccordionContent className="text-slate-600">
                  Absolutely. You can downgrade or cancel your subscription at any time from your account settings.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger className="text-lg font-medium">Do you support OCR?</AccordionTrigger>
                <AccordionContent className="text-slate-600">
                  Yes, our Pro plan includes advanced Optical Character Recognition (OCR) to make scanned documents searchable and editable.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </section>
      </main>

      <footer className="bg-slate-900 text-slate-400 py-12 px-4">
        <div className="container mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 text-white mb-4">
              <FileText className="w-5 h-5" />
              <span className="font-bold">StudioDoc</span>
            </div>
            <p className="text-sm">The professional PDF editor for modern teams.</p>
          </div>
          <div>
            <h4 className="text-white font-medium mb-4">Product</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="#features" className="hover:text-white">Features</Link></li>
              <li><Link href="#pricing" className="hover:text-white">Pricing</Link></li>
              <li><Link href="#" className="hover:text-white">Security</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-medium mb-4">Company</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="#" className="hover:text-white">About</Link></li>
              <li><Link href="#" className="hover:text-white">Blog</Link></li>
              <li><Link href="#" className="hover:text-white">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-medium mb-4">Legal</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="#" className="hover:text-white">Privacy Policy</Link></li>
              <li><Link href="#" className="hover:text-white">Terms of Service</Link></li>
            </ul>
          </div>
        </div>
        <div className="container mx-auto pt-8 border-t border-slate-800 text-sm text-center">
          &copy; {new Date().getFullYear()} StudioDoc. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
