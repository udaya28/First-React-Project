import React from 'react';
import './App.css';
import { Component } from 'react';

class App extends Component {
  constructor() {
    super();
    this.state = {
      users: [
        {
          name: 'udaya',
          id:"1"
        },
        {
          name: 'vivek',
          id:"2"
        },
        {
          name: 'akassh',
          id:"3"
        },
        {
          name: 'amoga',
          id:"4"
        },
      ],
    };
  }
  render() {
    return (
      <div className="App">
        {this.state.users.map((user) => (
          <h1 key={user.id}>{user.name}</h1>
        ))}
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
