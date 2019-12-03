import React from "react";
import Followers from "./Followers";

const UserCard = props => {
  return (
    <div>
      <h2>{props.user.name}</h2>
      <img src={props.user.avatar_url}/>
      <p><strong>Bio:</strong> {props.user.bio}</p>
      <h3>Followers: </h3>
      <Followers followers = {props.followers}/>

      
    </div>
  );
}

export default UserCard;