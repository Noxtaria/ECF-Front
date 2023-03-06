import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { BASE_DB_URL } from "../../../firebaseConfig";
import { createSlice } from "@reduxjs/toolkit";

export const fetchUsers = createAsyncThunk("users/fetchUsers", async () => {
  const response = await axios.get(`${BASE_DB_URL}users.json`);

  if (response.status !== 200) {
    throw new Error("Someting went wrong when fetching ennmies...");
  }

  const tmpArray = [];

  for (const key in response.data) {
    tmpArray.push({ id: key, ...response.data[key] });
  }

  return tmpArray;
});

export const addUser = createAsyncThunk(
  "users/addUser",
  async (userValues, { getState }) => {
    const token = getState().authSlice.user.idToken;
    if (token) {
      const response = await axios.post(
        `${BASE_DB_URL}users.json?auth=${token}`,
        userValues
      );

      if (response.status !== 200) {
        throw new Error("Someting went wrong when adding an ennmy...");
      }

      return { id: response.data.name, ...userValues };
    }
  }
);

const usersSlice = createSlice({
  name: "users",
  initialState: {
    users: [],
    isLoading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchUsers.pending, (state) => {
      state.isLoading = true;
      state.users = [];
      state.error = null;
    });

    builder.addCase(fetchUsers.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });

    builder.addCase(fetchUsers.fulfilled, (state, action) => {
      state.isLoading = false;
      state.ennemies = action.payload;
    });

    builder.addCase(addUser.fulfilled, (state, action) => {
      state.users.push(action.payload);
    });
  },
});

export default usersSlice.reducer;
