import React, { useContext } from 'react'
import { Context } from '../main';
import Loader from '../components/Loader';

const Profile = () => {
  const { isAuthenticated, loading, user } = useContext(Context);


      //not getting user data...
      // console.log(user);
   return(
     loading ? <Loader/> :(
    <div>
      <h1>{user?.name}</h1>
      <p>{user?.email}</p>
    </div>
   )
  )
};

export default Profile
