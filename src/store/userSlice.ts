/* eslint-disable no-mixed-spaces-and-tabs */
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IUser, UserState } from "./types";

const initialState: UserState = {
	user: {
		username: "",
		email: "",
		name: "",
		phone: "",
		documentNumber: "",
		acceptTerms: false,
		car: {
			plate: "",
			mark: "",
			year: 0,
			model: "",
		},
		// id: 1,
		// name: "Leanne Graham",
		// username: "Bret",
		// email: "Sincere@april.biz",
		// car: {
		// 	mark: "Wolkswagen",
		// 	year: 2019,
		// 	model: "Golf",
		// },
	},
};

export const userSlice = createSlice({
	name: "user",
	initialState,
	reducers: {
		addUser: (state, action: PayloadAction<IUser>) => {
			// const newUser = state.users.find((p) => p.id == action.payload);
			// console.log(newUser);
			console.log("action.payload", action.payload);
			state.user = action.payload;
			console.log(state);
		},

		clearUser: (state) => {
			state.user = initialState.user;
		},
	},
});

export const { addUser, clearUser } = userSlice.actions;

export default userSlice.reducer;
