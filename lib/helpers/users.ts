import { UserInterface } from "@/interfaces/users.interface";
import fs from "fs";

const usersFolderPath = "./data";
const dataFilePath = `${usersFolderPath}/users.json`;

export const getUsers = () => {
  let jsonData = fs.readFileSync(dataFilePath, "utf8");
  return JSON.parse(jsonData);
};

export const getUser = (id: string) => {
  let users: UserInterface[] = getUsers();
  return users.find((user) => user.id === id);
};

export const createUser = (user: UserInterface) => {
  const users: UserInterface[] = getUsers();
  const newUsers = [...users, user];
  editUsersFile(newUsers);
};

export const updateUser = (id: string, user: UserInterface) => {
  const users: UserInterface[] = getUsers();
  const newUsers = [...users];
  const userToUpdate = newUsers.find((user) => user.id === id)!;
  const index = newUsers.indexOf(userToUpdate);
  newUsers[index] = user;
  editUsersFile(newUsers);
};

export const deleteUser = (id: string) => {
  const users: UserInterface[] = getUsers();
  const filteredUsers = users.filter((user) => user.id !== id);
  editUsersFile(filteredUsers);
};

const editUsersFile = (users: UserInterface[]) => {
  const jsonData = JSON.stringify(users);
  fs.writeFileSync(dataFilePath, jsonData, "utf8");
};
