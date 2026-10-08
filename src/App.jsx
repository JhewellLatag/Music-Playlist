import "./style.css";

const tracks = [
  { title: "Pagsamo", artist: "Arthur" },
  { title: "Life Puzzle", artist: "Arthur" },
  { title: "Binhe", artist: "Arthur" },
  { title: "Binobirocha", artist: "Andrew" },
  { title: "Batuagn", artist: "Flowg" },
  { title: "Shades", artist: "Ogie" },
  { title: "Banal", artist: "Janin" },
];

export default function App() {
  return (
    <div className="app">
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