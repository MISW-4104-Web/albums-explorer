import "../styles/tracks.css"
export default function Tracks({ tracks }) {
  return (
    <section className="tracks">
      <h2 className="tracks-title">
        Tracks
      </h2>

      <div className="tracks-list">
        {tracks.map(track => (
          <div
            key={track.id}
            className="tracks-row"
          >
            <span className="tracks-name">
              {track.name}
            </span>

            <span className="tracks-duration">
              {track.duration}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}