import React from "react";
import FuncComponent from "./components/FuncComponent";

// class App extends React.Component {
//   constructor() {
//     super();
//     this.state = {
//       firstName: "Erica"
//     }
//     // this.updateName = this.updateName.bind(this);
//   }

//   updateName = () => {
//     // this.state.firstName = "Eric"; // NO NO
//     this.setState({
//       firstName: "Eric"
//     });
//   }

//   render() {

//     return (
//       <div>
//         <FuncComponent></FuncComponent>
//         <FuncComponent></FuncComponent>
//         <FuncComponent></FuncComponent>
//         <FuncComponent></FuncComponent>
//         <h1>{this.state.firstName}</h1>
//         <h2>Rogers</h2>
//         <button onClick={this.updateName}>Change Name!</button>
//       </div>
//     )
//   }
// }




class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todos: [],
      userInput: ""
    }
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    // console.log(e.target.value);
    this.setState({userInput: e.target.value})
  }

  handleClick = () => {
    //Method 1
    // let copy = this.state.todos.slice();
    // copy.push(this.state.userInput);
    // this.setState({todos: copy})
    //Method 2
    this.setState({todos: [...this.state.todos, <li>{this.state.userInput}</li>]})
  }

  render() {
    return (
      <div>
        <h1>My Todos!</h1>
        <input onChange={this.handleChange}  />
        <button onClick={this.handleClick}>Add To List!</button>
        <ul>{this.state.todos}</ul>
      </div>
    )
  }
}






export default App;

// class Athlete {
//   constructor(name) {
//     this.name = {
//       firstName: "",
//       lastName: ""
//     };
//   }

//   sayName() {
//     console.log(this.name.firstName)
//   }
// }