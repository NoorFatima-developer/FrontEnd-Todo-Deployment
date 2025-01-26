import React, { useContext } from 'react'
import { Context } from '../main';

function Profile() {

  const {isAuthenticated, loading, user} = useContext(Context);
  console.log(user);
  

  return (    
    <div>
      Profile
    </div>
  )
}

export default Profile
