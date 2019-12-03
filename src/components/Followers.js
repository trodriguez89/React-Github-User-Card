import React from "react";
import styled from "styled-components";

const BigDivStyle = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  
`

const UserCardDiv = styled.div`
  border: 1px solid black;
  border-radius: 5px;
  width: 40%;
  margin-top: 10px;
  padding-bottom: 10px;
  background-color: #928284;

`;

const Followers = props => {
  return (
    <BigDivStyle>
      {props.followers.map(item => (
        <UserCardDiv>
          <h2>{item.login}</h2>
          <img src={item.avatar_url} />

        </UserCardDiv>
      ))}
    </BigDivStyle>
  );
}

export default Followers;