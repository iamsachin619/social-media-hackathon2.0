import './MakePost.css';
import {useState} from 'react'
const MakePost = ({addPost,user}) => { 

    const [content,setContent] = useState('')
    return(
        <div className='card post-item'>
            <textarea className='form-control' rows="4" placeholder='Write whats on your mind...' onChange={(e)=>{setContent(e.target.value)}}></textarea>
            <div className='mt-2'>
                <input type="file" class="form-control-file" id="exampleFormControlFile1" />
                <button className='btn btn-success btn-sm pull-right'onClick={
                    (e)=>{
                        e.preventDefault();
                      
                        addPost(content)
                        }}>Post</button>
            </div>
        </div>
    )
}
export default MakePost