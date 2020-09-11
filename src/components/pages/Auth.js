import React, { Component } from "react";
import Login from '../Auth/login'
import loginImage from '../../../static/assets/images/login.jpg';

export default class Auth extends Component {
  constructor(props){
    super(props)
    this.handleSuccesfulAuth=this.handleSuccesfulAuth.bind(this);
    this.handleUnsuccesfulAuth=this.handleUnsuccesfulAuth.bind(this);
  }
  handleSuccesfulAuth(){
    this.props.handleSuccesfulLogin();
    this.props.history.push('/');
  }
  handleUnsuccesfulAuth(){
    this.props.handleUnsuccesfulLogin();
  }
  render() {
    return (
    <div className='auth-page-wrapper'>
        <div className="left-column"
        style={{
            backgroundImage:`url(${loginImage})`
        }}
        />

        <div className="right-column">
        <Login 
        handleSuccesfulAuth={this.handleSuccesfulAuth}
        handleUnsuccesfulAuth={this.handleUnsuccesfulAuth}/>
        </div>
    </div>
    );
  }
}
