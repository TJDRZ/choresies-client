import React, { useReducer } from "react";

type Chore = {
  _id: string;
  name: string;
  index: number;
  date: Date;
  timer: number;
  person: string;
};

export default function Chore() {
  return (
    <div className="Chore">
      <time>Next Due Date</time>
      <p>Chore Name</p>
      <input type="date" />
      <div>
        <label htmlFor="interval">Choose an Interval: </label>
        <select id="interval">
          <option>Daily</option>
          <option>Semiweekly</option>
          <option>Weekly</option>
          <option>Biweekly</option>
          <option>Monthly</option>
          <option>Bimonthly</option>
          <option>Semiannually</option>
          <option>Yearly</option>
        </select>
      </div>
    </div>
  );
}
