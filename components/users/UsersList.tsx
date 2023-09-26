"use client";

import React, { useEffect } from "react";
import { useAppSelector, useAppDispatch } from "@/store/hooks";
import { fetchUsers } from "@/store/users/users-slice";
import { RootState } from "@/store";

const UsersList = () => {
  const { users, loading, error } = useAppSelector(
    (state: RootState) => state.users
  );
  const dispatch = useAppDispatch();
  useEffect(() => {
    // Fetch users when the component mounts
    dispatch(fetchUsers());
  }, [dispatch]);

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
            <p>
              {user.firstname} {user.lastname}
            </p>
          </div>
        );
      })}
      {users.length === 0 && <p>No Users available</p>}
    </>
  );
};

export default UsersList;
