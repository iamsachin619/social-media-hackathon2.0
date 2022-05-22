import './PostCard.css'
const PostCard = props => {
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
                    <span className='m-2'><a href='#'>Comments</a></span>
                </div>
            </div>
        </div>
    )
}
export default PostCard