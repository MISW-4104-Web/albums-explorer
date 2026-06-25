import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { albumService } from "../services/api/album.service";
import Panel from "../components/Panel/Panel";
import Tracks from "../components/Tracks";

export default function AlbumDetail() {
  const { id } = useParams();
  const [album, setAlbum] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    async function loadAlbum() {
      const data =
        await albumService.getById(id);

      setAlbum(data);
    }
    loadAlbum();
  }, [id]);

  if (!album) {
    return <p>No data available</p>;
  }

  return (
    <>
      <button onClick={() => navigate(`/`)}>Back to all albums</button>
      <Panel album={album} onViewComments={() => navigate(`/albums/${id}/comments`)} /> 
      {album.tracks.length > 0 ? (
        <Tracks tracks={album.tracks} />
      ) : (
        <p>No tracks available.</p>
      )}
    </>
  );
}