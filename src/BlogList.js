import { Link } from "react-router-dom";
const BlogList = ({blogs}) => {
 //const blogs = props.blogs;
//we use props to transfer data from one file to other
    return ( 
        <div className="blog-list">
        {blogs.map((blog) => (
// it's (``) not ''
            <div className="blog-preview" key={blog.id}>
            <Link to={`/blogs/${blog.id}`}>  
            <h2>{blog.title}</h2> 
            <p>Written by {blog.author}</p>
            </Link>
            
            </div>
//here we are displaying the title and authors in our DB. on clicking you would go to the route of the blog
        ))}
        </div>
     );
}
 
export default BlogList;