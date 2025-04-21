import React from 'react'
import UserProfile from './UserProfile';

const MainContent = () => {
  return (
    <div className='mainContent'>
        <h1>
            Welcome!
        </h1>
        <UserProfile name='Abdullah' age='20' location='NUST'/>
    </div>
  )
}

export default MainContent