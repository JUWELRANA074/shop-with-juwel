import React from 'react';
import FormInput from '../../components/form-input/form-input.component';
import CustomButton from '../../components/custom-button/custom-button.component';

import { auth, signInWithGoogle } from '../../firebase/firebase.utils';

import './sign-in.styles.scss';

class SignIn extends React.Component {
     constructor(props){
          super();

          this.state={
               email:'',
               password:'',
          }
     }

     handelSubmit = async event =>{
          event.preventDefault();

          const {email, password} = this.state;

          try {
               await auth.signInWithEmailAndPassword(email, password);
               this.setState({ email:'',password:'' });
          } catch(error){
               console.log(error);
          }
     };

     handelChange = event =>{
          const {value, name} = event.target;

          this.setState({ [name]:value})
     };

     render() { 
            return ( <div className='sign-in'>
                    <h2>I Already Have A Account</h2>
                    <span>Sign In With Your Email And Password</span>

                    
               <form onSubmit={this.handelSubmit}>

               <FormInput name='email'
                 type='email'
                 value={this.state.email}
                 handleChange={this.handelChange}
                 label='Email'
                 required
                  />

                <FormInput 
                name='password'
                 type='password' 
                 value={this.state.password}
                 handleChange={this.handelChange}
                 label='Password'
                 required 
                  />
                
                <div className='buttons'>

                <CustomButton type='submit'> sign in  </CustomButton>
                <CustomButton onClick={signInWithGoogle} isGoogleSignIn>
                       Sign In With Google 
                       </CustomButton>

                </div>

               </form>

          </div> );
     }
}
 
export default SignIn;