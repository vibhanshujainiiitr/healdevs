import React, { useState, useEffect } from 'react'
import { db } from '../firebase'

const Doctor = ({ history, user, setUser }) => {

  return (
    <div>
      <div>
        <div><h2>This is the doctor name</h2></div>
        <p>Patient Email</p>
        <p>Patient diary</p>
      </div>
    </div>
  )
}

export default Doctor

