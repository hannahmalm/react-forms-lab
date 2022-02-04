import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      message: ''
    };
  }

  //change the message value on click
  handleChange = event => {
    this.setState({
      message: event.target.value
    })
  }

  //This component takes one prop: maxChars which is a number — the maximum amount of characters a message can have.
  //This prop is being passed in from the App component with the value 280.
  //Its value should be saved in the component's state and should update on every change to the input.
  //Show the remaining characters in the component. 
  //It doesn't matter how you render it, as long as the number is correct. 

  //Add the necessary event handler to the <form> element in order to call the onSubmit callback prop.
  render() {
    let characterNumber = this.props.maxChars - this.state.message.length;
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" name="message" id="message" onChange={this.handleChange} value={this.state.message}/>
        {characterNumber}
      </div>
    )
  }
}

//saving input value in state - should update the state when typing
//character counter - should show the remaining characters counter
//should update the counter when typing


export default TwitterMessage;
