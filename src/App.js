import React from 'react';
import './App.css';
import { Component } from 'react';
import {SearchBox} from './components/search-box/search-box.component'

import { CardList } from './components/card-list/card-list.component';
// npm run deploy
class App extends Component {
  constructor() {
    super();
    this.state = {
      users: [],
      searchKey :"",
    };
  }
  
  componentDidMount() {
    try {
      fetch('https://jsonplaceholder.typicode.com/users/')
        .then((response) => response.json())
        .then((data) => {
          this.setState({ users: data });
          
        });
    } catch (err) {
      console.log(err);
    }
  }

  render() {
    const {users,searchKey} = this.state;
    const filteredUsers = users.filter((user)=>user.name.toLowerCase().includes(searchKey.toLowerCase()));
    return (
      <div className="App">
        
        <SearchBox placeholder="Search Robots" handelChange={(e) => this.setState({ searchKey: e.target.value })}/>
        <CardList users = {filteredUsers}>
          
        </CardList>
        
      </div>
    );
  }
}

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">

//       </header>
//     </div>
//   );
// }

export default App;
