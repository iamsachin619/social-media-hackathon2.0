import './MakePost.css';
const MakePost = props => { 
    return(
        <div className='card post-item'>
            <textarea className='form-control' rows="4" placeholder='Write whats on your mind...'></textarea>
            <div className='mt-2'>
                <input type="file" class="form-control-file" id="exampleFormControlFile1" />
                <button className='btn btn-outline-primary btn-sm pull-right'>Post</button>
            </div>
        </div>
    )
}
export default MakePost