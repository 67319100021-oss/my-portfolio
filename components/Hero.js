export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-? to-?">
      
      {/* Avatar */}
      <div className="text-8xl mb-6 hover:scale-105 hover:opacity-90">🧑🏻</div>
      
      {/* ชื่อ */}
      <h1 className="text-7xl font-center text-black mb-5 hover:scale-90 hover:opacity-50">
   Sretthakit Rangabrok
      </h1>
      
      {/* Tagline */}
      <p className="text-2xl text-black/80 mb-8">
        Graphic design . Video editor - Bankok
      </p>
      
      {/* 2 ปุ่ม */}
      <div className="flex gap-8">
      <button className="px-8 py-3 bg-cyan-500 hover:bg-cyan-400 text-slate-900 font-semibold rounded-full shadow-lg shadow-cyan-500/20 transition-all duration-200 active:scale-95 hover:scale-105 hover:opacity-90">
        ดูผลงาน (Projects)
      </button>
  
      {/* ปุ่ม Contact (รอง - โปร่งแสงเรียบหรู) */}
      <button className="px-8 py-3 24px bg-black/5 hover:bg-black/10 text-black font-medium rounded-full border border-black/10 transition-all duration-200 active:scale-95 hover:scale-105 hover:opacity-90">
        ติดต่อฉัน (Contact)
      </button>
      </div>

    </main>
  );
}