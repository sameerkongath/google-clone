import {useState, useEffect} from 'react'
import API_KEY from "./keys";

const CONTEXT_KEY = "e338a951eba905f81";
 
const useGoogleSearch = (term) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async() => {
        fetch(
            `https://www.googleapi.com/customsearch/v1?key=${API_KEY}&cx=${CONTEXT_KEY}&q=${term}`
        )
        .then(response => response.json())
        .then(result => {
            setData(result)
        })
    }
    fetchData();

  }, [term])

  return {data}
};

export default useGoogleSearch
