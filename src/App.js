import React, {useState, useEffect} from 'react';
import logo from './logo.svg';
import './App.css';
import { greenyellow } from 'color-name';

function App() {
  const heros =["Salman", "Manna", "Sakib", "Shuvo", "Bapparaz"]
  const products= [
    {name: "Photoshop", price: "$90.99"},
    {name: "illustrator", price: "80.99"},
  ]
  return (
    <div className="App">
      <header className="App-header">
      <p>I am a React Person</p>
      <Counter></Counter>
      <Users></Users>
      <ul>
        {
          heros.map(hero =><li>{hero}</li>)
        }
        {
          products.map(product =><li>{product.name}</li>)
        }
      </ul>
      {products.map(pd =><Product product={pd}></Product>)}
      
      <Product product={products[0]}></Product>
      <Product product={products[1]} ></Product>

     
      <Person name="Shohag"job= "Cool"></Person>
      <Person name="Shohag"job= "Honest"></Person>
      
      </header>
    </div>
  );
}
function Users(){
  const [users, setUsers] = useState([]);
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(data => setUsers(data))
  },[])
  return (
    <div>
      <h3>Dynamic Users : {users.length}</h3>
      <ul>
        {
          users.map(user =><li>{user.name}</li>)
        }
      </ul>
    </div>
  )
}

function Counter(){
  const [count, setCount] = useState(10);
  const handleIncrease = () => setCount(count + 1);
  

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick ={ () => setCount(count + 1)}>Increase</button>
      <button onClick ={ () => setCount(count - 1)}>Decrease</button>
    </div>
  ) 
}

function Product(props){
  const productStyle={
    border: "2px solid gray",
    borderRadius: "5px",
    backgroundColor: "lightgray",
    float: "left",
    width: "200px",
    height: "200px",
    padding: "30px"
  }
  const {name, price}= props.product; 
  return (
    <div style={productStyle}>
      <h3>{name}</h3>
      <h5>{price}</h5>
      <button>Buy Now</button>
    </div>
  );
}

function Person(props){
  return (
    <div style={{border: "2px solid green", width: "300px",backgroundColor: "orange",margin: "10px",padding: "20px",color: "black"}}>
      <h3>My name:{props.name}</h3>
     <p>My profession:{props.job}</p>
    </div>
  )
}

export default App;
