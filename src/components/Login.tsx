import React, { useState, useRef } from "react";
import { registerUser, loginUser } from "../utility/auth";
import "../styles/Login.css";

type LoginProps = {
  setIsLoggedIn: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function Login(props: LoginProps) {
  const [newUser, setNewUser] = useState(false);
  const emailRef = useRef<HTMLInputElement | null>(null);
  const passwordRef = useRef<HTMLInputElement | null>(null);

  const toggleLogin = () => {
    setNewUser(!newUser);
  };

  const submitForm = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (emailRef.current && passwordRef.current) {
      const res = newUser
        ? await registerUser(emailRef.current.value, passwordRef.current.value)
        : await loginUser(emailRef.current.value, passwordRef.current.value);
      if (res.token) {
        props.setIsLoggedIn(true);
      } else alert(res.error);
    }
  };

  return (
    <section className="Login">
      <form onSubmit={(e) => submitForm(e)}>
        <h1>{newUser ? "Create Account:" : "Sign-In:"}</h1>
        <input type="email" placeholder="Email" ref={emailRef} required />
        <input
          type="password"
          placeholder="Password"
          ref={passwordRef}
          required
        />
        <button type="submit">Submit</button>
        <button className="toggle-login" type="button" onClick={toggleLogin}>
          {newUser ? "Returning User? - Sign-In" : "New User? - Create Account"}
        </button>
      </form>
    </section>
  );
}
