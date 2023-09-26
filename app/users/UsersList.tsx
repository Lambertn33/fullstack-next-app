"use client";

import React, { useEffect } from "react";
import { useAppSelector, useAppDispatch } from "@/store/hooks";
import { fetchUsers, deleteUser } from "@/store/users/users-slice";
import { RootState } from "@/store";
import Link from "next/link";

const UsersList = () => {
  const { users, loading, error } = useAppSelector(
    (state: RootState) => state.users
  );
  const dispatch = useAppDispatch();
  
  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  const deleteUserHandler = (userId: string) => {
    dispatch(deleteUser(userId));
    location.reload();
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!users) {
    return null;
  }
  return (
    <>
      {users.map((user) => {
        return (
          <div key={user.id} className="card my-5">
            <h3>{user.username}</h3>
            <div className="flex justify-between items-center">
              <p>
                {user.firstname} {user.lastname}
              </p>
              <div className="flex gap-4 items-center">
                <Link href={`/users/${user.id}/edit`}>
                  <span className="text-primary">Edit</span>
                </Link>
                <button
                  className="btn-primary"
                  onClick={() => deleteUserHandler(user.id!)}
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        );
      })}
      {users.length === 0 && <p>No Users available</p>}
    </>
  );
};

export default UsersList;
