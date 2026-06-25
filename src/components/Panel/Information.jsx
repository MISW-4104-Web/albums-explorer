import "../../styles/panel.css"
export default function Information({
  album,
  buttonLabel,
  isOpen,
  onOpen,
}) {
  return (
    <>
      {isOpen && (
        <>
          <button
            className="panel-section-button"
            onClick={onOpen}
          >
            {buttonLabel}
          </button>
          <p>
            Genre: {album.genre}
          </p>

          <p>
            Release Date:
            {" "}
            {album.releaseDate}
          </p>

          <p>
            Record Label:
            {" "}
            {album.recordLabel}
          </p>
        </>
      )}
    </>
  );
}