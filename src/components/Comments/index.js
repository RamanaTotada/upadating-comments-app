import {Component} from 'react'
import './index.css'
import {formatDistanceToNow} from 'date-fns'
import {v4 as uuidv4} from 'uuid'
import CommentItem from '../CommentItem'

const initialContainerBackgroundClassNames = [
  'amber',
  'blue',
  'orange',
  'emerald',
  'teal',
  'red',
  'light-blue',
]

class Comments extends Component {
  state = {inputName: '', commentText: '', commentList: [], count: 0}

  onChangeName = event => {
    this.setState({inputName: event.target.value})
  }

  onChangeCommentText = event => {
    this.setState({commentText: event.target.value})
  }

  addComment = event => {
    event.preventDefault()
    const {inputName, commentText} = this.state
    const firstName = inputName.slice(0, 1)
    const date = formatDistanceToNow(new Date())

    const index =
      initialContainerBackgroundClassNames[Math.floor(Math.random() * 7)]
    const object = {
      id: uuidv4(),
      inputNames: inputName,
      firstNames: firstName,
      commentTexts: commentText,
      dates: date,
      newClass: index,
      isLike: false,
    }

    this.setState(prevState => ({
      commentList: [...prevState.commentList, object],
      inputName: '',
      commentText: '',
      count: prevState.count + 1,
    }))
  }

  toggleFavoirate = id => {
    this.setState(prevState => ({
      commentList: prevState.commentList.map(eachComment => {
        if (eachComment.id === id) {
          return {...eachComment, isLike: !eachComment.isLike}
        }
        return eachComment
      }),
    }))
  }

  deleteComment = id => {
    const {commentList} = this.state
    const filteredList = commentList.filter(
      eachComment => eachComment.id === !id,
    )

    this.setState(prevState => ({
      commentList: filteredList,
      count: prevState.count - 1,
    }))
  }

  render() {
    const {inputName, commentText, commentList, count} = this.state
    return (
      <div className="main-container">
        <h1 className="main-heading">Comments</h1>
        <div className="upper-container">
          <form className="write-comment-container">
            <p className="about-4.0">Say something about 4.0 Technologies</p>
            <input
              value={inputName}
              className="commenter-name"
              onChange={this.onChangeName}
              placeholder="Your Name"
            />

            <textarea
              value={commentText}
              className="comment-text"
              onChange={this.onChangeCommentText}
              placeholder="Your Comment"
            >
              {commentText}
            </textarea>
            <button
              type="submit"
              className="add-comment-button"
              onClick={this.addComment}
            >
              Add Comment
            </button>
          </form>
          <div className="comment-image">
            <img
              alt="comments"
              className="comments-image"
              src="https://assets.ccbp.in/frontend/react-js/comments-app/comments-img.png"
            />
          </div>
        </div>

        <div className="update-comment-container">
          <div className="comment-count-container">
            <button type="button" className="comment-count">
              {count}
            </button>
            <p className="comments-count-para">Comments</p>
          </div>
          <ul className="comment-container-down">
            {commentList.map(eachComment => (
              <CommentItem
                key={eachComment.id}
                commentList={eachComment}
                deleteComment={this.deleteComment}
                toggleFavoirate={this.toggleFavoirate}
              />
            ))}
          </ul>
          <hr />
        </div>
      </div>
    )
  }
}
export default Comments
