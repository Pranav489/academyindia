export function FloatingNumbers() {
  const items = [
    { sym: "1", color: "#1B75BB", top: "10%", left: "6%" },
    { sym: "π", color: "#A84498", top: "22%", left: "88%" },
    { sym: "∑", color: "#EE3124", top: "55%", left: "4%" },
    { sym: "√", color: "#39B54A", top: "70%", left: "91%" },
    { sym: "∞", color: "#FBB040", top: "38%", left: "92%" },
    { sym: "Δ", color: "#1B75BB", top: "80%", left: "7%" },
    { sym: "9", color: "#A84498", top: "15%", left: "50%" },
    { sym: "÷", color: "#EE3124", top: "90%", left: "50%" },
  ];
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none select-none">
      {items.map((it, i) => (
        <span
          key={i}
          className="absolute font-fredoka text-5xl md:text-7xl opacity-[0.08] animate-float"
          style={{ top: it.top, left: it.left, color: it.color, animationDelay: `${i * 0.8}s` }}
        >
          {it.sym}
        </span>
      ))}
    </div>
  );
}

export function DoodlePlus({ color = "#1B75BB", size = 50, className = "" }) {
  return (
    <svg className={className} width={size} height={size} viewBox="0 0 50 50">
      <path d="M20 2 L30 2 L30 20 L48 20 L48 30 L30 30 L30 48 L20 48 L20 30 L2 30 L2 20 L20 20 Z" fill={color} />
    </svg>
  );
}

export function DoodleStar({ color = "#FBB040", size = 40, className = "" }) {
  return (
    <svg className={className} width={size} height={size} viewBox="0 0 50 50">
      <polygon points="25,3 31,18 48,18 34,28 39,45 25,35 11,45 16,28 2,18 19,18" fill={color} />
    </svg>
  );
}

export function DoodleCircle({ color = "#A84498", size = 70, className = "" }) {
  return (
    <svg className={className} width={size} height={size} viewBox="0 0 70 70">
      <circle cx="35" cy="35" r="30" stroke={color} strokeWidth="3" fill="none" strokeDasharray="10 5" />
    </svg>
  );
}

export function DoodleTriangle({ color = "#39B54A", size = 60, className = "" }) {
  return (
    <svg className={className} width={size} height={size} viewBox="0 0 60 55">
      <polygon points="30,3 57,52 3,52" stroke={color} strokeWidth="3" fill="none" strokeLinejoin="round" />
    </svg>
  );
}

export function DoodleBrain({ color = "#A84498", size = 80, className = "" }) {
  return (
    <svg className={className} width={size} height={size} viewBox="0 0 80 70">
      <path d="M40 60 C20 60 5 48 5 35 C5 22 15 15 25 15 C25 8 32 3 40 3 C48 3 55 8 55 15 C65 15 75 22 75 35 C75 48 60 60 40 60Z" stroke={color} strokeWidth="3" fill="none" />
      <path d="M40 15 C40 28 28 30 24 36" stroke={color} strokeWidth="2" fill="none" />
      <path d="M40 15 C40 28 52 30 56 36" stroke={color} strokeWidth="2" fill="none" />
      <path d="M24 36 C28 44 35 46 40 42" stroke={color} strokeWidth="2" fill="none" />
      <path d="M56 36 C52 44 45 46 40 42" stroke={color} strokeWidth="2" fill="none" />
    </svg>
  );
}

export function DoodleAbacus({ color = "#1B75BB", size = 80, className = "" }) {
  const rows = [18, 32, 46, 60];
  const bColors = ["#EE3124", "#FBB040", "#39B54A", "#A84498"];
  return (
    <svg className={className} width={size} height={size} viewBox="0 0 80 80">
      <rect x="5" y="5" width="70" height="70" rx="6" stroke={color} strokeWidth="2.5" fill="none" />
      <line x1="5" y1="13" x2="75" y2="13" stroke={color} strokeWidth="2" />
      {rows.map((y, ri) => (
        <g key={ri}>
          <line x1="12" y1={y} x2="68" y2={y} stroke={color} strokeWidth="2" />
          {[22, 36, 50].map((x) => (
            <circle key={x} cx={x} cy={y} r="5" fill={bColors[ri]} />
          ))}
        </g>
      ))}
    </svg>
  );
}

export function BigBlobDoodles() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* concentric rings top-right */}
      <svg className="absolute -top-24 -right-24 opacity-10 animate-spin-slow" width="450" height="450" viewBox="0 0 450 450">
        <circle cx="225" cy="225" r="200" stroke="#1B75BB" strokeWidth="2" fill="none" strokeDasharray="22 11" />
        <circle cx="225" cy="225" r="155" stroke="#A84498" strokeWidth="2" fill="none" strokeDasharray="16 8" />
        <circle cx="225" cy="225" r="110" stroke="#EE3124" strokeWidth="2" fill="none" strokeDasharray="10 5" />
      </svg>

      {/* concentric rings bottom-left */}
      <svg className="absolute -bottom-24 -left-24 opacity-10 animate-spin-slow" style={{ animationDirection: "reverse" }} width="350" height="350" viewBox="0 0 350 350">
        <circle cx="175" cy="175" r="150" stroke="#FBB040" strokeWidth="2" fill="none" strokeDasharray="18 9" />
        <circle cx="175" cy="175" r="100" stroke="#39B54A" strokeWidth="2" fill="none" strokeDasharray="12 6" />
      </svg>

      {/* mid-left plus */}
      <svg className="absolute top-[40%] left-[2%] opacity-15 animate-float" width="55" height="55" viewBox="0 0 50 50">
        <path d="M20 2 L30 2 L30 20 L48 20 L48 30 L30 30 L30 48 L20 48 L20 30 L2 30 L2 20 L20 20Z" fill="#1B75BB" />
      </svg>

      {/* mid-right star */}
      <svg className="absolute top-[55%] right-[3%] opacity-15 animate-float-slow" width="45" height="45" viewBox="0 0 50 50">
        <polygon points="25,3 31,18 48,18 34,28 39,45 25,35 11,45 16,28 2,18 19,18" fill="#FBB040" />
      </svg>

      {/* bottom dots grid */}
      <svg className="absolute bottom-[12%] left-[30%] opacity-10" width="120" height="120" viewBox="0 0 120 120">
        {[0,1,2,3].map(row => [0,1,2,3].map(col => (
          <circle key={`${row}-${col}`} cx={15 + col * 30} cy={15 + row * 30} r="5" fill="#1B75BB" />
        )))}
      </svg>
    </div>
  );
}
