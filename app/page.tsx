/**
 * A launcher, nothing more: every game lives on its own domain and this page
 * links out, showing each game's own og image. Add a row here when a new
 * game ships.
 */
const GAMES: { name: string; tagline: string; href: string; image: string }[] = [
  {
    name: "Atlasso",
    tagline: "Balance the world on a scale",
    href: "https://atlasso.vercel.app",
    image: "https://atlasso.vercel.app/opengraph-image",
  },
  {
    name: "VWL DRP",
    tagline: "A daily word game",
    href: "https://vwldrp.com",
    image: "https://vwldrp.com/og-graph.png",
  },
  {
    name: "Oroboro",
    tagline: "A game of circular logic",
    href: "https://www.playoroboro.com",
    image: "https://www.playoroboro.com/og-image.png",
  },
  {
    name: "Heatspell",
    tagline: "A daily spelling game",
    href: "https://playheatspell.com",
    image: "https://playheatspell.com/opengraph-image.png",
  },
  {
    name: "Lacuno",
    tagline: "Fill the gaps in the phrase",
    href: "https://lacuno.vercel.app",
    image: "https://lacuno.vercel.app/og-graph.png",
  },
  {
    name: "Zumma",
    tagline: "Spend your numbers, land on the goal",
    href: "https://www.playzumma.com",
    image: "https://www.playzumma.com/og-graph.png",
  },
];

export default function Home() {
  return (
    <div className="page">
      <header className="masthead">
        <h1>Games</h1>
        <p>One a day. No accounts, no ads.</p>
      </header>

      <main className="grid">
        {GAMES.map((game) => (
          <a key={game.name} className="card" href={game.href}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              className="card-image"
              src={game.image}
              alt={`${game.name} — ${game.tagline}`}
              loading="lazy"
            />
            <span className="card-name">{game.name}</span>
            <span className="card-tagline">{game.tagline}</span>
          </a>
        ))}
      </main>
    </div>
  );
}
