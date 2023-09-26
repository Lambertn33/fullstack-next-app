import { UserInterface } from "@/interfaces/users.interface";

export const getUsers = async () => {
  const response = await fetch("/api/users", {
    next: {
      revalidate: 2,
    },
  });
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

export const deleteUser = async (userId: string) => {
  const response = await fetch(`/api/users/${userId}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  });
  return await response.json();
};
