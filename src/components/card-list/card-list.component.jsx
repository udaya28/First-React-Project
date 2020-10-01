import React from 'react';
import './card-list.styles.css';

export const CardList = (props) => {
    console.log(props.users)
  return (
    <div className="card-list">
        
      {
      props.users.map((user) => (
        <h1 key={user.id} className="user">
          {user.name}
        </h1>
      ))}
    </div>
  );
};
