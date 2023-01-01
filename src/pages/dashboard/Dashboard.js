import React, { useState } from "react";
import styles from "./Dashboard.module.scss";
import Header from "../../components/Header";
import Sidebar from "../../components/Sidebar";
import Main from "../../components/Main";

const Dashboard = () => {
	const [searchValue, setSearchValue] = useState("");
	return (
		<section className={styles.dashboard}>
			<Header
				searchValue={searchValue}
				setSearchValue={setSearchValue}
			/>
			<main className={styles["main-dashboard"]}>
				<Sidebar />
				<Main searchValue={searchValue} />
			</main>
		</section>
	);
};

export default Dashboard;
