import React, { Component } from "react";
import axios from "axios";
export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
      errorText: "",
    });
  }
  handleSubmit(event) {
    axios
      .post(
        "https://api.devcamp.space/sessions",
        {
          client: {
            email: this.state.email,
            password: this.state.password,
            errorText: "",
          },
        },
        { withCredentials: true }
      )
      .then((response) => {
        if (response.data.status === "created") {
          console.log("you have sucessfully loged in ");
        } else {
          this.setState({
            errorText: "You forgot your password again ...?",
          });
        }
      })
      .catch((error) => {
        console.log("some error occured ");
        this.setState({
          errorText: "something went wrong with the API",
        });
      });
    event.preventDefault();
  }
  render() {
    return (
      <div>
        <h1>LOG IN TO ACCESS YOUR DASHBOARD </h1>
        <div>{this.state.errorText}</div>
        <form onSubmit={this.handleSubmit}>
          <input
            type="email"
            name="email"
            placeholder="Your email"
            value={this.state.email}
            onChange={this.handleChange}
          />
          <input
            type="password"
            name="password"
            placeholder="Your password"
            value={this.state.password}
            onChange={this.handleChange}
          />
          <div>
            <button type="submit">Login</button>
          </div>
        </form>
      </div>
    );
  }
}
