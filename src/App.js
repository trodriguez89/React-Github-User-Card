import React from 'react';
import axios from "axios";
import UserCard from "./components/UserCard";
import styled from "styled-components";
import './App.css';

const NavStyled = styled.h1`
  
`
const MainDiv = styled.div`
  text-align: center;
`
const NavBar = styled.div`
  border: 1px solid black;
  background-color: #048C8C;
`
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
      <MainDiv>
        <NavBar>
        <NavStyled>My Github Info</NavStyled>
        </NavBar>
        <UserCard user={this.state.user} followers={this.state.followers} />
      </MainDiv>
    );
  }
}

export default App;
