import React from 'react'
import UserProfile from './UserProfile';
import Welcome from './Welcome';
import Time from './Time';

const MainContent = () => {
  return (
    <div className='mainContent'>
        <Welcome/>
        <Time/>
        <UserProfile name='Abdullah' age='20' location='NUST'/>
    </div>
  )
}

export default MainContent