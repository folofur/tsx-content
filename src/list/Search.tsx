import React, { useState } from "react";

const users = [
  { name: "jill", age: 22 },
  { name: "matt", age: 24 },
  { name: "ryan", age: 55 },
  { name: "cassy", age: 33 },
];

const Search: React.FC = () => {
  const [name, setName] = useState("");

  const onSearch = () => {};
  return (
    <div>
      Search
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Type a name!"
      />
      <button onClick={onSearch}>Find User</button>
    </div>
  );
};

export default Search;
