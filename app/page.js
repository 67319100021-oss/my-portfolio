export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-slate-900 via-slate-950 to-blue-950 px-4 text-center">
      
      {/* Avatar */}
      <div className="text-8xl mb-6 hover:scale-105 hover:opacity-90 transition-all duration-300">🙋🏻‍♂️</div>
      
      {/* ชื่อ - เปลี่ยนเป็น text-white และใช้ font-bold */}
      <h1 className="text-5xl md:text-6xl font-bold text-white mb-5 transition-all duration-300 tracking-tight">
        Sretthakit Rangabrok
      </h1>
      
      {/* Tagline - เปลี่ยนเป็นสีขาวโปร่งแสงดูแพง */}
      <p className="text-xl md:text-2xl text-slate-300/80 mb-8 font-medium">
        Graphic Design • Video Editor — Bangkok
      </p>
      
      {/* 2 ปุ่ม */}
      <div className="flex gap-6">
        <button className="px-8 py-3 bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold rounded-full shadow-lg shadow-cyan-500/20 transition-all duration-200 active:scale-95 hover:scale-105">
          ดูผลงาน (Projects)
        </button>
  
        {/* ปุ่ม Contact - เปลี่ยนเป็นสไตล์โปร่งแสงบนพื้นหลังมืด */}
        <button className="px-8 py-3 bg-white/5 hover:bg-white/10 text-white font-medium rounded-full border border-white/10 transition-all duration-200 active:scale-95 hover:scale-105">
          ติดต่อฉัน (Contact)
        </button>
      </div>

    </main>
  );
}