import "./style.css";

const tracks = [
  { title: "Pagsamo", artist: "Arthur" },
  { title: "Life Puzzle", artist: "Arthur" },
  { title: "Binhe", artist: "Arthur" },
  { title: "Binobirocha", artist: "Andrew" },
  { title: "Batugan", artist: "Flowg" },
  { title: "Shades", artist: "Ogie" },
  { title: "Banal", artist: "Janin" },
];

export default function App() {
  return (
    <div className="app">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
</svg>

      <header> Music Playlist</header>
      <img className="cover" src="images.png" alt="Spotify album cover" />
      <h1>Spotify</h1>
      <p className="count">{tracks.length} songs</p>

      <ul className="list">
        {tracks.map((t) => (
          <li key={t.title} className="track">
            <span className="play">▶</span>
            <div className="info">
              <b>{t.title}</b>
              <small>{t.artist}</small>
            </div>
            <span className="heart">♡</span>
          </li>
        ))}
      </ul>
    </div>
  );
}