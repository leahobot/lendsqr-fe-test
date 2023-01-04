import React from "react";
import styles from "../pages/dashboard/Dashboard.module.scss";
import { Routes, Route } from "react-router-dom";
import { UserDetails, Users } from "../components";
import { routes } from "../data/data";
import NotFoundHome from "../pages/notFound/NotFoundHome";

const Main = ({ searchValue }) => {
	const style = {
		width: "100%",
		marginLeft: "10vw",
		marginTop: "10vh",
		fontSize: "1.6rem",
		fontWeight: "500",
	};

	return (
		<main className={styles.main}>
			<Routes>
				<Route
					index
					element={<div style={style}>Dashboard</div>}
				/>
				<Route
					path="users"
					element={<Users searchValue={searchValue} />}
				/>
				<Route
					path="users/:id/*"
					element={<UserDetails searchValue={searchValue} />}
				/>
				{routes.map((route, index) => (
					<Route
						key={index}
						path={route.path}
						element={<div style={style}>{route.name}</div>}
					/>
				))}
				<Route
					path="*"
					element={<NotFoundHome />}
				/>
			</Routes>
		</main>
	);
};

export default Main;
