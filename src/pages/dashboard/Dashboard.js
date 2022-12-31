import React from "react";
import styles from "./Dashboard.module.scss";
import Header from "../../components/Header";
import Sidebar from "../../components/Sidebar";
import Main from "../../components/Main";

const Dashboard = () => {
	return (
		<section className={styles.dashboard}>
			<Header />
			<main className={styles["main-dashboard"]}>
				<Sidebar />
				<Main />
			</main>
		</section>
	);
};

export default Dashboard;
