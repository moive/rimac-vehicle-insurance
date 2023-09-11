import { Route, Routes } from "react-router-dom";
import { Home } from "../home/views/Home";

export const RouterNavigation = () => {
	return (
		<Routes>
			<Route path="/" element={<Home />}></Route>
		</Routes>
	);
};
