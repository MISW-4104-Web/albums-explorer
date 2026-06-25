import { useParams, useNavigate } from "react-router-dom";
import { albumService } from "../services/api/album.service";
import { useState, useEffect } from "react";
import Comments from "../components/Comment/Comments";
import NewComment from "../components/Comment/NewComment";

export default function AlbumComments() {
  const { id } = useParams();
  const [album, setAlbum] = useState(null);
  const [comments, setComments] = useState(null);
  const navigate = useNavigate();

  const handlePostComment = async (
    comment,
    rating
  ) => {
    await albumService.addCommentById(
      id,
      comment,
      rating
    );
  };

  useEffect(() => {
    const loadData = async () => {
      const [albumData, commentsData] = await Promise.all([
        albumService.getById(id),
        albumService.getCommentsById(id),
      ]);
      setAlbum(albumData);
      setComments(commentsData);
    };
    loadData();
  }, [id]);
  
  if (!album || !comments) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <button onClick={() => navigate(`/albums/${id}`)}>Back to Album</button>
      <h1>{album.title}</h1>

      
      <NewComment onPost={handlePostComment}/>
      <h2>Comments:</h2>
      <Comments comments={comments}/>
    </>
  );
}