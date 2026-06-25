import "../../styles/panel.css"
export default function Description({
  description,
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

          <p>{description}</p>
        </>
      )}
    </>
  );
}