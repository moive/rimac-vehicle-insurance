export interface UserState {
	user: IUser;
}

export interface IUser {
	id?: number | string;
	name: string;
	username: string;
	email: string;
	phone: string;
	documentNumber: string;
	acceptTerms: boolean;
	car: ICar;
}

export interface ICar {
	plate: string;
	mark: string;
	year: number;
	model: string;
}
