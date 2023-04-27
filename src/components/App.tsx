import React, { useState } from "react";
import Header from "./Header";
import Menu from "./Menu";
import Login from "./Login";

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <main className="App">
      <Header />
      {isLoggedIn ? <Menu /> : <Login setIsLoggedIn={setIsLoggedIn} />}
    </main>
  );
}
