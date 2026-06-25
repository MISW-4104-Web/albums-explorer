import { useState } from "react";
import "../../styles/card.css"

export default function NewComment({ onPost }) {
  const [comment, setComment] = useState("");
  const [rating, setRating] = useState(1);

  const handleSubmit = () => {
    onPost(comment, Number(rating));
    setComment("");
    setRating(1);
  };

  return (
    <div className="new-comment">
      <label htmlFor="comment">
        Leave a comment:
      </label>

      <textarea
        id="comment"
        value={comment}
        onChange={(e) =>
          setComment(e.target.value)
        }
      />

      <label htmlFor="rating">
        Rating:
      </label>

      <input
        id="rating"
        type="number"
        min="1"
        max="5"
        value={rating}
        onChange={(e) =>
          setRating(e.target.value)
        }
      />

      <button onClick={handleSubmit}>
        Post Comment
      </button>
    </div>
  );
}