import { Route, Routes } from "react-router-dom";
import { Home } from "../home/views/Home";
import { YourPlan } from "../insurance-plan/views/YourPlan";
import { Welcome } from "../welcome/views/Welcome";

export const RouterNavigation = () => {
	return (
		<Routes>
			<Route path="/" element={<Home />}></Route>
			<Route path="/your-plan" element={<YourPlan />}></Route>
			<Route path="/welcome" element={<Welcome />}></Route>
		</Routes>
	);
};
