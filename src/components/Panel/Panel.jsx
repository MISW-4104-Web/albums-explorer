import { useState } from "react";
import Description from "./Description";
import Information from "./Information";
import "../../styles/panel.css"

export default function Panel({ album, onViewComments }) {
  const [activeSection, setActiveSection] = useState('description');

  return (
    <section className="panel">
      {album.image && (
        <img
          className="panel-image"
          src={album.image}
          alt={`${album.title} by ${album.artist} album cover`}
        />
      )}

      <div className="panel-content">
        <h1 className="panel-title">
          {album.title}
        </h1>

        <section className="panel-section">
          <Description
            description={album.description}
            buttonLabel='More information'
            isOpen={activeSection === 'description'}
            onOpen={() => setActiveSection('information')}
          />
          <Information
            album={album}
            buttonLabel='Album description'
            isOpen={activeSection === 'information'}
            onOpen={() => setActiveSection('description')}
          />
        </section>
      </div>

      <div className="panel-actions">
        <button
          className="panel-button"
          onClick={onViewComments}
        >
          View Comments
        </button>
      </div>
    </section>
  );
}