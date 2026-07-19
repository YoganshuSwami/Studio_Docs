"use client";

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { 
  Undo, Redo, Save, Download, Printer, Share, 
  ZoomOut, ZoomIn, Maximize, RotateCw, Search,
  MousePointer2, Hand, Type, Image as ImageIcon,
  Square, Circle, PenTool, Highlighter, StickyNote,
  FileSignature, ChevronLeft, ChevronRight, Settings,
  AlignLeft, AlignCenter, AlignRight, Bold, Italic, Underline, Upload
} from 'lucide-react';
import { PDFViewer } from '@/components/pdf/PDFViewer';

export default function EditorPage() {
  const [file, setFile] = useState<File | null>(null);
  const [scale, setScale] = useState<number>(1);

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
    }
  };

  const handleZoomIn = () => setScale(prev => Math.min(prev + 0.25, 3));
  const handleZoomOut = () => setScale(prev => Math.max(prev - 0.25, 0.5));
  const handleFitPage = () => setScale(1);

  return (
    <div className="flex flex-col h-full w-full bg-slate-100">
      {/* Top Toolbar */}
      <header className="h-14 bg-white border-b border-slate-200 flex items-center justify-between px-4 shrink-0 shadow-sm z-10">
        <div className="flex items-center gap-1 border-r pr-4 border-slate-200">
          <Button variant="ghost" size="icon" className="w-8 h-8 text-slate-600">
            <ChevronLeft className="w-5 h-5" />
          </Button>
          <span className="font-semibold text-sm ml-2 mr-4 text-slate-800">
            {file ? file.name : "Untitled Document.pdf"}
          </span>
        </div>
        
        <div className="flex items-center gap-1 border-r pr-4 border-slate-200">
          <Button variant="ghost" size="icon" className="w-8 h-8 text-slate-600"><Undo className="w-4 h-4" /></Button>
          <Button variant="ghost" size="icon" className="w-8 h-8 text-slate-600"><Redo className="w-4 h-4" /></Button>
          <Button variant="ghost" size="icon" className="w-8 h-8 text-slate-600"><Save className="w-4 h-4" /></Button>
        </div>

        <div className="flex items-center justify-center flex-1 gap-1">
          <Button variant="ghost" size="icon" className="w-8 h-8 text-slate-600" onClick={handleZoomOut}><ZoomOut className="w-4 h-4" /></Button>
          <span className="text-xs font-medium w-12 text-center text-slate-700">{Math.round(scale * 100)}%</span>
          <Button variant="ghost" size="icon" className="w-8 h-8 text-slate-600" onClick={handleZoomIn}><ZoomIn className="w-4 h-4" /></Button>
          <div className="w-px h-4 bg-slate-300 mx-1"></div>
          <Button variant="ghost" size="icon" className="w-8 h-8 text-slate-600" onClick={handleFitPage}><Maximize className="w-4 h-4" /></Button>
          <Button variant="ghost" size="icon" className="w-8 h-8 text-slate-600"><RotateCw className="w-4 h-4" /></Button>
        </div>

        <div className="flex items-center gap-2">
          {!file && (
            <label className="cursor-pointer">
              <input type="file" accept=".pdf" className="hidden" onChange={handleFileUpload} />
              <div className="h-8 px-3 bg-blue-100 text-blue-700 hover:bg-blue-200 rounded-md shadow-sm text-sm font-medium flex items-center gap-1 transition-colors">
                <Upload className="w-4 h-4" /> Open PDF
              </div>
            </label>
          )}
          <Button variant="outline" size="sm" className="h-8 hidden md:flex items-center gap-1"><Share className="w-3.5 h-3.5" /> Share</Button>
          <Button variant="outline" size="sm" className="h-8 hidden md:flex items-center gap-1"><Printer className="w-3.5 h-3.5" /> Print</Button>
          <Button size="sm" className="h-8 bg-blue-600 hover:bg-blue-700 text-white"><Download className="w-3.5 h-3.5 mr-1" /> Export</Button>
        </div>
      </header>

      <div className="flex flex-1 overflow-hidden">
        {/* Tools Sidebar (Thin) */}
        <aside className="w-14 bg-white border-r border-slate-200 flex flex-col items-center py-4 space-y-3 shrink-0 z-10 shadow-sm">
          <Button variant="ghost" size="icon" className="w-10 h-10 bg-blue-50 text-blue-600 rounded-xl"><MousePointer2 className="w-5 h-5" /></Button>
          <Button variant="ghost" size="icon" className="w-10 h-10 text-slate-500 hover:text-slate-800"><Hand className="w-5 h-5" /></Button>
          <div className="w-8 h-px bg-slate-200 my-1"></div>
          <Button variant="ghost" size="icon" className="w-10 h-10 text-slate-500 hover:text-slate-800"><Type className="w-5 h-5" /></Button>
          <Button variant="ghost" size="icon" className="w-10 h-10 text-slate-500 hover:text-slate-800"><ImageIcon className="w-5 h-5" /></Button>
          <Button variant="ghost" size="icon" className="w-10 h-10 text-slate-500 hover:text-slate-800"><Square className="w-5 h-5" /></Button>
          <Button variant="ghost" size="icon" className="w-10 h-10 text-slate-500 hover:text-slate-800"><Circle className="w-5 h-5" /></Button>
          <div className="w-8 h-px bg-slate-200 my-1"></div>
          <Button variant="ghost" size="icon" className="w-10 h-10 text-slate-500 hover:text-slate-800"><PenTool className="w-5 h-5" /></Button>
          <Button variant="ghost" size="icon" className="w-10 h-10 text-slate-500 hover:text-slate-800"><Highlighter className="w-5 h-5" /></Button>
          <Button variant="ghost" size="icon" className="w-10 h-10 text-slate-500 hover:text-slate-800"><StickyNote className="w-5 h-5" /></Button>
          <Button variant="ghost" size="icon" className="w-10 h-10 text-slate-500 hover:text-slate-800"><FileSignature className="w-5 h-5" /></Button>
        </aside>

        {/* Left Sidebar (Thumbnails) */}
        <aside className="w-56 bg-slate-50 border-r border-slate-200 flex flex-col shrink-0 hidden lg:flex">
          <div className="h-10 flex items-center px-4 font-medium text-xs text-slate-600 uppercase tracking-wider border-b border-slate-200">
            Pages
          </div>
          <div className="flex-1 overflow-y-auto p-3 space-y-4">
            {file ? (
              <div className="text-xs text-slate-500 text-center py-4">Thumbnails loading...</div>
            ) : (
              <div className="text-xs text-slate-500 text-center py-4">Upload a document to view pages.</div>
            )}
          </div>
        </aside>

        {/* Center Workspace (Canvas) */}
        <main className="flex-1 bg-[#e5e5f0] overflow-auto relative flex justify-center p-8">
           <PDFViewer file={file} scale={scale} />
        </main>

        {/* Right Properties Panel */}
        <aside className="w-64 bg-white border-l border-slate-200 flex flex-col shrink-0 hidden md:flex z-10 shadow-sm">
          <div className="h-10 flex items-center px-4 font-medium text-xs text-slate-600 uppercase tracking-wider border-b border-slate-200">
            Properties
          </div>
          <div className="flex-1 overflow-y-auto p-4 space-y-6">
            
            {/* Text Properties Section */}
            <div className="space-y-3">
              <h3 className="text-xs font-semibold text-slate-900">Text</h3>
              
              <div className="grid grid-cols-1 gap-2">
                <select className="w-full bg-slate-50 border border-slate-200 rounded text-sm px-2 py-1.5 outline-none focus:border-blue-500">
                  <option>Inter</option>
                  <option>Roboto</option>
                  <option>Times New Roman</option>
                </select>
              </div>

              <div className="grid grid-cols-2 gap-2">
                <div className="relative">
                  <select className="w-full bg-slate-50 border border-slate-200 rounded text-sm pl-2 pr-6 py-1.5 outline-none focus:border-blue-500 appearance-none">
                    <option>Regular</option>
                    <option>Medium</option>
                    <option>Bold</option>
                  </select>
                </div>
                <div className="flex items-center gap-1">
                  <input type="number" defaultValue="24" className="w-full bg-slate-50 border border-slate-200 rounded text-sm px-2 py-1.5 outline-none focus:border-blue-500" />
                </div>
              </div>

              <div className="flex items-center justify-between bg-slate-50 border border-slate-200 rounded p-1">
                <Button variant="ghost" size="sm" className="h-7 w-8 px-0 text-slate-700 bg-white shadow-sm rounded-sm"><Bold className="w-4 h-4" /></Button>
                <Button variant="ghost" size="sm" className="h-7 w-8 px-0 text-slate-500 hover:text-slate-700"><Italic className="w-4 h-4" /></Button>
                <Button variant="ghost" size="sm" className="h-7 w-8 px-0 text-slate-500 hover:text-slate-700"><Underline className="w-4 h-4" /></Button>
                <div className="w-px h-4 bg-slate-300 mx-1"></div>
                <Button variant="ghost" size="sm" className="h-7 w-8 px-0 text-slate-700 bg-white shadow-sm rounded-sm"><AlignLeft className="w-4 h-4" /></Button>
                <Button variant="ghost" size="sm" className="h-7 w-8 px-0 text-slate-500 hover:text-slate-700"><AlignCenter className="w-4 h-4" /></Button>
                <Button variant="ghost" size="sm" className="h-7 w-8 px-0 text-slate-500 hover:text-slate-700"><AlignRight className="w-4 h-4" /></Button>
              </div>
            </div>

            {/* Appearance Section */}
            <div className="space-y-3">
              <h3 className="text-xs font-semibold text-slate-900">Appearance</h3>
              
              <div className="flex items-center justify-between">
                <span className="text-sm text-slate-600">Fill</span>
                <div className="flex items-center gap-2">
                  <span className="text-xs uppercase text-slate-500">Hex</span>
                  <div className="w-16 h-7 rounded border border-slate-200 flex items-center justify-center text-xs font-medium">
                    #000000
                  </div>
                  <div className="w-6 h-6 rounded bg-black border border-slate-200"></div>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-sm text-slate-600">Opacity</span>
                <div className="flex items-center gap-2">
                  <input type="number" defaultValue="100" className="w-16 bg-slate-50 border border-slate-200 rounded text-sm px-2 py-1 outline-none text-center focus:border-blue-500" />
                  <span className="text-sm text-slate-500">%</span>
                </div>
              </div>
            </div>

          </div>
        </aside>
      </div>
    </div>
  );
}
