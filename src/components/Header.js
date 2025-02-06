import { onAuthStateChanged, signOut } from "firebase/auth";
import React, { useEffect } from "react";
import { auth } from "../utils/firebase";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { addUser, removeUser } from "../utils/userSlice";
import { LOGO_URL, Netflix_USER_ICON_URL } from "../utils/constants";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        navigate("/error");
      });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });
    return () => unsubscribe();
  }, []);

  return (
    <div className="absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between">
      <img className="w-44" src={LOGO_URL} alt="logo" />
      {user && (
        <div className="flex p-6">
          <img className="w-10 h-10 p-1" alt="user" src={user.photoURL} />
          <img
            className="w-10 h-10 p-1"
            alt="usericon"
            src={Netflix_USER_ICON_URL}
          />
          <button className="text-white font-bold p-1" onClick={handleSignOut}>
            {" "}
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
