import React , {Component} from 'react'
import { signInWithGoogle, auth } from '../../firebase/firebase.utils'
import CustomButton from '../custom-button/custom-button.component'
import FormInput from '../form-input/form-input-component'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faCake } from '@fortawesome/free-solid-svg-icons'


import './signin.styles.scss'

class SignIn extends Component{
    constructor(props){
        super(props)
        this.state = {
            email : '',
            password : ''
        }
    }

    handleSubmit = async event => {
        event.preventDefault();
        const {email, password} = this.state;

        try{
            await auth.signInWithEmailAndPassword(email, password)
            this.setState({email:'', password:''})

        } catch(error){
            console.error(error);
        }

    }

    handleChange = event => {
        const {name, value} = event.target;
        this.setState({ [name] : value})
    }

    render() {
        return (
            <div className='sign-in'>
                <h3 className='title'>I already have an acoount</h3>
                <span>sign in with email and password</span>


                <form onSubmit={this.handleSubmit}>
                
                    <FormInput 
                        name="email" 
                        type="email" 
                        value = {this.state.email} 
                        label = 'email'
                        handleChange={this.handleChange}
                        required 
                    />
                
                    <FormInput 
                        name="password" 
                        type="password"
                        value = {this.state.password} 
                        label = 'password'
                        handleChange={this.handleChange}
                        required 
                    />

                <div className='buttons'>
                    <CustomButton type="submit"> sign in</CustomButton>
                    <CustomButton onClick={signInWithGoogle} isGoogleSignIn>sign in with google </CustomButton>
                </div>
                </form>
            </div>
        )
    }
}

export default SignIn;