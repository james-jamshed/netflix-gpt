export const LOGO =
"https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png";
export const USER_AVATAR =
"https://avatars.githubusercontent.com/u/124718310?v=4";

export const API_OPTIONS = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 
      'Bearer ' + process.env.REACT_APP_TMDB_KEY,
    } ,
  };

  export const  IMG_CDN_URL =
  "https://image.tmdb.org/t/p/w300";

  export const BG_URL ="https://assets.nflxext.com/ffe/siteui/vlv3/20bf1f4d-1c73-48fd-8689-310d6dd80efc/81bdc063-cb8f-4afe-8a02-a3131ca4ef5e/IN-en-20240812-POP_SIGNUP_TWO_WEEKS-perspective_WEB_7998f3b6-63e3-424a-8328-550cf777ddce_large.jpg"

  export const SUPPORTED_LANGUAGES = [
    {identifier:"en",name:"english"},
    {identifier:"hindi",name:"hindi"},
    {identifier:"urdu",name:"urdu"},
    {identifier:"spanish",name:"spanish"},
    
  ];

 export const groqApiKey = process.env.REACT_APP_GROQ_API_KEY;

