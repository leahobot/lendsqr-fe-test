import React, { useState, useEffect } from "react";
import styles from "../../../pages/dashboard/Dashboard.module.scss";
import { ViewUser, Filter } from "../..";
import { FiMoreVertical } from "react-icons/fi";
import { tableHead } from "../../../data/data";

const Table = ({
	searchValue,
	currentUsers,
	users,
	setFilteredUsers,
	setShowUserDetails,
}) => {
	const [status, setStatus] = useState("Inactive");
	const [userId, setUserId] = useState("");
	const [showModal, setShowModal] = useState(false);
	const [showFilter, setShowFilter] = useState(false);

	// const [statusValue, setStatusValue] = useState("Pending");
	// const [org, setOrg] = useState("");
	// const [email, setEmail] = useState("");
	// const [userName, setUserName] = useState("");
	// const [phoneNumber, setPhoneNumber] = useState("");
	// const [dateTime, setDateTime] = useState("");

	const handleModal = (id) => {
		setShowModal(true);
		setUserId(id);
	};

	useEffect(() => {
		const tempUsers = users
			? users.filter(
					(user) =>
						user.userName
							.toLowerCase()
							.includes(searchValue.toLowerCase()) ||
						user.orgName
							.toLowerCase()
							.includes(searchValue.toLowerCase()) ||
						user.profile.phoneNumber
							.toLowerCase()
							.includes(searchValue.toLowerCase()) ||
						user.email
							.toLowerCase()
							.includes(searchValue.toLowerCase()) ||
						new Date(user.createdAt)
							.toLocaleString()
							.toLowerCase()
							.includes(searchValue.toLowerCase()),
			  )
			: [];
		setFilteredUsers(tempUsers);
	}, [searchValue, users]);

	const closeModals = () => {
		if (showModal) {
			setShowModal(false);
		}
	};

	const editPhoneNumber = (str) => {
		const index = str.indexOf("x");
		const slicedPhoneNumber = str.slice(0, index);
		return slicedPhoneNumber;
	};

	return (
		<div
			className={styles.table}
			onClick={closeModals}>
			<table>
				<thead>
					<tr className={styles["table-head"]}>
						{tableHead.map((item, index) => (
							<th key={index}>
								<p
									onClick={() =>
										setShowFilter((previous) => !previous)
									}>
									{item.title}
									{item.icon}
								</p>
							</th>
						))}
					</tr>
				</thead>
				<tbody>
					{currentUsers.map((user) => {
						return (
							<tr
								key={user.id}
								className={styles.userRow}>
								<td>{user.orgName}</td>
								<td>{user.userName}</td>
								<td>{user.email}</td>
								<td>
									{editPhoneNumber(user.profile.phoneNumber)}
								</td>
								<td>
									{new Date(user.createdAt).toLocaleString()}
								</td>
								<td>
									<span
										className={`${styles["user-status"]} ${
											status === "Active" &&
											userId === user.id
												? styles.greenBg
												: status === "Blacklisted" &&
												  userId === user.id
												? styles.redBg
												: styles.blueBg
										}`}>
										{status}
									</span>
								</td>
								<td onClick={() => handleModal(user.id)}>
									<FiMoreVertical
										className={styles.moreIcon}
									/>
								</td>
								<td>
									{showModal && user.id === userId ? (
										<ViewUser
											setShowUserDetails={
												setShowUserDetails
											}
											id={user.id}
											userId={userId}
											setStatus={setStatus}
										/>
									) : null}
								</td>
							</tr>
						);
					})}
				</tbody>
			</table>

			{showFilter && <Filter />}
		</div>
	);
};

export default Table;
