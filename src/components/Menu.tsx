import React, { useState, useRef } from "react";
import Chore from "./Chore";
import "../styles/Menu.css";

export default function Menu() {
  const [chores, setChores] = useState<JSX.Element[]>([]);
  const choreNameRef = useRef<HTMLInputElement | null>(null);

  const submitForm = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (choreNameRef.current) {
      setChores([
        ...chores,
        <Chore
          _id={crypto.randomUUID()}
          choreName={choreNameRef.current.value}
        />,
      ]);
      choreNameRef.current.value = "";
    }
  };

  // need a delete chores

  return (
    <section className="Menu">
      <form onSubmit={(e) => submitForm(e)}>
        <input
          type="text"
          placeholder="New Chore Name"
          ref={choreNameRef}
          required
        />
        <button type="submit">Add Chore</button>
      </form>
      {chores.map((chore) => (
        <div className="chore-border" key={chore.props._id}>
          <button className="chore-delete">X</button>
          {chore}
        </div>
      ))}
    </section>
  );
}
