import React from 'react'
import { auth, googleAuthProvider } from '../firebase'

const Login = ({history,setUser,user}) => {
  const googleLogin = async () => {
    auth.signInWithPopup(googleAuthProvider).then(async (result) => {
      const { user } = result;
      const idTokenResult = await user.getIdTokenResult();
      setUser({ email: user.email, token: idTokenResult.token })
    }).catch((err) => {
      console.log(err)
    })
  }
  return (
    <div>
      This is login page
      <button onClick={googleLogin}>
        Login
      </button>
    </div>
  )
}

export default Login
