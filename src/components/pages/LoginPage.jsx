import React, { Component } from 'react';
import LoginForm from '../forms/LoginForm';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { login } from '../../actions/auth';

class LoginPage extends Component {
  submit = data => this.props.login(data).then(() => this.props.history.push('/dashboard'));

  render() {
    return (
      <div>
        <h1>Login Page</h1>
        <LoginForm submit={this.submit} />
      </div>
    );
  }
}
LoginPage.propTypes = {
  // Provided by the react-router
  history: PropTypes.shape({
    push: PropTypes.func.isRequired
  }).isRequired,
  // provided from the store
  login: PropTypes.func.isRequired
};
export default connect(null, { login })(LoginPage);
