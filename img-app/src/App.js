import { useState, useEffect } from 'react'
import { LoadImages, SearchImages } from './components/api'
import './App.css';
import Image from './components/image'

function App() {
  const [query, setQuery] = useState()
  const [searchQ, setSearch] = useState()
  const data = LoadImages();

 

  const search = () =>{
    setSearch(query);
  }
  const searchData = SearchImages(searchQ);
  console.log(searchQ);
  return (
    <div className="App">
      <div  className="App1">
        <input type="text" onChange={(event) => setQuery(event.target.value)} />
        <button onClick={search}>Search</button>
      </div>
      <div className="contain">
      {/* {searchData.map((img, key) => (
          <Image src={img.urls.thumb} key={key} />
        ))} */}


        {searchQ ?  searchData.map((img, key) => (
          <Image src={img.urls.thumb} key={key} />
        )) : data.map((img, key) => (
          <Image src={img.urls.thumb} key={key} />
        ))}
      </div>
    </div>
  );
}

export default App;
