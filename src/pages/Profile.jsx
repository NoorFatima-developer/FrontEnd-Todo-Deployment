import React from 'react'

function Profile() {

  const {isAuthenticated, loading, user} = useContext(Context);

  return (    
    <div>
      Profile
    </div>
  )
}

export default Profile
