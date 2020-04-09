import React, {Component} from 'react';
import './App.css';
import CardList from './components/CardList/CardList'
import SearchBox from './components/SearchBox/SearchBox';

class App extends Component {
  constructor(){
    super();
    this.state = {
      monsters: [],
      searchfield: ''
    }
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(users => this.setState({monsters: users}))
  }

  onChangeInput(e){
    this.setState({searchfield: e.target.value})
  }
  render(){
    const {monsters,searchfield} = this.state;
    const filtered = monsters.filter( monster => monster.name.toLowerCase().includes(searchfield.toLowerCase()));
    return (
      <div className='App'>
        <SearchBox onChangeInput = {e => this.onChangeInput(e)} />
        <CardList 
          monsters = {filtered}
           />
      </div>
    );
  }
}

export default App;
