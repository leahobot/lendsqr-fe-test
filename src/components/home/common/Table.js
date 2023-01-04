import React, { useState, useEffect, useRef } from "react";
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
	const [userId, setUserId] = useState("");
	const [showModal, setShowModal] = useState(false);
	const [showFilter, setShowFilter] = useState(false);
	const spanRef = useRef();

	const handleModal = (id) => {
		setShowModal(true);
		setUserId(id);
	};

	const spanClassName = (id, span) => {
		if (spanRef.current) {
			if (span.current.innerText === "Active" && userId === id) {
				return styles.greenBg;
			} else if (
				span.current.innerText === "Blacklisted" &&
				userId === id
			) {
				return styles.redBg;
			} else {
				return styles.blueBg;
			}
		} else {
			return styles.blueBg;
		}
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

		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [searchValue, users]);

	const editPhoneNumber = (str) => {
		const index = str.indexOf("x");
		const slicedPhoneNumber = str.slice(0, index);
		return slicedPhoneNumber;
	};

	return (
		<div
			className={styles.table}
			onClick={() => showModal && setShowModal(false)}>
			<table>
				<thead>
					<tr className={styles["table-head"]}>
						{tableHead.map((item, index) => (
							<th key={index}>
								<p
									onClick={() =>
										setShowFilter((prev) => !prev)
									}>
									{item.title}
									{item.icon}
								</p>
							</th>
						))}
						<th>
							{showFilter && (
								<Filter
									users={users}
									setFilteredUsers={setFilteredUsers}
									setShowFilter={setShowFilter}
								/>
							)}
						</th>
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
										ref={spanRef}
										className={`${
											styles["user-status"]
										} ${spanClassName(user.id, spanRef)}`}>
										{spanRef.current && user.id === userId
											? spanRef.current.innerText
											: "inactive"}
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
											spanRef={spanRef}
										/>
									) : null}
								</td>
							</tr>
						);
					})}
				</tbody>
			</table>
		</div>
	);
};

export default Table;
