import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface UserState {
  username: string;
  bio: string;
  hobbies: string[];
}

const initialState: UserState = {
  username: "",
  bio: "",
  hobbies: [],
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUsername(state, action: PayloadAction<string>) {
      state.username = action.payload;
    },
    setBio(state, action: PayloadAction<string>) {
      state.bio = action.payload;
    },
    setHobbies(state, action: PayloadAction<string[]>) {
      state.hobbies = action.payload;
    },
    addHobby(state, action: PayloadAction<string>) {
      state.hobbies.push(action.payload);
    },
    removeHobby(state, action: PayloadAction<string>) {
      state.hobbies = state.hobbies.filter((hobby) => hobby !== action.payload);
    },
  },
});

export const { setUsername, setBio, setHobbies, addHobby, removeHobby } =
  userSlice.actions;

export default userSlice.reducer;
