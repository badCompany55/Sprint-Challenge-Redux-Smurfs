import React from 'react';
import {connect} from 'react-redux';
import {addingSmurf} from '../actions';

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      age: '',
      height: '',
    };
  }

  captureInput = e => {
    this.setState({[e.target.id]: e.target.value});
  };

  submit = e => {
    e.preventDefault();
    let smurf = {...this.state};
    this.props.addingSmurf(smurf);
    this.setState({name: '', age: '', height: ''});
  };

  render() {
    return (
      <div className="formCont">
        <form className="form" onSubmit={this.submit}>
          <label className="name" htmlFor="name">
            Name:
          </label>
          <input
            id="name"
            type="text"
            value={this.state.name}
            onChange={this.captureInput}
          />
          <label className="age" htmlFor="age">
            Age:
          </label>
          <input
            id="age"
            type="age"
            value={this.state.age}
            onChange={this.captureInput}
          />
          <label className="height" htmlFor="height">
            Height:
          </label>
          <input
            id="height"
            type="text"
            value={this.state.height}
            onChange={this.captureInput}
          />
          <button>Submit</button>
        </form>
      </div>
    );
  }
}

export default connect(
  null,
  {addingSmurf},
)(Form);
