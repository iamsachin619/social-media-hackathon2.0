import './MakePost.css';
import {useState} from 'react'
const MakePost = ({addPostData,user}) => { 

    const [content,setContent] = useState('');
    const addPostHandler = (e) => {
        e.preventDefault();
        addPostData(content);
        setContent('');
    }
    return(
        <div className='card post-item'>
            <textarea className='form-control' rows="4" placeholder='Write whats on your mind...' value={content} onChange={(e)=>{setContent(e.target.value)}}></textarea>
            <div className='mt-2'>
                <input type="file" class="form-control-file" id="exampleFormControlFile1" />
                <button className='btn btn-success btn-sm pull-right' onClick={addPostHandler}>Post</button>
            </div>
        </div>
    )
}
export default MakePost