import { useEffect, useState } from "react";
import Header from "./components/Header";
import Nav from "./components/Nav";
import Results from "./components/Results";
import requests from '../src/utils/request'


function App() {
  const [genre, setgenre] = useState('fetchTrending')
  const [isLoading, setisLoading] = useState(true)
  const [data, setdata] = useState({})
  useEffect(() => {
    const fetchjson =  ()=>{
    var req = requests[genre]
    fetch(req['url']).then(response => response.json()).then(result=>setdata(result['results']))
    .catch((err)=>console.log(err))
    
    if(data.length>0){
      setisLoading(false)
    }else{
      setisLoading(true)
    }
    
    }
    fetchjson()
    
  }, [genre])
  
  return (
     <div className="h-screen">
      <Header />
      <Nav setgenre={setgenre} />
      {console.log(data)}
      { !isLoading && <Results results ={data}  /> }
      
    </div>
  
  
  );
}

export default App;
