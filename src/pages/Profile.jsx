import React, { useContext } from 'react'
import { Context } from '../main';

const Profile = () => {
  const { isAuthenticated, loading, user } = useContext(Context);

      console.log(user);
    
    <div>
      
    </div>
 
};

export default Profile
