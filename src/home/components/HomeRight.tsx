import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

import TextField from "@mui/material/TextField";
// import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import Checkbox from "@mui/material/Checkbox";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

import { getUser } from "../services/getUser";
import { IUser } from "../../store/types";
import { useAppDispatch } from "../../hooks/redux";
import { addUser } from "../../store/userSlice";

type FormValues = {
	documentNumber: string;
	phone: string;
	licensePlate: string;
	acceptTerms: boolean;
};

export const HomeRight = () => {
	const [typeDoc, setTypeDoc] = useState("dni");
	const [isDisabled, setisDisabled] = useState(false);

	const handleChange = (event: SelectChangeEvent) => {
		setTypeDoc(event.target.value as string);
	};

	const handleChangecheck = (event: boolean) => {
		setisDisabled(!event);
	};

	const dispatch = useAppDispatch();

	const {
		handleSubmit,
		register,
		control,
		formState: { errors },
		// control,
	} = useForm<FormValues>({
		defaultValues: {
			documentNumber: "",
			phone: "",
			licensePlate: "",
			acceptTerms: true,
		},
	});

	const navigate = useNavigate();

	const onSubmit = async (data: FormValues) => {
		console.log(data);
		const api = await getUser();
		const user: IUser = {
			username: api.username,
			email: api.email,
			name: api.name,
			phone: data.phone,
			documentNumber: data.documentNumber,
			acceptTerms: data.acceptTerms,
			car: {
				plate: data.licensePlate,
				mark: "Wolkswagen",
				year: 2023,
				model: "Golf",
			},
		};

		dispatch(addUser(user));
		navigate("your-plan");
	};

	const getMsgError = (
		type: string | undefined,
		name: string,
		count: number
	) => {
		let msg = "";

		if (type == "required") msg = `${name} es requerido`;
		else if (type == "minLength") msg = `Número minimo es ${count}`;
		else if (type == "maxLength") msg = `Número maximo es ${count}`;
		return msg;
	};

	return (
		<section className="home-right">
			<h2>Déjanos tus datos</h2>
			<form className="form-get-data" onSubmit={handleSubmit(onSubmit)}>
				<div className="row-form">
					<FormControl fullWidth className="wid-cus-select">
						<Select
							IconComponent={KeyboardArrowDownIcon}
							value={typeDoc}
							onChange={handleChange}
						>
							<MenuItem value="dni">DNI</MenuItem>
						</Select>
					</FormControl>
					<TextField
						id="documentNumber"
						label="Nro. de doc"
						type="number"
						{...register("documentNumber", {
							required: true,
							pattern: /[0-9]{8}/,
							minLength: 8,
							maxLength: 8,
						})}
						error={!!errors.documentNumber}
						helperText={getMsgError(
							errors.documentNumber?.type,
							"Nro. de doc",
							8
						)}
					/>
				</div>
				<div className="row-form">
					<TextField
						fullWidth
						id="phone"
						label="Celular"
						type="number"
						{...register("phone", {
							required: true,
							pattern: /[0-9]{9}/,
							minLength: 9,
							maxLength: 9,
						})}
						error={!!errors.phone}
						helperText={getMsgError(
							errors.phone?.type,
							"Celular",
							9
						)}
					/>
				</div>
				<div className="row-form">
					<TextField
						fullWidth
						id="licensePlate"
						label="Placa"
						{...register("licensePlate", {
							required: "Placa es requerido",
						})}
						error={!!errors.licensePlate}
						helperText={errors.licensePlate?.message}
					/>
				</div>

				<div className="row-form cus-form">
					<FormControlLabel
						control={
							<Controller
								control={control}
								name="acceptTerms"
								rules={{ required: true }}
								render={() => (
									<Checkbox
										defaultChecked
										color="success"
										onChange={(e) =>
											handleChangecheck(e.target.checked)
										}
									/>
								)}
							/>
						}
						label=""
					/>
					<div className="check-label">
						<span>Acepto la </span>
						<a href="/">
							Política de Protección de Datos Personales
						</a>
						y los <a href="/">Términos y Condiciones</a>.
					</div>
				</div>
				<div className="group-btn">
					<button className="btn" disabled={isDisabled}>
						COTÍZALO
					</button>
				</div>
			</form>
		</section>
	);
};
