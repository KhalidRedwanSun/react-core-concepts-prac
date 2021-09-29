 import logo from './logo.svg';
import './App.css';
import { useState,useEffect } from 'react/cjs/react.development';

function App() {
  let person={
    name: " Sunn ",
    id:"20301281",
    job:"programmer",
    address:"Dhaka"
  }

  let style={
    color: "red",
    backgroundColor: "gray"
  }

  let nayoks=["Kanchon","Chanchal","Mosharraf","Shuvo"]
  let products=[{name:"Camera",price: "300$"},
                {name:"laptop",price: "700$"},
                {name:"Tv",price: "200$"}]

  let friends=[
                {name:"Rahim",subject:"BBA"},
                {name:"Karim",subject:"IBA"},
                {name:"Fahim",subject:"CSE"},
                {name:"Shamim",subject:"EEE"}
  ]

  return (
    <div className="App">
      <header className="App-header">  
        
        <Users></Users>
        <Counter></Counter>
        <Person nayoks={nayoks}> </Person> 
        
        <ul>
          {
            products.map(product => <Product product={product}></Product> )
          }

        </ul>

        <ul>
          {
            friends.map(friend => <FriendInfo friend={friend}></FriendInfo> )
          }
          
        </ul>

    

      
        
       
        
        

      </header>
    </div>
  );
}




function Users() {

  const[users,setUsers]=useState([])
  useEffect(() =>{
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(res=>res.json())
    .then(data=>setUsers(data))

  })

  return(
    <div>
      <ul>
        {
          users.map(user=> <li>{user.name} , {user.phone}</li>)
        }
      </ul>
    </div>
  )

}




function Product(props){
  const productStyle={
    border: "1px solid gray",
    margin: "5px",
    borderRadius: "7px",
    backgroundColor: "lightgray",
    height: "300px",
    width: "400px",
    // float: "left"
  }

  // let {name,price}=props.product; //means name=props.product.name, price=props.product.price
  
  return (
    <div style={productStyle}>
      <h2>Name :{" " + props.product.name}</h2>
      <h3>Price : {" " + props.product.price}</h3>


      
      

    </div>
  )
}

function Person(props){
  let nayoks=props.nayoks

  let personStyle={
    border: "5px solid white",
    margin: "5px",
    padding: "15px"
  }
  return <div style={personStyle}>
    <ul>
      {
        nayoks.map(nayok=> <li>{nayok}</li>)
      }
    </ul>

  </div>
}



function Counter(){
  const [count,setCount] = useState(0);
  let  handleIncrease= () => {
    console.log("clicked")
    let newCount = count+1
    setCount(newCount);
  };
  return(
    <div>
      <h1>Count:{count}</h1>
      <button onClick={ ()=> setCount(count-1) }>decreasee</button>
      <button onMouseMove={handleIncrease}>Increasee</button>

    </div>
  )
}



function FriendInfo(props){
  let infoStyle={
    border:"2px solid cyan",
    margin: "5px",
    height: "350px",
    width: "450px"
  }

  return <div style={infoStyle}>
    <h2> Friend Name {props.friend.name} </h2>
    <h3> His Subject : {props.friend.subject} </h3>

  </div>

}

export default App;

