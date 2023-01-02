import React, { useState } from "react";
import styles from "./Dashboard.module.scss";
import { Header, Sidebar, Main } from "../../components";

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
