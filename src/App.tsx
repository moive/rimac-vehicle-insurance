import { BrowserRouter } from "react-router-dom";
import { RouterNavigation } from "./router/RouterNavigation";

function App() {
	return (
		<>
			<BrowserRouter>
				<RouterNavigation />
			</BrowserRouter>
		</>
	);
}

export default App;
