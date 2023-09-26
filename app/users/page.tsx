import React, { Suspense } from "react";
import UsersList from "@/app/users/UsersList";
import Loading from "./loading";
import Link from "next/link";

const Users = () => {
  return (
    <main>
      <div className="flex items-center justify-between">
        <h2>New User</h2>
        <Link href="/users/create">Create New</Link>
      </div>

      <Suspense fallback={<Loading />}>
        <UsersList />
      </Suspense>
    </main>
  );
};

export default Users;
