import { useAppSelector } from "../../hooks/redux";

export const WelcomeRight = () => {
	const state = useAppSelector((state) => state);
	const { user } = state.user;
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
			<div className="text-large">
				<span className="text-red">¡Te damos la bienvenida! </span>{" "}
				<br />
				Cuenta con nosotros para proteger tu vehículo
			</div>
			<p>
				Enviaremos la confirmación de compra de tu Plan Vehícular
				Tracking a tu correo:
				<br /> <span className="bold-roboto">{user?.email}</span>
			</p>
			<div className="group-btn">
				<button className="btn middle">cómo usar mi seguro</button>
			</div>
		</div>
	);
};
