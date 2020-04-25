import React, { Component } from 'react';

import './SignIn.scss';
import FormInput from '../FormInput/FormInput';
import CustomButton from '../CustomButton/CustomButton';

class SignIn extends Component {
    constructor(props){
        super(props);

        this.state = {
            email:"",
            password: ""
        }

        this.handleSubmit = event => {
            event.preventDefault();

            this.setState({ email: "", password: ""});
        };

        this.handleChange = event => {
            const { value, name } = event.target;

            this.setState( { [name]: value});
        }
    };
   render(){
       const { email, password } = this.state;
       return(
           <div className="signin">
               <h2 className="title">I already have an account</h2>
               <span className="subtitle">Sign in with your email and password</span>
               
               <form onSubmit={this.handleSubmit}>
                    <FormInput handleChange={this.handleChange} label="email" type="text" name="email" value={email} required />
                    <FormInput handleChange={this.handleChange} label="password" type="password" name="password" value={password} required />
                    <CustomButton type="submit">SIGNIN</CustomButton>
               </form>

           </div>
       )
   }
   
}

export default SignIn;