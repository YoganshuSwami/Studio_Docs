export default function EditorLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="h-screen w-screen overflow-hidden bg-slate-100 flex flex-col font-sans">
      {children}
    </div>
  );
}
