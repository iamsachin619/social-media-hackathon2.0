const Comments = ({comments}) => {
    return (
        <div>
            {comments.map((comment, index)=>{
                return (
                <div className="card post-item" key={index}>
                    <div className="card-header">{comment.username}</div>
                <p>{comment.comment}</p>
            </div>)
            })}
        </div>
    )
}
export default Comments