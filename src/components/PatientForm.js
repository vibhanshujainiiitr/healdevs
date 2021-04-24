import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import { db } from '../firebase'

const PatientForm = ({ setUser, user }) => {

  const [diary, setDiary] = useState("");
  const [formVisible, setFormVisible] = useState(true);

  let history = useHistory()

  useEffect(() => {
    let date = new Date()
    if (user) {
      db.collection("questions").onSnapshot((snapshot) => {
        snapshot.docs.map((doc) => {
          if (doc.data().email === user.email) {
            if (doc.data().timestamp === date.getDate().toString() + date.getMonth().toString()) {
              setFormVisible(false);
              history.push("/");
            }
          }
        })
      });
    }
    else {
      history.push('/login');
    }
  }, [history, user])

  const handleSubmit = (e) => {
    e.preventDefault();
    const date = new Date();
    if (user) {
      db.collection("questions").add({
        email: user.email,
        dailyDiary: diary,
        timestamp: date.getDate().toString() + date.getMonth().toString()
      });
      history.push("/");
    }
    else {
      history.push("/login");
    }
  }

  return (
    <div>
      <div>
        <div>
          {formVisible ? (
            <form onSubmit={handleSubmit}>
              <p>How are you feeling today?</p>
              <textarea onChange={(e) => setDiary(e.target.value)}>
                {diary}
              </textarea>
              <br />
              <button type="submit">
                Submit
        </button>
            </form>
          ) : (
            <h2>You have filled the form</h2>
          )}
        </div>
      </div>
    </div>
  )
}

export default PatientForm
