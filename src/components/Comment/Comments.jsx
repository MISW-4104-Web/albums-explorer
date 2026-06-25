import "../../styles/comments.css"
export default function Comments({ comments }) {
  if (!comments || comments.length === 0) {
    return (
      <div className="comments-empty">
        No comments yet.
      </div>
    );
  }

  return (
    <div className="comments">
      {comments.map(comment => (
        <div
          key={comment.id}
          className="comments-row"
        >
          <span className="comments-rating">
            {comment.rating}
          </span>

          <span className="comments-description">
            {comment.description}
          </span>
        </div>
      ))}
    </div>
  );
}