import React, { useRef, useState } from "react";
import Header from "./Header";
import validateData from "../utils/validateData";
import { auth } from "../utils/firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { BG_IMAGE_URL, USER_LOGO_URL } from "../utils/constants";

const Login = () => {
  const [signIn, setSignIn] = useState(true);
  const [errorMsg, setErrorMsg] = useState(null);
  const dispatch = useDispatch();

  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const handleSignOn = () => {
    const message = validateData(email.current.value, password.current.value);
    setErrorMsg(message);
    if (message) return;
    if (!signIn) {
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current.value,
            photoURL: USER_LOGO_URL,
          })
            .then(() => {
              const { uid, email, displayName, photoURL } = auth.currentUser;
              dispatch(
                addUser({
                  uid: uid,
                  email: email,
                  displayName: displayName,
                  photoURL: photoURL,
                })
              );
            })
            .catch((error) => {
              setErrorMsg(error.message);
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMsg(errorCode + "-" + errorMessage);
        });
    } else {
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMsg(errorCode + "-" + errorMessage);
        });
    }
  };

  const handleSignIn = () => {
    setSignIn(!signIn);
  };

  return (
    <div>
      <Header />
      <div className="absolute">
        <img src={BG_IMAGE_URL} alt="bgImage" />
      </div>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="w-3/12 my-16 mx-auto right-0 left-0 p-12 absolute bg-black rounded-lg bg-opacity-80 text-white"
      >
        <h1 className="p-4 font-bold text-2xl">
          {signIn ? "Sign In" : "Sign Up"}
        </h1>
        {!signIn && (
          <input
            ref={name}
            type="text"
            placeholder="Full Name"
            className="p-2  my-4 w-full bg-gray-500"
          />
        )}
        <input
          type="text"
          placeholder="Email Address"
          className="p-2  my-4 w-full bg-gray-500"
          ref={email}
        />
        <input
          type="password"
          placeholder="Password"
          className="p-2  my-4 w-full bg-gray-500"
          ref={password}
        />
        <p className="text-red-600">{errorMsg}</p>
        <button
          className="p-2  my-4 bg-red-700 w-full rounded-lg"
          onClick={handleSignOn}
        >
          {signIn ? "Sign In" : "Sign Up"}
        </button>
        <p className="p-2 cursor-pointer" onClick={handleSignIn}>
          {signIn
            ? "New to Netflix? Sign Up Now"
            : "Already registered? Sign In"}
        </p>
      </form>
    </div>
  );
};

export default Login;
