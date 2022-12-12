import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../features/UserSlice";
import "../styles/Login.css";
import { auth } from "./Firebase";

const Login = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [photoURL, setPhotoURL] = useState("");

  const dispatch = useDispatch();

  const loginToApp = (e) => {
    e.preventDefault();

    auth
      .signInWithEmailAndPassword(email, password)
      .then((userAuth) => {
        dispatch(
          login({
            name: userAuth.user.displayName,
            email: userAuth.user.email,
            id: userAuth.user.uid,
            photoUrl: userAuth.user.photoURL,
          })
        );
      })
      .catch((error) => alert(error));
  };

  const register = () => {
    if (!name) {
      return alert("PLease enter a Full Name");
    }

    auth
      .createUserWithEmailAndPassword(email, password)
      .then((userAuth) => {
        userAuth.user
          .updateProfile({
            displayName: name,
            photoURL: photoURL,
          })
          .then(() => {
            dispatch(
              login({
                name: name,
                email: userAuth.user.email,
                id: userAuth.user.uid,
                photoUrl: photoURL,
                /*  name: userAuth.name,
            email: userAuth.email,
            id: userAuth.uid,
            photoUrl: userAuth.photoURL, */
              })
            );
          });
      })
      .catch((error) => {
        alert(error);
      });
  };
  return (
    <div className="login">
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/0/01/LinkedIn_Logo.svg"
        alt=""
      />

      <form>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          type="text"
          placeholder="Full Name (required if registring)"
        />
        <input
          value={photoURL}
          onChange={(e) => setPhotoURL(e.target.value)}
          type="text"
          placeholder="Enter photo URL (Optional)"
        />
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          placeholder="Email"
        />
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          placeholder="Password"
        />
        <button onClick={loginToApp} type="submit">
          Sign in
        </button>
      </form>

      <p>
        Not a member?{" "}
        <span className="login__register" onClick={register}>
          Register Now
        </span>
      </p>
    </div>
  );
};

export default Login;
