import { BrowserRouter } from "react-router-dom";
import { RouterNavigation } from "./store/RouterNavigation";

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
