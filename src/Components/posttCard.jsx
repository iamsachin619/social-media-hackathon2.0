import { useState, useEffect } from 'react';
import Comments from './Comments'
import './PostCard.css'
const PostCard = ({post,user}) => {
    const [commentsHandler, setCommentHandler] = useState(false);
    const setCommentHandlerEvent = () => {
        setCommentHandler(!commentsHandler);
    }
    const [comments, setComments] = useState(post.comments);
    const [newComment, setNewComment] = useState();

    const addCommentHandler = (e) =>{
        e.preventDefault();
        setComments(prevComments=>{
            return [{username: user.username, comment: newComment}, ...prevComments]
        })
        setNewComment('');
    }

    // useEffect(() => { setComments(post.comments) }, [post.comments]);
    return(
        <div className='card post-item'>
            <div className='m-2'>
                <img className='rounded-circle' width='50' src={post.userImg}/>
                <strong className='mx-3'>{post.username}</strong>
            </div>
            <div className='card text-black mt-3'>
                <img class="card-img-top" alt="card" src={post.postImg} />
                <p className='m-2'>
                    {post.postContent}
                </p>
                <div className='m-2'>
                   {post.noOfLikes} <i class="fa fa-thumbs-o-up" aria-hidden="true"></i>
                    <span className='m-2'><button className='btn btn-outline-primary btn-sm' onClick={setCommentHandlerEvent}>{commentsHandler ? 'Hide Comment' : 'Comments'}</button></span>
                </div>
                <div className={commentsHandler ? 'show-comments' : 'hide-comments'}>
                    <Comments comments={comments} />
                    <div className='m-2'>
                        <textarea className='form-control' placeholder='Write your comments here...' value={newComment} onChange={(e)=>{setNewComment(e.target.value)}}></textarea>
                        <button className='btn btn-outline-primary btn-sm mt-1' onClick={addCommentHandler}>Add</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default PostCard