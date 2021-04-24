import React, { useState, useEffect } from 'react'
import { db } from '../firebase'

const Doctor = ({ history, user, setUser }) => {

  const [data, setData] = useState([]);

  useEffect(() => {
    if (user) {
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
      <div>
        <div><h2>This is the doctor name</h2></div>
        {
          data.map(({ userData, id }) => (
            <div>
              <div>
                <p>{userData.email}</p>
                <p>How are you feeling today?<br/>{userData.dailyDiary}</p>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Doctor

