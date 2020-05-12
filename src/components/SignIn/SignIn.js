import React, { Component } from 'react';

import './SignIn.scss';
import FormInput from '../FormInput/FormInput';
import CustomButton from '../CustomButton/CustomButton';

import{ signInWithGoogle, auth } from '../../firebase/firebase';

class SignIn extends Component {
    constructor(props){
        super(props);

        this.state = {
            email:"",
            password: ""
        }
    };

    handleSubmit = async event => {
        event.preventDefault();
        const { email, password } = this.state;
        
        try {
            await auth.signInWithEmailAndPassword(email, password);
            this.setState({ email:"", password: ""});
         }catch(error) {
            console.log(error);
        }
    };

    handleChange = event => {
        const { value, name } = event.target;

        this.setState( { [name]: value});
    }
    
   render(){
      
       return(
           <div className="signin">
               <h2 className="title">I already have an account</h2>
               <span className="subtitle">Sign in with your email and password</span>
               
               <form onSubmit={this.handleSubmit}>
                    <FormInput handleChange={this.handleChange} label="email" type="email" name="email" value={this.state.email} required />
                    <FormInput handleChange={this.handleChange} label="password" type="password" name="password" value={this.state.password} required />
                    <div className="buttons">
                        <CustomButton type="submit">SIGNIN</CustomButton>
                        <CustomButton onClick={ signInWithGoogle } isGoogleSignIn>Sign in with google</CustomButton>
                    </div>
               </form>

           </div>
       );
   }
   
}

export default SignIn;