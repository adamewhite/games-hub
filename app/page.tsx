import Link from "next/link";

/**
 * Games in the hub. Entries with an `href` under this domain are served as
 * microfrontends (add them to microfrontends.json); `external: true` entries
 * still live on their own domains until they join the group.
 */
const GAMES: {
  name: string;
  tagline: string;
  href: string;
  color: string;
  fg?: string;
  external?: boolean;
}[] = [
  {
    name: "Atlasso",
    tagline: "Balance the world on a scale",
    href: "/atlasso",
    color: "#f9c74f",
    fg: "#1a1a1a",
  },
  {
    name: "VWLDRP",
    tagline: "Every vowel has dropped",
    href: "https://vwldrp.com",
    color: "#277da1",
    external: true,
  },
  {
    name: "Heatspell",
    tagline: "Spelling under pressure",
    href: "https://playheatspell.com",
    color: "#f94144",
    external: true,
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
        {GAMES.map((game) => {
          const inner = (
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
          );
          return game.external ? (
            <a key={game.name} href={game.href} style={{ textDecoration: "none" }}>
              {inner}
            </a>
          ) : (
            <Link key={game.name} href={game.href} style={{ textDecoration: "none" }}>
              {inner}
            </Link>
          );
        })}
      </main>
    </div>
  );
}
