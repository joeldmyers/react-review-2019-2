import React, { Component } from 'react';
import { connect } from 'react-redux';
import changeLocation from '../../actions/changeLocation';

class InputField extends Component {
  constructor(props) {
    super(props);
    this.state = {
      initialField: 'Hi Joel'
    };
    this.updateInput = this.updateInput.bind(this);
  }

  updateInput(e) {
    console.log('ping', e);
    this.setState({
      initialField: e.target.value
    });
  }

  render() {
    return (
      <div>
        <input type="text" onKeyUp={this.updateInput}></input>
        <button>Save Text to Redux Store</button>
      </div>
    );
  }
}

// pulls things from redux and hands to component

const mapStateToProps = ({ location }) => ({ location });

// map actions to props
const mapDispatchToProps = dispatch => ({
  setLocation: location => dispatch(changeLocation)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(InputField);
