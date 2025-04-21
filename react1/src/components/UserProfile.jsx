import React from 'react'
import './userProfile.css'
import LoginButton from './LoginButton'
import Time from './Time'

const UserProfile = (props) => {
  return (
    <div className='userProfile'>
        <div className="card">
            <div className='heading'>
                <h3>User Profile</h3>
            </div>
            <div className="content">
                <p>Name: {props.name}</p>
                <p>Age: {props.age}</p>
                <p>Location: {props.location}</p>
            </div>
        </div>
        <LoginButton/>
    </div>
  )
}

export default UserProfile