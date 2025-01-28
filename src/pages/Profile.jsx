import React, { useContext } from 'react'
import { Context } from '../main';

const Profile = () => {
  const { isAuthenticated, loading, user } = useContext(Context);

      console.log(user);
    
    <div>
      <h1>{user?.name}</h1>
      <p>{user?.email}</p>
    </div>
 
};

export default Profile
