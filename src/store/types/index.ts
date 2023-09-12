export interface UserState {
	users: IUser[];
}

export interface IUser {
	id: number;
	name: string;
	username: string;
	email: string;
	car: ICar;
}

export interface ICar {
	plate: string;
	mark: string;
	year: number;
	model: string;
}
