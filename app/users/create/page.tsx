import React from "react";
import UserForm from "@/app/users/create/UserForm";
import Link from "next/link";

const CreateUser = () => {
  return (
    <main>
      <div className="flex items-center justify-between">
        <h2>New User</h2>
        <Link href="/users">Users List</Link>
      </div>
      <UserForm />
    </main>
  );
};

export default CreateUser;
