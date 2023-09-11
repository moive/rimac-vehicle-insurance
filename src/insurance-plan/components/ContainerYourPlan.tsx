import { YourPlanLeft } from "./YourPlanLeft";
import { YourPlanRight } from "./YourPlanRight";

import "../sass/insurance-plan.scss";

export const ContainerYourPlan = () => {
	return (
		<main className="main-container">
			<YourPlanLeft />
			<YourPlanRight />
		</main>
	);
};
