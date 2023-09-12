import { BrowserRouter } from "react-router-dom";
import { RouterNavigation } from "./router/RouterNavigation";
import { Provider } from "react-redux";
import store from "./store";

function App() {
	return (
		<>
			<Provider store={store}>
				<BrowserRouter>
					<RouterNavigation />
				</BrowserRouter>
			</Provider>
		</>
	);
}

export default App;
