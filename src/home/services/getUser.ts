import { Fetch } from "../../shared/utils/Fetch";

/* eslint-disable @typescript-eslint/no-explicit-any */
export const getUser = async () => {
	const url = "https://jsonplaceholder.typicode.com/users/9";
	const user = await Fetch(url);
	return user;
};
