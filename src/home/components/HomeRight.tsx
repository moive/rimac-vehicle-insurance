import { useState } from "react";

import TextField from "@mui/material/TextField";
// import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import Checkbox from "@mui/material/Checkbox";

import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

export const HomeRight = () => {
	const [typeDoc, setTypeDoc] = useState("dni");

	const handleChange = (event: SelectChangeEvent) => {
		setTypeDoc(event.target.value as string);
	};

	return (
		<section className="home-right">
			<h2>Déjanos tus datos</h2>
			<form className="form-get-data">
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
						error={false}
						id="documentNumber"
						label="Nro. de doc"
						defaultValue=""
					/>
				</div>
				<div className="row-form">
					<TextField
						error={false}
						fullWidth
						id="phone"
						label="Celular"
						defaultValue=""
					/>
				</div>
				<div className="row-form">
					<TextField
						error={false}
						fullWidth
						id="licensePlate"
						label="Placa"
						defaultValue=""
					/>
				</div>
				<div className="row-form cus-form">
					<FormControlLabel
						control={<Checkbox defaultChecked color="success" />}
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
					<button className="btn">COTÍZALO</button>
				</div>
			</form>
		</section>
	);
};
