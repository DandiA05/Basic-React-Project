import { useEffect, useState } from "react";

const useUsers = () => {
  const [users, setUsers] = useState();

  useEffect(() => {
    setUsers(["A", "B", "C"]);
  }, []);

  const deleteUser = (user) => {
    setUsers(users.filter((filterUser) => user != filterUser));
  };

  const addUser = (user) => {
    setUsers([...user, user]);
  };

  return [users, deleteUser, addUser];
};

export default useUsers;
