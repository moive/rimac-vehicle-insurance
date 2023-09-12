/* eslint-disable no-mixed-spaces-and-tabs */
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { UserState } from "./types";

const initialState: UserState = {
	users: [
		{
			id: 1,
			name: "Leanne Graham",
			username: "Bret",
			email: "Sincere@april.biz",
			car: {
				plate: "C2U-115",
				mark: "Wolkswagen",
				year: 2019,
				model: "Golf",
			},
		},
	],
};

export const userSlice = createSlice({
	name: "user",
	initialState,
	reducers: {
		addUser: (state, action: PayloadAction<number>) => {
			const newUser = state.users.find((p) => p.id == action.payload);
			console.log(newUser);
		},

		clearUser: (state) => {
			state.users = initialState.users;
		},
	},
});

export const { addUser, clearUser } = userSlice.actions;

export default userSlice.reducer;
