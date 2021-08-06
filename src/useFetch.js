
//Making a custom Hook

import { useState ,useEffect } from 'react'; 
const useFetch = (url) =>{
 const [data, setData] = useState(null);
 const [Pending, setPending] = useState(true);
 const [error, setError] = useState(null);
useEffect(() =>{
const abortCont = new AbortController();

fetch(url, {signal: abortCont.signal})
.then(res =>{
    if(!res.ok){
        throw Error('Cannot connect to the resource');
    }
    return res.json();
})

.then(data=>{
    setData(data);
    setPending(false);
    setError(null);
})
.catch(err =>{
if(err.name === 'AbortError'){}
else{
setError(err.message);
setPending(false);}
})
return () => abortCont.abort();
},[url]);
return {data, Pending, error};
}

export default useFetch;