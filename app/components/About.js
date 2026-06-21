// app/components/About.js
export default function About() {
  return (
    <section className="text-center py-20 px-6">
      <p className="text-sm tracking-[0.3em] text-cyan-600 uppercase mb-3">
        About Me
      </p>
      <h2 className="text-3xl font-bold mb-6">เกี่ยวกับผม</h2>

      <div className="max-w-xl mx-auto bg-purple-50 border border-purple-100 rounded-2xl px-8 py-6">
        <p className="text-base text-gray-700 leading-relaxed">
          ผมเป็นนักศึกษา วิทยาลัยพาณิชยการธนบุรี
          <br />
          ระดับ ป.ตรี
        </p>
      </div>
    </section>
  );
}