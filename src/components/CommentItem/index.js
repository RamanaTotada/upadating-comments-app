import './index.css'

const CommentItem = props => {
  const {commentList, deleteComment, toggleFavoirate} = props

  const {
    id,
    inputNames,
    firstNames,
    commentTexts,
    dates,
    newClass,
    isLike,
  } = commentList

  const imgUrl = isLike
    ? 'https://assets.ccbp.in/frontend/react-js/comments-app/liked-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/comments-app/like-img.png'

  const addClass = isLike ? 'sky-blue' : ''

  const likedButtton = () => {
    toggleFavoirate(id)
  }

  const onClickdeleteComment = () => {
    deleteComment(id)
  }

  return (
    <li className="adding-comments-container">
      <div className="upper-part">
        <p className={`user-name ${newClass}`}>{firstNames}</p>
        <h2 className="profile-name">{inputNames}</h2>
        <p className="comment-date">{dates}</p>
      </div>
      <p className="comment-text">{commentTexts}</p>

      <div className="lower-part">
        <div className="like-container">
          <button
            type="button"
            className="like-button-style"
            onClick={likedButtton}
          >
            <img alt="like" className="like-image" src={imgUrl} />
          </button>

          <p className={`like-image ${addClass}`}>like</p>
        </div>

        <button
          type="button"
          className="delete-button"
          onClick={onClickdeleteComment}
          testid="delete"
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/comments-app/delete-img.png"
            className="delete-image"
            alt="delete"
          />
        </button>
      </div>
    </li>
  )
}
export default CommentItem
