import React from "react";
import styles from "../../pages/dashboard/Dashboard.module.scss";
import Table from "../Table";
// import Pagination from "../Pagination";
import { FiUsers, FiDatabase } from "react-icons/fi";
import { AiOutlineDatabase } from "react-icons/ai";
import { FaUsers } from "react-icons/fa";

const data = [
	{
		icon: (
			<FiUsers
				className={styles.icon}
				style={{
					color: "var(--purple-color)",
				}}
			/>
		),
		title: "USERS",
		total: "2,453",
		bg: "#e018ff15",
	},
	{
		icon: (
			<FaUsers
				className={styles.icon}
				style={{
					color: "var(--blue-color)",
				}}
			/>
		),
		title: "ACTIVE USERS",
		total: "2,453",
		bg: "#5618ff18",
	},
	{
		icon: (
			<AiOutlineDatabase
				className={styles.icon}
				style={{
					color: "var(--red-color)",
				}}
			/>
		),
		title: "USERS WITH LOAN",
		total: "12,453",
		bg: "#f55f4419",
	},
	{
		icon: (
			<FiDatabase
				className={styles.icon}
				style={{
					color: "var(--pink-color)",
				}}
			/>
		),
		title: "USERS WITH SAVINGS",
		total: "102,453",
		bg: "#ff336618",
	},
];

const Users = ({ searchValue }) => {
	return (
		<div className={styles.users}>
			<div className={styles["user-summary"]}>
				<h1>Users</h1>

				<div className={styles.summary}>
					{data.map((item, index) => (
						<div
							key={index}
							className={styles["summary-container"]}>
							<span style={{ backgroundColor: item.bg }}>
								{item.icon}
							</span>
							<p className={styles.title}>{item.title}</p>
							<p className={styles.total}>{item.total}</p>
						</div>
					))}
				</div>
			</div>

			<Table searchValue={searchValue} />
		</div>
	);
};

export default Users;
