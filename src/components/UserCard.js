import React from "react";
import Followers from "./Followers";
import styled from "styled-components";

const UserDiv = styled.div`
  border-top: 2px solid black;
  background-color: #1A3D43
`
const MyInfoDiv = styled.div`
  border: 1px solid black;
  border-radius: 10px;
  width: 40%;
  margin: 0 auto;
  margin-top: 10px;
  background-color: #928284;
`
const H2Style = styled.h2`
  width: 90%;
  margin: 0 auto;
  text-align: left;

`

const UserCard = props => {
  return (
    <UserDiv>
      <MyInfoDiv>
      <h2>{props.user.name}</h2>
      <img src={props.user.avatar_url} />
      <p><strong>Bio:</strong> {props.user.bio}</p>
      
      </MyInfoDiv>
      <H2Style>Followers: </H2Style>
      <Followers followers={props.followers} />
    </UserDiv>
  );
}

export default UserCard;