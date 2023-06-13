import React from "react";
import useUsers from "../hooks/useUsers";
import Anything from "./Anything";

const Users = () => {
  const [users, deleteUser, addUser] = useUsers;
  return (
    <div>
      {users.map((item) => (
        <Anything name={item.name} />
      ))}
    </div>
  );
};

export default Users;
