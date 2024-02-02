
import './App.css';
import Block2 from './Block/Block2';
import Block3 from './Block/Block3';
import Block1 from './Block/Block1';
import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  //fetch data from api
  const [data,setData]=useState([])
  useEffect(()=>{
    axios.get('http://127.0.0.1:8000/api/category')
    .then(res=>setData(res.data))
    .catch(err=>console.log(err));
  },[])
  return (
    <div className="App">
      <div className='container'>
        <div className='card m-5'>
          <h3>Fetch data from API in React with Axios</h3>
          <table className='table'>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Name</th>
                </tr>
              </thead>
              <tbody>
                {/* api data display on react */}
                {
                data.map((category,index) => {
                    return  <tr key={index}>
                        <td>{category.id}</td>
                        <td>{category.name}</td>
                    </tr>
                })
                }
              </tbody>
          </table>
        </div>
      </div>
      <Block1></Block1>
      <Block2></Block2>
      <Block3></Block3>
    </div>
  );
}

export default App;
