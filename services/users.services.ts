import { UserInterface } from "@/interfaces/users.interface";

export const getUsers = async () => {
  const response = await fetch("/api/users");
  return await response.json();
};

export const createUser = async (data: UserInterface) => {
  const response = await fetch("/api/users", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  return await response.json();
};
