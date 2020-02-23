import React, { Component } from "react";
import { render } from "react-dom";



class SubmitBar extends Component {

  constructor(props){
    super(props);
    this.state = {name: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event){
    this.setState({name: event.target.value});
      console.log(this.state.name);
  }
  handleSubmit(event){
    event.preventDefault();
    console.log('handle submit');
    console.log(this.state.name);
  }

  render(){
    return (
      <form onSubmit={this.handleSubmit}>
        <input value={this.state.value} onChange={this.handleChange}/>
        <input type='submit' value='Submit'/>
      </form>
    )
  }
}

class ArticleList extends Component {
  // constructor(props){
  //   super(props);
  //
  //   this.state.
  // }
  render(){
    return (
      <ul>
        {this.props.articles.map((item) =>
          <li>{item.author}</li>
        )}
      </ul>);
  }
}

class App extends Component {

  constructor(props){
    super(props);
    this.state = {data: []};
  }

/* Fetching Data from backend. Basically just getting a list of (POSTs of Gets,
 * I'm not really sure.) So logic of what time give happens on backend. really in
 * in conjuction with both. becasue it needs to give at the right time and place
 * to the frontend. like when someon clicks a button ofn the frontend to sort
 * or to have only certain thing (should logic happen on front or back). and then
 * but probably, if its major, if it knows if will need to do this, it willl
 * fetch that particular list from the backend. I guess that is where databases
 * come in.
 */
  componentDidMount(){
    fetch('/api/track')
      .then(response => response.json())
      .then(list => this.setState({data: list})); // sets data to what i've requested

    console.log('here');
    console.log(this.state.data)
  }


  render(){
      console.log('here1');
    return (
      <div>
        <ArticleList articles={this.state.data}/>
        <SubmitBar />
      </div>
    )
  }
}



export default App;

const container = document.getElementById("app");
render(<App />, container);
//
// class App extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       data: [],
//       loaded: false,
//       placeholder: "Loading"
//     };
//   }
//
//   componentDidMount() {
//     fetch("api/track")
//       .then(response => {
//         if (response.status > 400) {
//           return this.setState(() => {
//             return { placeholder: "Something went wrong!" };
//           });
//         }
//         return response.json();
//       })
//       .then(data => {
//         this.setState(() => {
//           return {
//             data,
//             loaded: true
//           };
//         });
//       });
//   }
//
//   render() {
//     return (
//       <ul>
//         {this.state.data.map(contact => {
//           return (
//             <li key={contact.title}>
//               {contact.author} - {contact.description}
//             </li>
//           );
//         })}
//       </ul>
//     );
//   }
// }


// class Submit extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {value: ''};
//
//     this.handleChange = this.handleChange.bind(this);
//     this.handleSubmit = this.handleSubmit.bind(this);
//   }
//
//   handleChange(event) {
//     this.setState({value: event.target.value});
//   }
//
//   handleSubmit(event) {
//     alert('A name was submitted: ' + this.state.value);
//     event.preventDefault();
//   }
//
//   render() {
//     return (
//       <form onSubmit={this.handleSubmit}>
//         <label>
//           Name:
//           <input type="text" value={this.state.value} onChange={this.handleChange} />
//         </label>
//         <input type="submit" value="Submit" />
//       </form>
//     );
//   }
// }
