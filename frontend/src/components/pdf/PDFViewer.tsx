"use client";

import { useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import 'react-pdf/dist/esm/Page/TextLayer.css';

// Set up the worker for react-pdf
pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

interface PDFViewerProps {
  file: File | string | null;
  scale: number;
}

export function PDFViewer({ file, scale }: PDFViewerProps) {
  const [numPages, setNumPages] = useState<number>(0);

  function onDocumentLoadSuccess({ numPages }: { numPages: number }) {
    setNumPages(numPages);
  }

  if (!file) {
    return (
      <div className="flex flex-col items-center justify-center h-full text-slate-400 p-8 text-center border-2 border-dashed border-slate-300 rounded-xl m-8">
        <p className="text-lg font-medium mb-2">No PDF Selected</p>
        <p className="text-sm">Please upload a PDF document to begin editing.</p>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center gap-8 py-8 w-full">
      <Document
        file={file}
        onLoadSuccess={onDocumentLoadSuccess}
        className="flex flex-col gap-8 items-center"
        loading={<div className="animate-pulse bg-slate-200 w-[800px] h-[1131px] rounded"></div>}
      >
        {Array.from(new Array(numPages), (el, index) => (
          <div key={`page_${index + 1}`} className="shadow-xl bg-white relative transition-transform duration-200" style={{ transform: `scale(${scale})`, transformOrigin: 'top center' }}>
            <Page
              pageNumber={index + 1}
              renderTextLayer={true}
              renderAnnotationLayer={true}
              scale={1}
              className="pointer-events-none" // We use our own overlay for events
            />
            {/* Interactive Overlay Layer for Custom Editor Tools */}
            <div className="absolute inset-0 z-10 cursor-crosshair"></div>
          </div>
        ))}
      </Document>
    </div>
  );
}
