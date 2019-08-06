import React, { Component } from 'react'
import { Button, Form, FormGroup, Label, Input } from 'reactstrap'
import axios from 'axios'

class LoginForm extends Component {
  state = {
    username: '',
    password: ''
  }

logIn = () => {
  console.log('run log in function')
  axios ({
    method: 'POST',
    url: 'https://insta.nextacademy.com/api/v1/login',
    data: {
        username: this.state.username,
        password: this.state.password
    }
  })
  .then(response => {
    console.log(response.data)
    console.log(response.data.status)
  })


}



handleInput =(event) => {
  this.setState({
    [event.target.name]: event.target.value

  })

}

  render() {
    return (
      <Form>
        <FormGroup>
          <Label>Username</Label>
          <Input
            type="text"
            name="username"
            placeholder="At least 5 characters"
            onChange = {this.handleInput}
          />
        </FormGroup>
        <FormGroup>
          <Label>Password</Label>
          <Input type="password" name="password" onChange = {this.handleInput} />
        </FormGroup>
        <p onClick={this.props.toggleForm} className="text-info">Click here to sign up</p>
        <Button color="info" onClick={this.logIn}>Submit</Button>
      </Form>
    )
  }
}

export default LoginForm
