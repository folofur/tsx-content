import React, { useState } from "react";

const ThingList: React.FC = () => {
  const [thing, setThing] = useState("");
  const [things, setThings] = useState<string[]>([]);

  const onClick = () => {
    setThing("");
    setThings([...things, thing]);
  };
  return (
    <div>
      <h4>List of Things</h4>
      <ul>
        {things.map(thing => 
          <li key={thing}>{thing}</li>
        )}
      </ul>
      <input value={thing} onChange={(e) => setThing(e.target.value)} />
      <button onClick={onClick}>Add Thing</button>
    </div>
  );
};

export default ThingList;
