import React from 'react';
import './App.css';
import { Component } from 'react';


import { CardList } from './components/card-list/card-list.component';
// npm run deploy
class App extends Component {
  constructor() {
    super();
    this.state = {
      users: [],
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
    return (
      <div className="App">
        <CardList users = {this.state.users}>
          
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
