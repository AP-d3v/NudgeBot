import { getAuth, signInWithPopup, GoogleAuthProvider, UserCredential, getAdditionalUserInfo  } from "firebase/auth";
import { FirebaseError, initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { error, info } from "console";
import { redirect } from 'next/navigation'


const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
  measurementId: process.env.NEXT_PUBLIC_MEASUREMENT_ID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = app.name && typeof window !== 'undefined' ? getAnalytics(app) : null;

const provider = new GoogleAuthProvider();

//TODO
// fix cross origin issue
//set up api endpoint for post to db?
// flesh out Profile-info page

const auth = getAuth();
let newUserRedirect = false;

export async function authentication(): Promise<void>{
    try {
   const result = await signInWithPopup(auth, provider);
    console.log("called");
    // This gives you a Google Access Token. You can use it to access the Google API.
    const credential = GoogleAuthProvider.credentialFromResult(result);
    if(credential){
    const token = credential.accessToken;
    }else {
  // Handle the case where there is a user but no OAuth token
  console.log("User signed in, but no extra OAuth credentials provided.");
    }
    // The signed-in user info.
    const user = result.user;
    const userInfo = getAdditionalUserInfo(result);
    if(userInfo?.isNewUser){
        console.log('new user');
        newUserRedirect = true
    }

} catch (error:unknown) {
    // Handle Errors here.
    if (error instanceof FirebaseError){
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.customData?.email;
    // The AuthCredential type that was used.
    const credential = GoogleAuthProvider.credentialFromError(error);
    }
    // ...
  }
  if(newUserRedirect){
    redirect('/Profile-Info');
  }
};
