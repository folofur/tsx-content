import React, { useState } from "react";

const users = [
  { name: "jill", age: 22 },
  { name: "matt", age: 24 },
  { name: "ryan", age: 55 },
  { name: "cassy", age: 33 },
];

const Search: React.FC = () => {
  const [name, setName] = useState("");

  // for foundUser, it has possibility to be undefined or an object 
  // so here we initialize state with generic type (object and undefined)
  const [foundUser, setFoundUser] = useState<{name: string, age: number} | undefined>();

  const onSearch = () => {
    const foundUser = users.find((user) => {
      return user.name === name;
    });

    setFoundUser(foundUser);


  };
  return (
    <div>
      Search
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Type a name!"
      />
      <button onClick={onSearch}>Find User</button>
      <div>
        {foundUser && foundUser.name}
        
      </div>
    </div>
  );
};

export default Search;
