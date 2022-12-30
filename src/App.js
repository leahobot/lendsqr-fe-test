import { Fragment } from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./pages/login/Login";
import Dashboard from "./pages/dashboard/Dashboard";
import NotFound from "./pages/notFound/NotFound";
import { Toaster } from "react-hot-toast";

function App() {
	return (
		<Fragment>
			<Toaster />
			<Routes>
				<Route
					path="/"
					element={<Login />}
				/>
				<Route
					path="/dashboard"
					element={<Dashboard />}
				/>
				<Route
					path="*"
					element={<NotFound />}
				/>
			</Routes>
		</Fragment>
	);
}

export default App;
