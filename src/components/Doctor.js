import React, { useState, useEffect } from 'react'
import { db } from '../firebase'
import './doctor.css';
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
        <div class="row">

        <div className="doctor-heading col-lg-12"><h1>How's your patient feeling today?</h1></div>

          {
            data.map(({ userData, id }) => (
              <div className="col-lg-6 col-xl-6">
                <div class="doctor-box">
                  <div class="patient-details-box">
                    <h2>{userData.email}</h2>
                    <h3>How are you feeling today?<br />{userData.dailyDiary}</h3>
                  </div>
                </div>
              </div>
            ))
          }
        </div>
        <div className="end">
        </div>
      </div>
    </div>
  )
}

export default Doctor

