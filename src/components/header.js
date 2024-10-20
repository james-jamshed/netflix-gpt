import React from 'react';
import { signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { auth} from "../utils/firebase";
import { useDispatch, useSelector } from 'react-redux'; 
import { useEffect } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import {  addUser, removeUser} from "../utils/userSlice";
import { LOGO } from '../utils/constants';





const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector ((store) => store.user);
 
  const handleSignOut =()=>{
    signOut(auth)
    .then(() => {
    })
    .catch((error) => {
      // An error happened.
      navigate("/error");
    });

  };

  useEffect(()=>{
    const unsubcribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        
        const {uid, email, displayName,photoURL }= user;
        dispatch(
          addUser ({
           uid: uid,
           email: email, 
           displayName: displayName,
           photoURL: photoURL,
          })
        );
        navigate("/browse");
      } else {
        // User is signed out
        dispatch(removeUser());
        navigate("/");
      }
    });
    // unscribe when component unmounds
    return ()=> unsubcribe();
  },[]);

  return( 
  <div className='absolute w-screen px-8 py-2 bg-gradient-to-b from-black  z-10 flex justify-between'>
    <img 
    className='w-44'
    src={LOGO}
    alt='"logo'
    />
    
    {user &&  (
        <div className='flex p-2'>
        <img className='w-10 h-10 rounded-full object-cover mt-3 ' 
        alt='usericon' 
        src={user?.photoURL}
        />
       <button  onClick = {handleSignOut} className='font-bold text-white ml-2' >
       Sign Out
        </button>
       </div>
      )}
      
       
    
    

    
   </div>
  );
};

export default Header;