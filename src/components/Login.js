import { useRef, useState } from "react";
import { checkValidData }from "../utils/validate";
import Header from './Header';
import { createUserWithEmailAndPassword,signInWithEmailAndPassword,updateProfile } from "firebase/auth";
import {auth} from "../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { USER_AVATAR } from "../utils/constants";

const Login = () => {
  const [isSignInForm,setIsSignInForm] = useState(true);
  const [errorMessage, seterrorMessage] = useState(null);
  const dispatch = useDispatch();
  const name =useRef(null);
  const email = useRef(null);
  const password = useRef(null);


 const handleButtonClick =()=>{
  //validate the form data
  if (!isSignInForm && (!name.current || name.current.value.trim() === "")) {
    seterrorMessage("Full Name is required.");
    return;
  }
  
   const message = checkValidData (email.current.value, password.current.value);
   seterrorMessage(message);
   if(message) return;
   //sign in / sign up logic

  if(!isSignInForm){
    //sign up logic
    createUserWithEmailAndPassword(
      auth, 
      email.current.value,
       password.current.value)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    updateProfile(user, {
      displayName: name.current.value, 
      photoURL:USER_AVATAR,
    })
    .then(() => {
      // Profile updated!
      const {uid, email, displayName,photoURL }= auth.currentUser;
        dispatch(
          addUser ({
           uid: uid,
           email: email, 
           displayName: displayName,
           photoURL: photoURL,
          })
        );
    })
    .catch((error) => {
      // An error occurred
      seterrorMessage(error.message);
    });
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    seterrorMessage(errorCode + "-" + errorMessage);
    
  });
   }
   else{
    //sig in logic
    signInWithEmailAndPassword(auth, email.current.value, password.current.value)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
   
  
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    seterrorMessage(errorCode+ "-"+ errorMessage)
  });

  
   }

 };
  const toggleSignInForm =() =>{
    setIsSignInForm(!isSignInForm);
  };
  return (
    <div>
      <Header />
      <div className="absolute">
      <img 
      src="https://assets.nflxext.com/ffe/siteui/vlv3/20bf1f4d-1c73-48fd-8689-310d6dd80efc/81bdc063-cb8f-4afe-8a02-a3131ca4ef5e/IN-en-20240812-POP_SIGNUP_TWO_WEEKS-perspective_WEB_7998f3b6-63e3-424a-8328-550cf777ddce_large.jpg"
        alt = "logo"
        />
        </div>

        <form onSubmit={(e)=> e.preventDefault()} className="  w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80">
          <h1 className="font-bold text-3xl py-4">
            {isSignInForm ? "Sign In" : "Sign Up"}</h1>
          
           {!isSignInForm && (<input 
          type="text" 
          ref={name}
          placeholder="Full Name" 
          className="p-4 my-4 w-full bg-gray-800"
          />
           )}

           <input
           ref={email}
           type="text" 
           placeholder="Email Address" 
           className="p-4 my-4 w-full bg-gray-800"
           />

          <input 
          ref={password}
          type="password" 
          placeholder="Password" 
          className="p-4 my-4 w-full bg-gray-800"
          />
          <p className="text-red-500 font-bold text-lg px-2 py-2">{errorMessage}</p>

          <button className="p-4 my-6 bg-red-700 w-full rounded-lg" onClick={handleButtonClick}>
             {isSignInForm ? "Sign In" : "Sign Up"}
            </button> 
            <p className="py-4 cursor-pointer" onClick={toggleSignInForm}>
              {isSignInForm ?
               "New to Netflix ? Sign Up Now":
               "Already registered Sign In Now"}
            </p>
        </form>
      
    </div>
  );
};

export default Login;