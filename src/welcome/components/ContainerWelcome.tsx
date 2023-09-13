import { WelcomeLeft } from "./WelcomeLeft";
import { WelcomeRight } from "./WelcomeRight";
import "../sass/welcome.scss";

export const ContainerWelcome = () => {
	return (
		<main className="main-container">
			<WelcomeLeft />
			<WelcomeRight />
		</main>
	);
};
