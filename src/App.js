import logo from './logo.svg';
import './App.css';
import CardList from './components/CardList';

function App() {
  return (
    <div>
      <h1> ROBOFRIENDS </h1>
      <input type="text" placeholder="Search.." name="search"/>
      <p>
        <CardList />
      </p>
    </div>
  ); 
}

export default App;
