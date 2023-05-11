import React, { useState } from "react";

type Chore = {
  _id: string;
  name: string;
  index: number;
  date: Date;
  timer: number;
  person: string;
};

type ChoreProps = {
  _id: string;
  choreName: string;
};

const date = new Date();
date.toLocaleDateString();

export default function Chore(props: ChoreProps) {
  const [dueDate, setDueDate] = useState(date.toLocaleDateString());
  const [completeDate, setCompleteDate] = useState("");
  const [timer, setTimer] = useState(1);

  const newCompleteDate = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCompleteDate(e.target.value);
    //setDueDate(completeDate + timer)
  };

  const newTimer = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setTimer(Number(e.target.value));
    //setDueDate(completeDate + timer)
  };

  return (
    <div className="Chore">
      <time>Due: {dueDate}</time>
      <p>{props.choreName}</p>
      <div>
        <label htmlFor="complete-date">Last Completed: </label>
        <input id="complete-date" type="date" onChange={newCompleteDate} />
      </div>
      <div>
        <label htmlFor="timer">Choose an Interval: </label>
        <select id="timer" onChange={newTimer}>
          <option value="1">Daily</option>
          <option value="3">Semiweekly</option>
          <option value="7">Weekly</option>
          <option value="14">Biweekly</option>
          <option value="30">Monthly</option>
          <option value="60">Bimonthly</option>
          <option value="182">Semiannually</option>
          <option value="365">Yearly</option>
        </select>
      </div>
    </div>
  );
}
