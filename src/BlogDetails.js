import {useParams} from 'react-router-dom' //for routing
import useFetch from './useFetch'; // using custom Hook
import { useHistory } from 'react-router';
const BlogDetails = () => {
    const history = useHistory();
    const {id} = useParams();
    const {data : blog,error, Pending} = useFetch('http://localhost:8000/blogs/' + id);
    //deleting blog from DB and routing to home
    const handleDelete = () =>{
    fetch('http://localhost:8000/blogs/'+id ,{
        method : 'DELETE'
    })
    .then(()=>{
     history.push('/');
    })
    }


    return ( 
        <div className='blog-details'>
        {Pending && <div>Loading...</div> }
        {error && <div>{error}</div>}
        {blog &&(
            <article>
            <h2>{blog.title}</h2>
            <p>Written by {blog.author}</p>
            <div>{blog.body}</div>
            <button onClick ={handleDelete}>Delete</button>
            </article>
        )}
        </div>
     );
}
 
export default BlogDetails;