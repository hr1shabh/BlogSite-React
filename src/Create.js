import { useState } from "react";
import { useHistory } from "react-router"; // for routing 

const Create = () => {
    const [title,setTitle] = useState();
    const [body,setBody] = useState();
    const [author,setAuthor] = useState();
    const [pending,setPending] = useState(false);
    const history = useHistory();
    const handleSubmit = (e) =>{
        e.preventDefault();
        setPending(true);
        const blog = {title, body, author};
        fetch('http://localhost:8000/blogs',{
            method : 'POST',
            headers :{"Content-Type" : "application/json"},
            body : JSON.stringify(blog)
        }) .then(()=>{
            console.log("new blog added");
            setPending(false);
            history.push('/'); // will take to home route
        })
    }
    return ( 
        <div className = "create">
        <h2>Create a new blog</h2>
        <form onSubmit = {handleSubmit}>
        <label>Blog tile</label>
        <input type="text" required value = {title} onChange = {(e) => setTitle(e.target.value)}></input>
        <label>Blog body</label>
        <textarea required value = {body} onChange = {(e) => setBody(e.target.value)}></textarea>
        <label>Blog Author</label>
        <select value = {author} onChange = {(e) => setAuthor(e.target.value)}>
        <option value="yoshi">yoshi</option>
        <option value="mario">mario</option>
        <option value="hrishabh">Hrishabh</option>
        </select>
        {!pending && <button>Add Blog</button>}
        {pending && <button disabled>Adding...</button> }
        </form>
        </div>
     );
}
 
export default Create;
