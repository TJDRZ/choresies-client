import React, { useState, useRef } from "react";
import Header from "./Header";
import { registerUser, loginUser } from "../utility/auth";

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
    <main>
      <Header />
      <form onSubmit={(e) => submitForm(e)}>
        <button className="toggle-login" type="button" onClick={toggleLogin}>
          {newUser ? "Returning User? - Sign-In" : "New User? - Create Account"}
        </button>
        <h1>{newUser ? "Create Account:" : "Sign-In:"}</h1>
        <input placeholder="Email" type="email" ref={emailRef} required />
        <input
          placeholder="Password"
          type="password"
          ref={passwordRef}
          required
        />
        <button type="submit">Submit</button>
      </form>
    </main>
  );
}
