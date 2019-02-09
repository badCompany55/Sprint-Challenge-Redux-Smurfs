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
      <div class="formCont">
        <form class="form" onSubmit={this.submit}>
          <label class="name" for="name">
            Name:
          </label>
          <input id="name" type="text" onChange={this.captureInput} />
          <label class="age" for="age">
            Age:
          </label>
          <input id="age" type="age" onChange={this.captureInput} />
          <label class="height" for="height">
            Height:
          </label>
          <input id="height" type="text" onChange={this.captureInput} />
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
