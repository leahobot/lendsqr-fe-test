import { Fragment, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./pages/login/Login";
import Dashboard from "./pages/dashboard/Dashboard";
import NotFound from "./pages/notFound/NotFound";
import { Toaster } from "react-hot-toast";

const initialState = {
	email: "",
	password: "",
};

function App() {
	const [user, setUser] = useState(initialState);

	return (
		<Fragment>
			<Toaster />
			<Routes>
				<Route
					path="/"
					element={
						<Login
							user={user}
							setUser={setUser}
						/>
					}
				/>
				<Route
					path="/home/*"
					element={<Dashboard user={user} />}
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
