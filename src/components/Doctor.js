import React, { useState, useEffect } from 'react'
import { db } from '../firebase'

const Doctor = ({ history, user, setUser }) => {

  const [data, setData] = useState([]);

  useEffect(() => {
    if (user) {
      if (user.email !== "pullstackdevelopers@gmail.com") {
        history.push("/")
      }
      if (user.email === "pullstackdevelopers@gmail.com") {
        db.collection("questions").orderBy("timestamp", "desc")
          .onSnapshot((snapshot) => {
            setData(snapshot.docs.map(doc => ({
              id: doc.id,
              userData: doc.data()

            })))
          })
      }
    }
  }, [user])

  return (
    <div>
      <div class="container-fluid doctor">

        <div className="doctor-heading"><h2>How's your patient feeling today?</h2></div>
        {
          data.map(({ userData, id }) => (
            <div class="doctor-box">
              <div class="patient-details-box">
                <p class="email">{userData.email}</p>
                <p class="diary">How are you feeling today?<br />{userData.dailyDiary}</p>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Doctor

