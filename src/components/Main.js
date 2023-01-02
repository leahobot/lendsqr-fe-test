import React from "react";
import styles from "../pages/dashboard/Dashboard.module.scss";
import { Routes, Route } from "react-router-dom";
import { UserDetails, Users } from "../components";

const Main = ({ searchValue }) => {
	return (
		<main className={styles.main}>
			<Routes>
				<Route
					path="users"
					element={<Users searchValue={searchValue} />}
				/>
				<Route
					path="users/:id/*"
					element={<UserDetails searchValue={searchValue} />}
				/>
			</Routes>
		</main>
	);
};

export default Main;
