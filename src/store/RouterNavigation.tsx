import { Route, Routes } from "react-router-dom";
import { Home } from "../home/views/Home";
import { YourPlan } from "../insurance-plan/views/YourPlan";

export const RouterNavigation = () => {
	return (
		<Routes>
			<Route path="/" element={<Home />}></Route>
			<Route path="/your-plan" element={<YourPlan />}></Route>
		</Routes>
	);
};
