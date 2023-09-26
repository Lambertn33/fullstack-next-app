import {
  createSlice,
  AnyAction,
  ThunkDispatch,
  PayloadAction,
} from "@reduxjs/toolkit";
import { getUsers, deleteUser as deleteUserService } from "@/services/users.services";
import { UserInterface } from "@/interfaces/users.interface";

interface UserState {
  users: UserInterface[] | null;
  loading: boolean;
  error: string | null;
}

const initialState: UserState = {
  users: null,
  loading: false,
  error: null,
};

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    fetchUsersPending: (state) => {
      state.loading = true;
      state.error = null;
    },
    fetchUsersFulfilled: (state, action: PayloadAction<UserInterface[]>) => {
      state.loading = false;
      state.users = action.payload;
    },
    fetchUsersRejected: (state, action: PayloadAction<string>) => {
      state.loading = false;
      state.error = action.payload;
    },
    deleteUserPending: (state) => {
      state.loading = true;
      state.error = null;
    },
    deleteUserFulfilled: (state, action: PayloadAction<any>) => {
      state.loading = false;
      state.users = state.users!.filter(
        (user) => user.id !== action.payload.id
      );
    },
    deleteUserRejected: (state, action: PayloadAction<string>) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const {
  fetchUsersPending,
  fetchUsersFulfilled,
  fetchUsersRejected,
  deleteUserFulfilled,
  deleteUserPending,
  deleteUserRejected,
} = usersSlice.actions;

export default usersSlice.reducer;

export const fetchUsers =
  () => async (dispatch: ThunkDispatch<UserState, void, AnyAction>) => {
    dispatch(fetchUsersPending());

    try {
      const data = await getUsers();
      dispatch(fetchUsersFulfilled(data.users));
    } catch (error: any) {
      dispatch(fetchUsersRejected(error.message));
    }
  };

export const deleteUser =
  (userId: string) =>
  async (
    
    dispatch: ThunkDispatch<UserState, void, AnyAction>
  ) => {
    dispatch(deleteUserPending());

    try {
      const data = await deleteUserService(userId);
      dispatch(deleteUserFulfilled(userId));
    } catch (error: any) {
      dispatch(deleteUserRejected(error.message));
    }
  };
