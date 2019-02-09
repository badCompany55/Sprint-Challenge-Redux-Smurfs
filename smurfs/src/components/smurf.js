import React from 'react';

const Smurf = props => {
  return (
    <div className="smurfCont">
      <div className="name">{props.name}</div>
      <div className="age">{props.age}</div>
      <div className="height">{props.height}</div>
    </div>
  );
};

export default Smurf;
