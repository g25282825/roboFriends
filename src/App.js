import React,{useState, useEffect} from "react";
import './App.css';
import CardList from './components/CardList';
import SearchBox from './components/SearchBox';
import Scroll from './components/Scroll';

function App() {

  const [searchField, setSearchField] = useState('');
  const [robots, setRobots] = useState([]);

  const SearchChange=(event)=>{
    setSearchField(event.target.value);
  }

  const filteredRobots = robots.filter(robot =>{
    if(!searchField)
      return robot;
    else
      return robot.name.toLowerCase().includes(searchField.toLowerCase());
  })

  useEffect(()=> {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response=> response.json())
      .then(users => {setRobots(users)});    
  },[]) 

  return !robots ? 
  <h1> Loading </h1>
  :(
    <div className="tc">
      
      <h1 className='f1'> ROBOFRIENDS </h1>

      <SearchBox onSearchChange={SearchChange}/>
      
      <div>
      < Scroll>
        <CardList robots = {filteredRobots} />
      </Scroll>
      </div>
    </div>
  ); 
}

export default App;
