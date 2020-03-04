import React, { Component } from "react";
import { render } from "react-dom";
import axios from 'axios';



class SubmitBar extends Component 
{

  constructor(props){
    super(props);
    this.state = {name: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event)
  {
    this.setState({name: event.target.value});
      //console.log(this.state.name);
  }

/* Creates Post request and new item to store*/
  createPost(formValue)
  {
    let postOptions = 
      JSON.stringify(
        {
          title: 'malcolm',
          url: "https://github.com/malcolmessaid/green-light",
          author: formValue,
          description: "yay: post request works"
        });

    axios.post('/api/track/', postOptions,
       { headers: { "Content-Type": "application/json" } } )
      .then(res => {
        console.log(res);
        console.log(res.data);
      })
      .catch(function (error) {
        console.log('in error handling');
        console.log(error);
      });

  } 

  getRequest(){
    axios
      .get('/api/filter/')
      .then(res => {
        // console.log('hell');
        console.log(res);
        console.log(res.data);
      })
      .catch(function (error) {
        console.log('in error handling');
        console.log(error);
      });
  }


// trying to create a post request upon submit. but that is returing a 500 erorr. a get reuqest works
// will have to render (and potennitall reupdtate data field form constrictor to porperly render)
  handleSubmit(event)
  {
    event.preventDefault();
    this.createPost(this.state.name);ß
    console.log('Submit Bar: handled submit');
    // console.log(this.state.name);
  }

  render(){
    return (
      <form onSubmit={this.handleSubmit}>
        <input value={this.state.value} onChange={this.handleChange}/>
        <input type='submit' value='Add'/>
      </form>
    )
  }
}

class ArticleList extends Component 
{
  render()
  {
    console.log('Articlelist: Top Rendering Data Call');
    return (
      <ul>
        {this.props.articles.map((item) =>
          <li>{item.author}</li>
        )}
      </ul>);
  }
}

class App extends Component 
{
  constructor(props){
    super(props);
    this.state = {data: []};
  }

/* Fetching Data from backend. Basically just getting a list of (POSTs or Gets,
 * I'm not really sure.) So logic of what time give happens on backend. really in
 * in conjuction with both. becasue it needs to give at the right time and place
 * to the frontend. like when someon clicks a button ofn the frontend to sort
 * or to have only certain thing (should logic happen on front or back). and then
 * but probably, if its major, if it knows if will need to do this, it willl
 * fetch that particular list from the backend. I guess that is where databases
 * come in.
 */
  componentDidMount()
  {
    fetch('/api/track')
      .then(response => response.json())
      .then(list => this.setState({data: list})); // sets data to what i've requested

    console.log('App: component did mount call');
    // console.log(this.state.data)
  }
  render()
  {
    // console.log('App: Top Rendering Data Call');
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
