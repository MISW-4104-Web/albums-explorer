import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/albums.css"

import { albumService } from "../services/api/album.service";
import Card from "../components/Card";

export default function Albums() {
  const [albums, setAlbums] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    async function loadAlbums() {
      try {
        const data = await albumService.getAll();
        setAlbums(data);
      } catch (error) {
        console.error(error);
      }
    }

    loadAlbums();
  }, []);

  if (!albums) {
    return <p>No data available</p>;
  }


  return (
    <div className="albums-grid">
      {albums.map(album => (
        <Card
          key={album.id}
          album={album}
          onSelect={() => navigate(`/albums/${album.id}`)}
        />
      ))}
    </div>
  );
}