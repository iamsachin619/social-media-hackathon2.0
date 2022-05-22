import { useState } from 'react';
import Comments from './Comments'
import './PostCard.css'
const PostCard = props => {
    const [commentsHandler, setCommentHandler] = useState(false);
    const setCommentHandlerEvent = () => {
        setCommentHandler(!commentsHandler);
    }
    return(
        <div className='card post-item'>
            <div className='m-2'>
                <i class="fa fa-user-o" aria-hidden="true"></i>
                <strong> name should come from props</strong>
            </div>
            <div className='card text-black'>
                <p className='m-2'>
                this is the post content that we would get from propsthis is the post content that we would get from propsthis is the post content that we would get from propsthis is the post content that we would get from propsthis is the post content that we would get from props this is the post content that we would get from props
                </p>
                <div className='m-2'>
                    <i class="fa fa-thumbs-o-up" aria-hidden="true"></i>
                    <span className='m-2'><button onClick={setCommentHandlerEvent}>{commentsHandler ? 'Hide Comment' : 'Comments'}</button></span>
                </div>
                <div className={commentsHandler ? 'show-comments' : 'hide-comments'}>
                    <Comments/>
                    <div className='m-2'>
                        <textarea className='form-control'></textarea>
                        <button className='btn btn-outline-primary mt-1'>Add</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default PostCard