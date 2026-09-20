// Designed placeholder previews, shown until you add real screenshots
// to public/images/. Each one hints at what the project is.

const bars = (xs, base, w, heights, fill, gap = 0) =>
  heights.map((h, i) => (
    <rect key={i} className="art-bar" x={xs + i * (w + gap)} y={base - h} width={w} height={h} rx="3" fill={fill}
      style={{ "--i": i }} />
  ));

function Frame({ children, id, c1, c2, h = 240 }) {
  return (
    <svg viewBox={`0 0 400 ${h}`} preserveAspectRatio="xMidYMid slice" className="art" role="img" aria-hidden="true">
      <defs>
        <linearGradient id={`bg-${id}`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor={c1} />
          <stop offset="1" stopColor={c2} />
        </linearGradient>
      </defs>
      <rect width="400" height={h} fill={`url(#bg-${id})`} />
      {children}
    </svg>
  );
}

function Coffee() {
  return (
    <Frame id="coffee" c1="#2a1d10" c2="#0d1a12">
      {[0, 1, 2].map((i) => (
        <g key={i}>
          <rect x={22 + i * 84} y="20" width="74" height="42" rx="8" fill="#ffffff" opacity=".07" />
          <rect x={32 + i * 84} y="30" width="26" height="5" rx="2.5" fill="#ffc857" opacity=".7" />
          <rect x={32 + i * 84} y="42" width="46" height="10" rx="3" fill="#fff" opacity=".85" />
        </g>
      ))}
      <rect x="22" y="76" width="232" height="140" rx="10" fill="#fff" opacity=".05" />
      {bars(38, 202, 16, [40, 62, 84, 108, 96, 120, 78, 56, 44, 34], "#ffc857", 6)}
      <rect x="270" y="20" width="108" height="196" rx="10" fill="#fff" opacity=".05" />
      <circle cx="324" cy="98" r="34" fill="none" stroke="#ff7a59" strokeWidth="16" strokeDasharray="90 124" />
      <circle cx="324" cy="98" r="34" fill="none" stroke="#ffc857" strokeWidth="16" strokeDasharray="70 144" strokeDashoffset="-92" />
      <circle cx="324" cy="98" r="34" fill="none" stroke="#34e3a0" strokeWidth="16" strokeDasharray="40 174" strokeDashoffset="-166" />
      {[0, 1, 2].map((i) => (
        <g key={i}>
          <circle cx="290" cy={158 + i * 17} r="4" fill={["#ff7a59", "#ffc857", "#34e3a0"][i]} />
          <rect x="300" y={155 + i * 17} width={56 - i * 10} height="6" rx="3" fill="#fff" opacity=".3" />
        </g>
      ))}
    </Frame>
  );
}

function Sentiment() {
  const feed = [["#34e3a0", 170], ["#ff7a59", 140], ["#93b0a1", 190], ["#34e3a0", 120]];
  return (
    <Frame id="sentiment" c1="#07281c" c2="#0b1d2b">
      <path d="M40 150 A80 80 0 0 1 200 150" fill="none" stroke="#fff" strokeOpacity=".1" strokeWidth="18" strokeLinecap="round" />
      <path d="M40 150 A80 80 0 0 1 176 94" fill="none" stroke="#34e3a0" strokeWidth="18" strokeLinecap="round" />
      <text x="120" y="142" textAnchor="middle" fontSize="30" fontWeight="700" fill="#fff" fontFamily="Space Grotesk, sans-serif">72%</text>
      <text x="120" y="164" textAnchor="middle" fontSize="11" fill="#93b0a1" fontFamily="Manrope, sans-serif">positive</text>
      {[["#34e3a0", 72], ["#93b0a1", 18], ["#ff7a59", 10]].map(([c, w], i) => (
        <g key={i}>
          <rect x="40" y={186 + i * 15} width="160" height="7" rx="3.5" fill="#fff" opacity=".08" />
          <rect x="40" y={186 + i * 15} width={w * 1.6} height="7" rx="3.5" fill={c} />
        </g>
      ))}
      {feed.map(([c, w], i) => (
        <g key={i}>
          <rect x="228" y={26 + i * 52} width="152" height="42" rx="9" fill="#fff" opacity=".06" />
          <circle cx="244" cy={47 + i * 52} r="6" fill={c} />
          <rect x="258" y={38 + i * 52} width={w * 0.6} height="6" rx="3" fill="#fff" opacity=".7" />
          <rect x="258" y={51 + i * 52} width={w * 0.42} height="5" rx="2.5" fill="#fff" opacity=".28" />
        </g>
      ))}
    </Frame>
  );
}

function Pulse() {
  return (
    <Frame id="pulse" c1="#06171f" c2="#120c2b">
      {[0, 1, 2, 3].map((i) => (
        <g key={i}>
          <rect x={20 + i * 92} y="18" width="84" height="44" rx="8" fill="#fff" opacity=".07" />
          <rect x={30 + i * 92} y="28" width="30" height="5" rx="2.5" fill={["#38d5f5", "#a78bfa", "#34e3a0", "#ff7a59"][i]} />
          <rect x={30 + i * 92} y="40" width="48" height="10" rx="3" fill="#fff" opacity=".85" />
        </g>
      ))}
      <rect x="20" y="76" width="250" height="144" rx="10" fill="#fff" opacity=".05" />
      <defs>
        <linearGradient id="pulse-area" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#38d5f5" stopOpacity=".45" />
          <stop offset="1" stopColor="#38d5f5" stopOpacity="0" />
        </linearGradient>
      </defs>
      <path d="M34 190 L70 168 L106 176 L142 140 L178 152 L214 112 L256 96 L256 208 L34 208 Z" fill="url(#pulse-area)" />
      <path className="art-line" d="M34 190 L70 168 L106 176 L142 140 L178 152 L214 112 L256 96" fill="none" stroke="#38d5f5" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
      <rect x="286" y="76" width="94" height="144" rx="10" fill="#fff" opacity=".05" />
      {[0, 1, 2, 3].map((i) => (
        <g key={i}>
          <rect x="298" y={94 + i * 30} width={[64, 48, 36, 24][i]} height="8" rx="4" fill={["#38d5f5", "#a78bfa", "#34e3a0", "#ff7a59"][i]} />
          <rect x="298" y={108 + i * 30} width="70" height="4" rx="2" fill="#fff" opacity=".16" />
        </g>
      ))}
    </Frame>
  );
}

function Nexora() {
  const cols = [["#a78bfa", [46, 34, 40]], ["#38d5f5", [40, 50]], ["#34e3a0", [36, 44, 30]]];
  return (
    <Frame id="nexora" c1="#150f2b" c2="#0b1d15">
      <rect x="16" y="16" width="58" height="208" rx="10" fill="#fff" opacity=".05" />
      {[0, 1, 2, 3].map((i) => (
        <rect key={i} x="28" y={32 + i * 26} width="34" height="8" rx="4" fill="#fff" opacity={i === 0 ? 0.7 : 0.2} />
      ))}
      {cols.map(([c, cards], ci) => (
        <g key={ci}>
          <rect x={90 + ci * 100} y="16" width="92" height="6" rx="3" fill={c} />
          {cards.reduce((acc, h, k) => {
            const y = acc.y;
            acc.nodes.push(
              <g key={k}>
                <rect x={90 + ci * 100} y={y} width="92" height={h} rx="8" fill="#fff" opacity=".07" />
                <rect x={100 + ci * 100} y={y + 10} width="54" height="6" rx="3" fill="#fff" opacity=".65" />
                <rect x={100 + ci * 100} y={y + 22} width="36" height="4" rx="2" fill="#fff" opacity=".25" />
              </g>
            );
            acc.y += h + 10;
            return acc;
          }, { y: 32, nodes: [] }).nodes}
        </g>
      ))}
      <circle cx="120" cy="200" r="16" fill="none" stroke="#fff" strokeOpacity=".1" strokeWidth="7" />
      <circle cx="120" cy="200" r="16" fill="none" stroke="#a78bfa" strokeWidth="7" strokeDasharray="66 100" strokeLinecap="round" transform="rotate(-90 120 200)" />
      <rect x="146" y="188" width="90" height="8" rx="4" fill="#fff" opacity=".5" />
      <rect x="146" y="204" width="60" height="5" rx="2.5" fill="#fff" opacity=".2" />
    </Frame>
  );
}


function Bookstore() {
  const mono = "ui-monospace, Menlo, Consolas, monospace";
  const tables = [
    { x: 18, name: "Books", color: "#60a5fa", rows: ["Book_ID", "Title", "Genre", "Price"], keys: [0] },
    { x: 150, name: "Orders", color: "#a78bfa", rows: ["Order_ID", "Customer_ID", "Book_ID", "Quantity"], keys: [0, 1, 2] },
    { x: 282, name: "Customers", color: "#34e3a0", rows: ["Customer_ID", "Name", "City", "Country"], keys: [0] },
  ];
  return (
    <Frame id="bookstore" c1="#08172e" c2="#0a2226" h={178}>
      <path className="art-line" d="M150 80 C134 80 134 46 118 46" fill="none" stroke="#60a5fa" strokeWidth="2" strokeLinecap="round" />
      <path className="art-line" d="M250 63 C266 63 266 46 282 46" fill="none" stroke="#34e3a0" strokeWidth="2" strokeLinecap="round" />
      {tables.map((t) => (
        <g key={t.name}>
          <rect x={t.x} y="14" width="100" height="92" rx="9" fill="#fff" opacity=".07" />
          <path d={`M${t.x} 36 V23 a9 9 0 0 1 9 -9 H${t.x + 91} a9 9 0 0 1 9 9 V36 Z`} fill={t.color} />
          <text x={t.x + 10} y="29" fontSize="11" fontWeight="700" fill="#04110b" fontFamily="Space Grotesk, sans-serif">{t.name}</text>
          {t.rows.map((r, i) => (
            <g key={r}>
              <circle cx={t.x + 11} cy={46 + i * 17} r="2.6" fill={t.keys.includes(i) ? "#ffc857" : "#fff"} opacity={t.keys.includes(i) ? 1 : 0.3} />
              <text x={t.x + 20} y={49 + i * 17} fontSize="9" fill="#fff" opacity=".8" fontFamily={mono}>{r}</text>
            </g>
          ))}
        </g>
      ))}
      <rect x="18" y="118" width="364" height="48" rx="9" fill="#000" opacity=".35" />
      <text fontSize="9.5" fontFamily={mono} fill="#fff">
        <tspan x="30" y="133" fill="#60a5fa">SELECT</tspan><tspan> b.genre, </tspan><tspan fill="#ffc857">SUM</tspan><tspan>(o.quantity)</tspan>
        <tspan x="30" y="145" fill="#60a5fa">FROM</tspan><tspan> orders o </tspan><tspan fill="#60a5fa">JOIN</tspan><tspan> books b</tspan>
        <tspan x="30" y="157" fill="#60a5fa">GROUP BY</tspan><tspan> b.genre;</tspan>
      </text>
    </Frame>
  );
}

const arts = { bookstore: Bookstore, coffee: Coffee, sentiment: Sentiment, pulse: Pulse, nexora: Nexora };

export default function ProjectArt({ id }) {
  const Art = arts[id] || Coffee;
  return <Art />;
}

export function PortraitFallback() {
  return (
    <svg viewBox="0 0 200 200" preserveAspectRatio="xMidYMid slice" className="art" role="img" aria-label="Aqsa">
      <defs>
        <linearGradient id="pf" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#0f3b2a" />
          <stop offset="1" stopColor="#1a1440" />
        </linearGradient>
        <linearGradient id="pf-t" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#34e3a0" />
          <stop offset=".6" stopColor="#38d5f5" />
          <stop offset="1" stopColor="#a78bfa" />
        </linearGradient>
      </defs>
      <rect width="200" height="200" fill="url(#pf)" />
      <text x="100" y="128" textAnchor="middle" fontSize="96" fontWeight="700" fill="url(#pf-t)" fontFamily="Space Grotesk, sans-serif">A</text>
    </svg>
  );
}
