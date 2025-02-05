import React, { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [signIn, setSignIn] = useState(true);

  const handleSignIn = () => {
    setSignIn(!signIn);
  };
  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/fb5cb900-0cb6-4728-beb5-579b9af98fdd/web/IN-en-20250127-TRIFECTA-perspective_cf66f5a3-d894-4185-9106-5f45502fc387_large.jpg"
          alt="bgImage"
        />
      </div>
      <form className="w-3/12 my-28 mx-auto right-0 left-0 p-12 absolute bg-black rounded-lg opacity-80 text-white">
        <h1 className="p-4 font-bold text-2xl">
          {signIn ? "Sign In" : "Sign Up"}
        </h1>
        {!signIn && (
          <input
            type="text"
            placeholder="Full Name"
            className="p-2  my-4 w-full bg-gray-500"
          />
        )}
        <input
          type="text"
          placeholder="Email Address"
          className="p-2  my-4 w-full bg-gray-500"
        />
        <input
          type="password"
          placeholder="Password"
          className="p-2  my-4 w-full bg-gray-500"
        />
        <button className="p-2  my-4 bg-red-700 w-full">
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
