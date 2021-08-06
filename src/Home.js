import { useState ,useEffect } from 'react'; //use state hook
import BlogList from './BlogList';
import useFetch from './useFetch';
const Home = () => {
const {data , Pending, error} = useFetch('http://localhost:8000/blogs');
    return ( 
        <div className="home">
        {error && <div>{error}</div>}
        {Pending && <div>Loading...</div>}
        {data &&<BlogList blogs={data}/>}
        </div>

     );
}
 
export default Home;