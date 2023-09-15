/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from "react";
import { useAppSelector } from "../../hooks/redux";
import { IUser } from "../../store/types";

export const WelcomeRight = () => {
	const us = JSON.parse(localStorage.getItem("user") as string);
	const state = useAppSelector((state) => state);
	const [userLocal, setUserLocal] = useState<IUser>();
	const { user } = state.user;

	useEffect(() => {
		setUserLocal(us);
	}, []);

	return (
		<div className="welcome-right">
			<figure className="welcome-image">
				<img
					className="welcome-mobile"
					src="/assets/person-welcome-mobile.svg"
					alt=""
				/>
				<img
					className="welcome-desktop"
					src="/assets/person-welcome-desktop.svg"
					alt=""
				/>
			</figure>
			<div className="welcome-right-info">
				<div className="text-large">
					<span className="text-red">¡Te damos la bienvenida! </span>{" "}
					<br />
					Cuenta con nosotros para proteger tu vehículo
				</div>
				<p>
					Enviaremos la confirmación de compra de tu Plan Vehícular
					Tracking a tu correo:
					<br />{" "}
					<span className="bold-roboto">
						{user?.email ?? userLocal?.email}
					</span>
				</p>
			</div>
			<div className="group-btn">
				<button className="btn middle">cómo usar mi seguro</button>
			</div>
		</div>
	);
};
