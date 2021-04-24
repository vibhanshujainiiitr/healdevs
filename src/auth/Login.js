import React from 'react';
import './login.css';
import { auth, googleAuthProvider } from '../firebase'

const Login = ({ history, setUser, user }) => {
  const googleLogin = async () => {
    auth.signInWithPopup(googleAuthProvider).then(async (result) => {
      const { user } = result;
      const idTokenResult = await user.getIdTokenResult();
      setUser({ email: user.email, token: idTokenResult.token })
      if(user.email === "pullstackdevelopers@gmail.com"){
        history.push("/doctor")
      }
      else {
        history.push("/patient")
      }
    }).catch((err) => {
      console.log(err)
    })
  }
  return (
    <div>
      <div class="container-fluid login">
        <div class="blurred-box">
          <div class="user-login-box">
            <div class="user-name">Login</div>
            <button class="glass" onClick={googleLogin}>
              Google
          </button>
            <button class="glass" onClick={googleLogin}>
              Facebook
          </button>
            <button class="glass" onClick={googleLogin}>
              Github
          </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login
