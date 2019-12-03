import React from 'react';
import axios from "axios";
import UserCard from "./components/UserCard";
import './App.css';

class App extends React.Component {
  state = {
    user: "",
    followers: []
  }

  componentDidMount() {
    axios.get("https://api.github.com/users/trodriguez89")
      .then(response => {
        console.log(response.data);
        this.setState({ 
          user: response.data
        })
      })
      .catch(error => {
        console.log("Oops, something went wrong!", error)
      })
    axios.get("https://api.github.com/users/trodriguez89/followers")
      .then(response => {
        console.log(response.data)
        this.setState({ followers: response.data })
      })
  }

  render() {
    return (
      <div className="App">
        <h1>My Github Info</h1>
        <UserCard user={this.state.user} followers={this.state.followers} />
      </div>
    );
  }
}

export default App;
