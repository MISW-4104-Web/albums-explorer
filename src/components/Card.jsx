import "../styles/card.css"
export default function Card({ album, onSelect }) {
  return (
    <div className="card">
      {album.image && (
        <img
          className="card-image"
          src={album.image}
          alt={`${album.title} by ${album.artist} album cover`}
        />
      )}

      <h2 className="card-title">{album.title}</h2>

      <button
        className="card-button"
        onClick={onSelect}
      >
        View Details
      </button>
    </div>
  );
}