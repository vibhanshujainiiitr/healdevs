import { useEffect, useState } from 'react';
import { Route, Switch } from 'react-router';
import './App.css';
import Login from './auth/Login';
import Landing from './components/Landing';
import PatientForm from './components/PatientForm';
import Doctor from './components/Doctor';
import { auth } from './firebase';
import 'bootstrap/dist/css/bootstrap.min.css'

const App = () => {

  const [user,setUser] = useState(null)

  useEffect(() => {
    const unSubscribe = auth.onAuthStateChanged(async (authUser) => {
      if (authUser) {
        const idTokenResult = await authUser.getIdTokenResult();
        console.log(user);
        setUser({ email: authUser.email, token: idTokenResult.token })

      }
    });
    return () => unSubscribe();
  }, [])

  return (
    <Switch>
      <Route exact path="/" render={(props) => <Landing {...props} setUser={setUser} user={user}/>} />
      <Route exact path="/login" render={(props) => <Login {...props} setUser={setUser} user={user}/>} />
      <Route exact path='/patient' render={(props) => (<PatientForm {...props} setUser={setUser} user={user} />)} />
      <Route exact path="/doctor" render={(props) => (<Doctor {...props} setUser={setUser} user={user} />)} />
    </Switch>
  );
}

export default App;
