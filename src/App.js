import React from 'react';

import './App.css';
import CardList from "./components/card-list/card-list";
import { SearchBox } from './components/search-box/search-box';


class App extends React.Component {

  constructor() {
    super();
    this.state = {
      monsters: [],
      searchField: ''
    }
    //this.handlClick=this.handlClick.bind(this);
  }
  handlClick = (e) =>
    this.setState({ searchField: e.target.value },
      () => console.log(this.state))


  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(res => this.setState({ monsters: res }));
  }

  render() {
    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter(monster => monster.name.toLowerCase().includes(searchField.toLowerCase()));
    return (
      <div className="App">
        <h1>Monsters Rolodex</h1>
        <SearchBox placeholder='search monsters' handleChange={this.handlClick} />
        < CardList monsters={filteredMonsters}>
        </CardList>
      </div>
    );

  }
}


export default App;
