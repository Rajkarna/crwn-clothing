import React from 'react';

import SignIn from '../../components/signin/signin.component';
import SignUp from '../../components/signup/signup.component';

import { SignInAndSignUpContainer } from './sign-in-sign-up.styles';

const SignInAndSignUpPage = () => (
  <SignInAndSignUpContainer>
    <SignIn />
    <SignUp />
  </SignInAndSignUpContainer>
);

export default SignInAndSignUpPage;