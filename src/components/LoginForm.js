import React from "react";

class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {
      username: '',
      password: ''
    };
  }

  //have a hangle change and a handle submit event

  //change the name to the value
  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  // handleSubmit = event => {
  //   event.preventDefault() //this is the same as in JS
  //   if (this.state.username !== " " && this.state.password !== " ") {
  //        this.props.handleLogin(this.state) 
  //       }//handle login callback prop should be called 
  // }

  handleSubmit = event => {
    event.preventDefault()
    if (!this.state.username || !this.state.password) return
    this.props.handleLogin(this.state)
  }

/* <input
id="username"
type="text"
name="username"
value={this.state.username}
onChange={this.handleInputChange}
/> */

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label>
            Username
            <input id="username" name="username" type="text" value={this.state.username} onChange={this.handleInputChange} />
          </label>
        </div>
        <div>
          <label>
            Password
            <input id="password" name="password" type="password" value={this.state.password} onChange={this.handleInputChange}/>
          </label>
        </div>
        <div>
          <button type="submit">Log in</button>
        </div>
      </form>
    );
  }
}

export default LoginForm;
