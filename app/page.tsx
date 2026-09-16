/**
 * A launcher, nothing more: every game lives on its own domain and this page
 * links out. Add a row here when a new game ships.
 */
const GAMES: {
  name: string;
  tagline: string;
  href: string;
  color: string;
  fg?: string;
}[] = [
  {
    name: "Atlasso",
    tagline: "Balance the world on a scale",
    href: "https://atlasso.vercel.app",
    color: "#f9c74f",
    fg: "#1a1a1a",
  },
  {
    name: "VWL DRP",
    tagline: "A daily word game",
    href: "https://vwldrp.com",
    color: "#277da1",
  },
  {
    name: "Oroboro",
    tagline: "A game of circular logic",
    href: "https://www.playoroboro.com",
    color: "#43aa8b",
  },
  {
    name: "Heatspell",
    tagline: "A daily spelling game",
    href: "https://playheatspell.com",
    color: "#f94144",
  },
  {
    name: "Lacuno",
    tagline: "Fill the gaps in the phrase",
    href: "https://lacuno.vercel.app",
    color: "#577590",
  },
  {
    name: "Zumma",
    tagline: "Spend your numbers, land on the goal",
    href: "https://zumma.vercel.app",
    color: "#f3722c",
  },
];

export default function Home() {
  return (
    <div
      style={{
        minHeight: "100dvh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: 40,
        padding: "48px 20px",
      }}
    >
      <header style={{ textAlign: "center" }}>
        <h1
          style={{
            fontWeight: 900,
            fontSize: "2.5rem",
            letterSpacing: "-0.03em",
            textTransform: "uppercase",
          }}
        >
          Games
        </h1>
        <p style={{ marginTop: 4, fontWeight: 500, opacity: 0.7 }}>
          One a day. No accounts, no ads.
        </p>
      </header>

      <main
        style={{
          display: "flex",
          flexDirection: "column",
          gap: 20,
          width: "min(420px, 90vw)",
        }}
      >
        {GAMES.map((game) => (
          <a key={game.name} href={game.href} style={{ textDecoration: "none" }}>
            <span
              style={{
                display: "block",
                border: "2px solid var(--ink)",
                boxShadow: "4px 4px 0 0 var(--ink)",
                background: game.color,
                color: game.fg ?? "#fff",
                padding: "14px 20px",
              }}
            >
              <span
                style={{
                  display: "block",
                  fontWeight: 900,
                  fontSize: "1.25rem",
                  textTransform: "uppercase",
                  letterSpacing: "-0.02em",
                }}
              >
                {game.name}
              </span>
              <span style={{ display: "block", fontSize: "0.85rem", fontWeight: 500 }}>
                {game.tagline}
              </span>
            </span>
          </a>
        ))}
      </main>
    </div>
  );
}
