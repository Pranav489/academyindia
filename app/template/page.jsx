// Template 1 — Playful Doodle Heavy
import Navbar from "@/components/Common/Navbar";
import {
  BigBlobDoodles,
  DoodlePlus,
  DoodleStar,
  DoodleCircle,
  DoodleTriangle,
  DoodleBrain,
  DoodleAbacus,
  FloatingNumbers,
} from "@/components/SVGDoodles/MathDoodles";

/* ─── Hero ─────────────────────────────────────────────── */
function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-[#0D4F8A] via-[#1B75BB] to-[#A84498]">
      <BigBlobDoodles />
      <FloatingNumbers />

      {/* coloured blobs */}
      <div className="absolute top-0 right-0 w-[55%] h-[70%] rounded-bl-[60%] bg-gradient-to-br from-[#FBB040]/30 to-[#EE3124]/20 blur-sm" />
      <div className="absolute bottom-0 left-0 w-[40%] h-[50%] rounded-tr-[60%] bg-[#39B54A]/20 blur-sm" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 pt-24 pb-16 flex flex-col lg:flex-row items-center gap-12">
        {/* Text */}
        <div className="flex-1 text-center lg:text-left">
          {/* pill badge */}
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-white text-sm font-nunito font-700 mb-6">
            <span className="w-2 h-2 rounded-full bg-brand-yellow animate-pulse inline-block" />
            India's #1 Kids Math Academy
          </span>

          <h1 className="font-fredoka text-5xl sm:text-6xl lg:text-7xl text-white leading-tight mb-6">
            Make Your Child a{" "}
            <span className="relative inline-block">
              <span className="text-brand-yellow">Math Genius</span>
              {/* wavy underline */}
              <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 200 12" preserveAspectRatio="none">
                <path d="M0 8 Q25 2 50 8 Q75 14 100 8 Q125 2 150 8 Q175 14 200 8" stroke="#FBB040" strokeWidth="3" fill="none" strokeLinecap="round"/>
              </svg>
            </span>{" "}
            🚀
          </h1>

          <p className="font-nunito text-white/80 text-lg sm:text-xl max-w-xl mb-8 leading-relaxed">
            Abacus · Vedic Math · Rubik's Cube — fun-powered brain training for
            kids aged <strong className="text-white">6–14</strong> that builds
            confidence, speed & creativity.
          </p>

          <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
            <a href="#demo" className="px-8 py-4 rounded-full bg-brand-yellow text-[#0D4F8A] font-fredoka text-lg shadow-xl hover:scale-105 hover:shadow-2xl transition-all duration-200">
              Book Free Demo ✨
            </a>
            <a href="#courses" className="px-8 py-4 rounded-full glass text-white font-fredoka text-lg hover:scale-105 transition-all duration-200">
              Explore Courses →
            </a>
          </div>

          {/* stats row */}
          <div className="flex flex-wrap gap-8 justify-center lg:justify-start mt-12">
            {[["50,000+", "Students Trained"], ["200+", "Centres"], ["15+", "Years Experience"]].map(([val, lbl]) => (
              <div key={lbl} className="text-center lg:text-left">
                <p className="font-fredoka text-3xl text-brand-yellow">{val}</p>
                <p className="font-nunito text-white/70 text-sm">{lbl}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Illustration placeholder */}
        <div className="flex-1 flex justify-center lg:justify-end">
          <div className="relative w-72 h-72 md:w-96 md:h-96">
            {/* big pulsing circle */}
            <div className="absolute inset-0 rounded-full bg-white/10 animate-pulse" />
            <div className="absolute inset-4 rounded-full bg-white/10" />

            {/* Floating doodle elements */}
            <DoodleBrain color="#FBB040" size={90} className="absolute -top-6 -left-6 opacity-70 animate-float" />
            <DoodleAbacus color="#fff" size={75} className="absolute -bottom-4 -right-4 opacity-60 animate-float-slow" />
            <DoodleStar color="#EE3124" size={35} className="absolute top-8 right-0 opacity-80 animate-float-fast" />
            <DoodlePlus color="#39B54A" size={30} className="absolute bottom-12 left-0 opacity-70 animate-float" />

            {/* kid placeholder */}
            <div className="absolute inset-8 rounded-full bg-gradient-to-br from-brand-yellow/40 to-brand-red/40 flex items-center justify-center overflow-hidden border-4 border-white/30">
              <svg viewBox="0 0 160 200" className="w-full h-full opacity-80">
                {/* simple kid silhouette */}
                <circle cx="80" cy="50" r="32" fill="#FBB040" />
                <ellipse cx="80" cy="135" rx="45" ry="55" fill="#1B75BB" />
                <ellipse cx="55" cy="120" rx="15" ry="40" fill="#1B75BB" transform="rotate(-15 55 120)" />
                <ellipse cx="105" cy="120" rx="15" ry="40" fill="#1B75BB" transform="rotate(15 105 120)" />
                <ellipse cx="65" cy="185" rx="14" ry="20" fill="#0D4F8A" />
                <ellipse cx="95" cy="185" rx="14" ry="20" fill="#0D4F8A" />
                {/* face */}
                <circle cx="68" cy="46" r="5" fill="#fff" />
                <circle cx="92" cy="46" r="5" fill="#fff" />
                <circle cx="70" cy="47" r="2.5" fill="#333" />
                <circle cx="94" cy="47" r="2.5" fill="#333" />
                <path d="M70 62 Q80 70 90 62" stroke="#EE3124" strokeWidth="2.5" fill="none" strokeLinecap="round" />
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* bottom wave */}
      <svg className="absolute bottom-0 inset-x-0" viewBox="0 0 1440 80" preserveAspectRatio="none">
        <path d="M0 40 Q180 0 360 40 Q540 80 720 40 Q900 0 1080 40 Q1260 80 1440 40 L1440 80 L0 80Z" fill="white" />
      </svg>
    </section>
  );
}

/* ─── Stats ─────────────────────────────────────────────── */
function Stats() {
  const stats = [
    { icon: "🎓", val: "50,000+", lbl: "Students Trained", color: "#1B75BB" },
    { icon: "🏫", val: "200+", lbl: "Centres Across India", color: "#EE3124" },
    { icon: "⭐", val: "4.9/5", lbl: "Parent Rating", color: "#FBB040" },
    { icon: "🏆", val: "15+", lbl: "Years of Excellence", color: "#A84498" },
  ];
  return (
    <section className="relative bg-white py-16 overflow-hidden">
      <DoodlePlus color="#1B75BB" size={40} className="absolute top-8 left-8 opacity-10" />
      <DoodleStar color="#FBB040" size={35} className="absolute bottom-8 right-12 opacity-10" />

      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-wrap justify-center gap-12 md:gap-20">
          {stats.map(({ icon, val, lbl, color }) => (
            <div key={lbl} className="text-center group">
              <div
                className="w-20 h-20 rounded-full flex items-center justify-center text-3xl mx-auto mb-4 shadow-lg group-hover:scale-110 transition-transform"
                style={{ background: `${color}18` }}
              >
                {icon}
              </div>
              <p className="font-fredoka text-4xl" style={{ color }}>{val}</p>
              <p className="font-nunito text-gray-500 text-sm mt-1">{lbl}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Courses ────────────────────────────────────────────── */
function Courses() {
  const courses = [
    {
      title: "Abacus",
      emoji: "🧮",
      tagline: "Speed. Accuracy. Mental Power.",
      desc: "Master arithmetic 10× faster with the ancient abacus method. Kids develop photographic memory and lightning-fast calculation skills.",
      color: "#1B75BB",
      bg: "from-[#1B75BB]/10 to-[#5BB8F5]/10",
      blob: "60% 40% 60% 40% / 30% 60% 40% 70%",
      levels: ["Starter", "Bronze", "Silver", "Gold", "Diamond"],
    },
    {
      title: "Vedic Math",
      emoji: "📐",
      tagline: "Ancient Wisdom. Modern Speed.",
      desc: "16 sutras that make multiplication, division & algebra feel like magic. Vedic Math wires the brain for creative problem-solving.",
      color: "#A84498",
      bg: "from-[#A84498]/10 to-[#E040FB]/10",
      blob: "40% 60% 40% 60% / 60% 30% 70% 40%",
      levels: ["Foundation", "Intermediate", "Advanced"],
    },
    {
      title: "Rubik's Cube",
      emoji: "🎲",
      tagline: "Logic. Patience. Focus.",
      desc: "Beyond a toy — solving the cube builds spatial reasoning, patience, and algorithmic thinking loved by top universities worldwide.",
      color: "#EE3124",
      bg: "from-[#EE3124]/10 to-[#FF8A65]/10",
      blob: "50% 50% 30% 70% / 40% 60% 60% 40%",
      levels: ["Beginner", "Intermediate", "Speed Solving"],
    },
  ];

  return (
    <section id="courses" className="relative bg-white py-24 overflow-hidden">
      <FloatingNumbers />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-8">
        {/* heading */}
        <div className="text-center mb-20">
          <span className="font-fredoka text-brand-yellow text-lg">What We Teach</span>
          <h2 className="font-fredoka text-4xl sm:text-5xl lg:text-6xl text-gray-800 mt-2">
            Our <span className="gradient-text">Superpower</span> Courses
          </h2>
        </div>

        {/* fluid layout — alternating */}
        <div className="space-y-28">
          {courses.map((c, i) => (
            <div key={c.title} className={`flex flex-col ${i % 2 === 1 ? "lg:flex-row-reverse" : "lg:flex-row"} items-center gap-10 lg:gap-20`}>
              {/* visual blob */}
              <div className="flex-1 flex justify-center">
                <div
                  className={`relative w-64 h-64 md:w-80 md:h-80 bg-gradient-to-br ${c.bg} flex items-center justify-center`}
                  style={{ borderRadius: c.blob }}
                >
                  <span className="text-8xl animate-float" style={{ animationDelay: `${i}s` }}>{c.emoji}</span>
                  {/* floating mini doodles */}
                  <DoodleStar color={c.color} size={28} className="absolute -top-4 -right-4 opacity-60 animate-float-slow" />
                  <DoodlePlus color={c.color} size={22} className="absolute -bottom-3 -left-3 opacity-50 animate-float" />
                  <DoodleCircle color={c.color} size={60} className="absolute -top-8 -left-8 opacity-20 animate-spin-slow" />
                </div>
              </div>

              {/* text */}
              <div className="flex-1 text-center lg:text-left">
                <p className="font-fredoka text-lg mb-2" style={{ color: c.color }}>{c.tagline}</p>
                <h3 className="font-fredoka text-5xl md:text-6xl text-gray-800 mb-4">{c.title}</h3>
                <p className="font-nunito text-gray-500 text-lg leading-relaxed mb-6 max-w-lg">{c.desc}</p>

                {/* levels */}
                <div className="flex flex-wrap gap-2 justify-center lg:justify-start mb-8">
                  {c.levels.map((lv) => (
                    <span key={lv} className="px-3 py-1 rounded-full text-sm font-nunito font-700 text-white shadow-sm" style={{ background: c.color }}>{lv}</span>
                  ))}
                </div>

                <a
                  href="#demo"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-white font-fredoka text-lg shadow-lg hover:scale-105 transition-transform"
                  style={{ background: c.color }}
                >
                  Start {c.title} →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Why Choose Us ─────────────────────────────────────── */
function WhyUs() {
  const reasons = [
    { icon: "🧠", title: "Scientifically Proven", desc: "Methods backed by neuroscience that enhance both left and right brain development.", color: "#1B75BB" },
    { icon: "🎮", title: "Learning is Fun", desc: "Gamified lessons that kids actually look forward to attending every week.", color: "#EE3124" },
    { icon: "📊", title: "Measurable Progress", desc: "Regular assessments with digital report cards so parents track growth in real-time.", color: "#A84498" },
    { icon: "🏆", title: "Competition Ready", desc: "We prepare students for national & international Abacus and Vedic Math competitions.", color: "#FBB040" },
    { icon: "👩‍🏫", title: "Expert Trainers", desc: "Certified instructors with 5+ years of experience making every class engaging.", color: "#39B54A" },
    { icon: "🌍", title: "200+ Centres", desc: "Find a centre near you or join live online sessions from anywhere in India.", color: "#EE3124" },
  ];

  return (
    <section id="why" className="relative py-24 overflow-hidden bg-gradient-to-b from-white to-[#EBF5FF]">
      <DoodleTriangle color="#1B75BB" size={80} className="absolute top-12 right-8 opacity-10 animate-float-slow" />
      <DoodleBrain color="#A84498" size={90} className="absolute bottom-16 left-6 opacity-10 animate-float" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-8">
        <div className="text-center mb-16">
          <span className="font-fredoka text-brand-green text-lg">Why Parents Trust Us</span>
          <h2 className="font-fredoka text-4xl sm:text-5xl lg:text-6xl text-gray-800 mt-2">
            The iGenius <span className="gradient-text-warm">Difference</span>
          </h2>
        </div>

        <div className="relative">
          {/* big circle behind */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="w-[500px] h-[500px] rounded-full bg-brand-blue/5 hidden lg:block" />
          </div>

          {/* 6 items — free flow, no grid */}
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-12">
            {reasons.map((r, i) => (
              <div key={r.title} className="flex items-start gap-4 max-w-xs group" style={{ marginTop: i % 2 === 1 ? 32 : 0 }}>
                <div
                  className="flex-shrink-0 w-14 h-14 rounded-2xl flex items-center justify-center text-2xl shadow-md group-hover:scale-110 transition-transform"
                  style={{ background: `${r.color}18` }}
                >
                  {r.icon}
                </div>
                <div>
                  <h4 className="font-fredoka text-xl text-gray-800 mb-1">{r.title}</h4>
                  <p className="font-nunito text-gray-500 text-sm leading-relaxed">{r.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── Fun Learning ───────────────────────────────────────── */
function FunLearning() {
  return (
    <section className="relative py-24 overflow-hidden bg-gradient-to-br from-[#A84498] via-[#1B75BB] to-[#0D4F8A]">
      <BigBlobDoodles />
      <FloatingNumbers />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-8 text-center">
        <span className="font-fredoka text-brand-yellow text-lg">See the Magic Happen</span>
        <h2 className="font-fredoka text-4xl sm:text-5xl lg:text-6xl text-white mt-2 mb-4">
          Learning That Kids{" "}
          <span className="text-brand-yellow">Actually Love</span> 💛
        </h2>
        <p className="font-nunito text-white/70 text-lg max-w-xl mx-auto mb-12">
          Watch happy kids unlock their hidden potential through our activity-rich,
          energy-filled classes — online & offline.
        </p>

        {/* video placeholder */}
        <div className="relative max-w-3xl mx-auto">
          <div className="aspect-video rounded-3xl bg-gradient-to-br from-white/10 to-white/5 border-2 border-white/20 flex items-center justify-center overflow-hidden">
            <div className="text-center">
              <div className="w-20 h-20 rounded-full bg-brand-yellow flex items-center justify-center mx-auto mb-4 shadow-xl cursor-pointer hover:scale-110 transition-transform">
                <svg width="30" height="30" viewBox="0 0 30 30" fill="#0D4F8A">
                  <polygon points="10,5 25,15 10,25" />
                </svg>
              </div>
              <p className="font-fredoka text-white text-xl">Watch Our Kids in Action!</p>
              <p className="font-nunito text-white/50 text-sm mt-1">2 min highlight reel</p>
            </div>
          </div>
          {/* floating emoji badges */}
          <div className="absolute -top-5 -left-5 w-14 h-14 rounded-full bg-brand-yellow flex items-center justify-center text-2xl shadow-xl animate-float">🏆</div>
          <div className="absolute -bottom-5 -right-5 w-14 h-14 rounded-full bg-brand-red flex items-center justify-center text-2xl shadow-xl animate-float-slow">🧠</div>
        </div>
      </div>

      {/* bottom wave */}
      <svg className="absolute bottom-0 inset-x-0" viewBox="0 0 1440 80" preserveAspectRatio="none">
        <path d="M0 40 Q180 80 360 40 Q540 0 720 40 Q900 80 1080 40 Q1260 0 1440 40 L1440 80 L0 80Z" fill="white" />
      </svg>
    </section>
  );
}

/* ─── Testimonials ───────────────────────────────────────── */
function Testimonials() {
  const reviews = [
    { name: "Priya Sharma", role: "Parent, Pune", text: "My daughter's confidence in maths skyrocketed in just 3 months! She went from dreading maths to scoring 98%.", rating: 5, avatar: "👩" },
    { name: "Rahul Mehta", role: "Parent, Mumbai", text: "The abacus programme is phenomenal. My son can now do 4-digit multiplication in seconds. Absolutely blown away.", rating: 5, avatar: "👨" },
    { name: "Sunita Rao", role: "Parent, Hyderabad", text: "iGenius isn't just a class — it's a transformation. My twins are now competing at the national level!", rating: 5, avatar: "👩‍💼" },
    { name: "Vikram Nair", role: "Parent, Bangalore", text: "The trainers are so patient and encouraging. My shy kid now presents solutions confidently in school.", rating: 5, avatar: "👨‍💼" },
  ];

  return (
    <section className="relative py-24 bg-white overflow-hidden">
      <DoodleStar color="#FBB040" size={60} className="absolute top-10 left-10 opacity-10 animate-float" />
      <DoodleCircle color="#1B75BB" size={90} className="absolute bottom-10 right-10 opacity-10 animate-spin-slow" />

      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="text-center mb-16">
          <span className="font-fredoka text-brand-purple text-lg">Real Stories</span>
          <h2 className="font-fredoka text-4xl sm:text-5xl lg:text-6xl text-gray-800 mt-2">
            Parents Who <span className="gradient-text">Love Us</span> ❤️
          </h2>
        </div>

        {/* horizontal scroll on mobile, flowing on desktop */}
        <div className="flex gap-6 overflow-x-auto pb-4 no-scrollbar lg:flex-wrap lg:justify-center">
          {reviews.map((r, i) => (
            <div
              key={r.name}
              className="flex-shrink-0 w-72 lg:w-80 p-6 rounded-3xl bg-gradient-to-br from-gray-50 to-white border border-gray-100 shadow-sm hover:shadow-lg transition-shadow"
              style={{ marginTop: i % 2 === 1 ? 24 : 0 }}
            >
              {/* stars */}
              <div className="flex gap-1 mb-4">
                {Array(r.rating).fill(0).map((_, si) => (
                  <span key={si} className="text-brand-yellow text-xl">★</span>
                ))}
              </div>
              <p className="font-nunito text-gray-600 text-sm leading-relaxed mb-5">"{r.text}"</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-brand-blue/10 flex items-center justify-center text-xl">{r.avatar}</div>
                <div>
                  <p className="font-nunito font-800 text-gray-800 text-sm">{r.name}</p>
                  <p className="font-nunito text-gray-400 text-xs">{r.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── CTA ────────────────────────────────────────────────── */
function CTA() {
  return (
    <section id="demo" className="relative py-24 overflow-hidden bg-gradient-to-br from-[#FBB040] via-[#EE3124] to-[#A84498]">
      <BigBlobDoodles />
      <FloatingNumbers />

      <div className="relative z-10 text-center px-4">
        <h2 className="font-fredoka text-4xl sm:text-5xl lg:text-7xl text-white mb-4 leading-tight">
          Give Your Child a<br />
          <span className="text-white drop-shadow-lg">Smarter Future Today</span> 🌟
        </h2>
        <p className="font-nunito text-white/80 text-xl max-w-lg mx-auto mb-10">
          Join 50,000+ students already on their genius journey. First class is completely FREE!
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <a href="#" className="px-10 py-5 rounded-full bg-white text-brand-red font-fredoka text-xl shadow-2xl hover:scale-105 transition-transform">
            Book Free Demo Class 🚀
          </a>
          <a href="tel:+911234567890" className="px-10 py-5 rounded-full glass text-white font-fredoka text-xl hover:scale-105 transition-transform">
            📞 Call Us Now
          </a>
        </div>
      </div>
    </section>
  );
}

/* ─── Footer ─────────────────────────────────────────────── */
function Footer() {
  return (
    <footer className="bg-[#0D2A4A] text-white py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between gap-10 mb-12">
          <div className="max-w-xs">
            <p className="font-fredoka text-3xl text-brand-yellow mb-3">iGenius</p>
            <p className="font-nunito text-white/60 text-sm leading-relaxed">
              India's leading Abacus & Mental Math Academy helping kids aged 6–14 unleash their inner genius.
            </p>
            <p className="font-nunito text-white/40 text-xs mt-4 italic">"Work smarter, not harder."</p>
          </div>

          {[
            { heading: "Courses", links: ["Abacus", "Vedic Math", "Rubik's Cube", "Mental Math"] },
            { heading: "Company", links: ["About Us", "Franchise", "Careers", "Blog"] },
            { heading: "Support", links: ["Contact", "FAQs", "Locate Centre", "Online Classes"] },
          ].map((col) => (
            <div key={col.heading}>
              <p className="font-fredoka text-lg text-brand-yellow mb-4">{col.heading}</p>
              <ul className="space-y-2">
                {col.links.map((l) => (
                  <li key={l}><a href="#" className="font-nunito text-white/60 text-sm hover:text-white transition-colors">{l}</a></li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="font-nunito text-white/40 text-xs">© 2024 iGenius India. All rights reserved.</p>
          <div className="flex gap-4">
            {["Privacy Policy", "Terms of Use", "Refund Policy"].map((t) => (
              <a key={t} href="#" className="font-nunito text-white/40 text-xs hover:text-white/70">{t}</a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

/* ─── Page ───────────────────────────────────────────────── */
export default function Template1() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Stats />
      <Courses />
      <WhyUs />
      <FunLearning />
      <Testimonials />
      <CTA />
      <Footer />
    </main>
  );
}
