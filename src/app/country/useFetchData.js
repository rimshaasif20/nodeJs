
import  { useEffect , useState } from 'react'
import Country from './page';
function FetchData(url) {

const [data , setData]=useState([]);

    useEffect(()=>{
        fetch(url)
        .then((res) => res.json())
        .then((data) => setData(data))
        .catch((err) => console.log(`Error: ${err}`));
    }, [url]);

    return( 
        <>
         {/* <Country list={data} /> */}
        </>
    )
    }

export default FetchData;