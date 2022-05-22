const Comments = ({comments}) => {
    return (
        <div>
            {comments.map((comment)=>{
                return (<div className="card post-item">
                    <div className="card-header">{comment.username}</div>
                <p>{comment.comment}</p>
            </div>)
            })}
        </div>
    )
}
export default Comments