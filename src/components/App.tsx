import React, { useState } from "react";
import Menu from "./Menu";
import Login from "./Login";

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return <>{isLoggedIn ? <Menu /> : <Login setIsLoggedIn={setIsLoggedIn} />}</>;
}
