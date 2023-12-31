"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { UserInterface } from "@/interfaces/users.interface";
import { createUser } from "@/services/users.services";

const TicketForm = () => {
  const router = useRouter();

  const [user, setUser] = useState({
    username: "",
    firstname: "",
    lastname: "",
    isSubmitting: false,
  });

  const inputChangedHandler = (input: any, value: any) => {
    setUser((prevValues) => {
      return {
        ...prevValues,
        [input]: value,
      };
    });
  };

  const createUserHandler = async (e: React.FormEvent) => {
    e.preventDefault();
    const newUser: UserInterface = {
      username: user.username,
      firstname: user.firstname,
      lastname: user.lastname,
    };

    await createUser(newUser);
    router.refresh();
    router.push("/users");
  };

  return (
    <form className="w-1/2" onSubmit={createUserHandler}>
      <label>username</label>
      <input
        required
        type="text"
        minLength={6}
        maxLength={28}
        value={user.username}
        onChange={(e) => inputChangedHandler("username", e.target.value)}
      />

      <label>first name</label>
      <input
        required
        minLength={2}
        maxLength={50}
        type="text"
        value={user.firstname}
        onChange={(e) => inputChangedHandler("firstname", e.target.value)}
      />

      <label>last name</label>
      <input
        required
        minLength={2}
        maxLength={50}
        type="text"
        value={user.lastname}
        onChange={(e) => inputChangedHandler("lastname", e.target.value)}
      />
      <button className="btn-primary" disabled={user.isSubmitting}>
        {user.isSubmitting ? "Please wait..." : "Add User"}
      </button>
    </form>
  );
};

export default TicketForm;
