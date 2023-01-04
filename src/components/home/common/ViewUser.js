import React from "react";
import styles from "../../../pages/dashboard/Dashboard.module.scss";
import { BsEye } from "react-icons/bs";
import { TbUserX, TbUserCheck } from "react-icons/tb";
import { useNavigate } from "react-router-dom";

const ViewUser = ({ setShowUserDetails, spanRef, id }) => {
	const navigate = useNavigate();

	const handleViewUser = (user) => {
		setShowUserDetails(true);
		navigate(`${user}`);
	};

	const handleBlacklist = (span) => {
		span.current.innerText = "Blacklisted";
	};

	const handleActive = (span) => {
		span.current.innerText = "Active";
	};
	return (
		<div className={styles["status-modal"]}>
			<div
				onClick={() => handleViewUser(id)}
				className={styles["status-modal-item"]}>
				<BsEye className={styles.icon3} />
				<p>View User</p>
			</div>

			<div
				onClick={() => handleBlacklist(spanRef)}
				className={styles["status-modal-item"]}>
				<TbUserX className={styles.icon3} />
				<p>Blacklist User</p>
			</div>
			<div
				onClick={() => handleActive(spanRef)}
				className={styles["status-modal-item"]}>
				<TbUserCheck className={styles.icon3} />
				<p>Activate User</p>
			</div>
		</div>
	);
};

export default ViewUser;
