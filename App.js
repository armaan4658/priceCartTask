import { useState } from 'react';
import { useEffect } from 'react';
import './App.css';
import {Cart} from './cart';

function App() {
  const [data,setData] = useState([]);
  const getData = () =>{
    fetch(`https://609e2a6533eed80017957e03.mockapi.io/cartTask`,{method:'GET'})
    .then(res=>res.json())
    .then(res=>setData(res))
  }
  useEffect(getData,[])
  console.log(data)
  return (
    <div className="App">
      {
        data.map(ele => (
          <Cart ele={ele}/>
        ))
      }
    </div>
  );
}

export default App;
