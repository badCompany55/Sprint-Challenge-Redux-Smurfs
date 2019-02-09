import React from 'react';
import {connect} from 'react-redux';
import Smurf from './smurf.js';
import {getSmurfs} from '../actions';

class SmurfList extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.getSmurfs();
  }

  render() {
    return (
      <div className="listCon">
        {this.props.smurfs.map(smurf => {
          return (
            <Smurf
              key={smurf.id}
              name={smurf.name}
              age={smurf.age}
              height={smurf.height}
              id={smurf.id}
            />
          );
        })}
      </div>
    );
  }
}

const mstp = state => {
  return {
    smurfs: state.smurfs,
  };
};

export default connect(
  mstp,
  {getSmurfs},
)(SmurfList);
