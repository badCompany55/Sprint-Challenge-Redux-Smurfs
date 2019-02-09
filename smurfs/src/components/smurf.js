import React from 'react';
import {connect} from 'react-redux';
import {deletingSmurf} from '../actions';

const Smurf = props => {
  const dHandler = () => {
    props.deletingSmurf(props.id);
    console.log(props.id);
  };
  return (
    <div className="smurfCont">
      <div className="name">{props.name}</div>
      <div className="age">{props.age}</div>
      <div className="height">{props.height}</div>
      <i className="fas fa-window-close" onClick={dHandler} />
    </div>
  );
};

export default connect(
  null,
  {deletingSmurf},
)(Smurf);
