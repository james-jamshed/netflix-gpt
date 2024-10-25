import React from 'react';
import { signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { auth} from "../utils/firebase";
import { useDispatch, useSelector } from 'react-redux'; 
import { useEffect } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import {  addUser, removeUser} from "../utils/userSlice";
import { LOGO, SUPPORTED_LANGUAGES } from '../utils/constants';
import {toggleGptSearchView} from "../utils/gptSlice";
import {changeLanguage} from "../utils/configSlice";





const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector ((store) => store.user);
  const showGptSearch = useSelector((store)=> store.gpt.showGptSearch)
  
 
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
  },[dispatch, navigate]);
  
  const handleGptSearchClick =()=>{
    // Toggle GPT Search
    dispatch(toggleGptSearchView());
  };
  const handleLanguageChange = (e) =>{
   dispatch(changeLanguage(e.target.value));
    
  }

  return( 
  <div className='absolute w-screen px-8 py-2 bg-gradient-to-b from-black  z-10 flex md:justify-between   flex-col md:flex-row  '>
    <img 
    className='w-44 mx-auto md:mx-0'
    src={LOGO}
    alt='"logo'
    />
    
    {user &&  (
        <div className='flex p-2 -mt-7 md:-mt-0 justify-between'>
       {  showGptSearch && (
        <select className='p-2 m-2 rounded-md bg-gray-900 text-white'
          onChange={handleLanguageChange}>
            {SUPPORTED_LANGUAGES.map((lang)=>(
            <option key={lang.identifier} value={lang.identifier}>
              {lang.name}
              </option>
            ))}

          </select>
        )}
          <button 
          onClick ={handleGptSearchClick} className='py-2 px-4 my-2 text-white bg-purple-600 rounded-lg mx-4'>
            {showGptSearch ? "Homepage" :"GPT Search"}
            </button>
        <img className='hidden md:block w-10 h-10 rounded-full object-cover mt-3 ' 
        alt='usericon' 
        src={user?.photoURL}
        />
       <button  onClick = {handleSignOut} 
       className='font-bold text-white ml-2' 
       >
       Sign Out
        </button>
       </div>
      )}
      
       
    
    

    
   </div>
  );
};

export default Header;