import React, { useState, useEffect, useRef } from "react";
import styles from "../pages/dashboard/Dashboard.module.scss";
import axios from "axios";
import { FiMoreVertical } from "react-icons/fi";
import { tableHead } from "../data/data";
import { BsEye } from "react-icons/bs";
import { MdOutlineClose } from "react-icons/md";
import { TbUserX, TbUserCheck } from "react-icons/tb";
import { Link } from "react-router-dom";

const Table = ({ searchValue, currentUsers, users, setFilteredUsers }) => {
	const [status, setStatus] = useState("Inactive");
	const [userId, setUserId] = useState("");
	const [showModal, setShowModal] = useState(false);
	const [showFilter, setShowFilter] = useState(false);

	let orgRef = useRef();
	let emailRef = useRef();
	let userNameRef = useRef();
	let phoneRef = useRef();
	let dateRef = useRef();
	// const [statusValue, setStatusValue] = useState("Pending");
	// const [org, setOrg] = useState("");
	// const [email, setEmail] = useState("");
	// const [userName, setUserName] = useState("");
	// const [phoneNumber, setPhoneNumber] = useState("");
	// const [dateTime, setDateTime] = useState("");

	const editPhoneNumber = (str) => {
		const index = str.indexOf("x");
		const slicedPhoneNumber = str.slice(0, index);
		return slicedPhoneNumber;
	};

	const handleModal = (id) => {
		setShowModal(true);
		setUserId(id);
	};

	const handleBlacklist = (id) => {
		if (id === userId) {
			setStatus("Blacklisted");
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
	}, [searchValue, users]);

	const submitForm = (e) => {
		e.preventDefault();

		// const tempUsers = users
		// 	? users.filter(
		// 			(user) =>
		// 				user.userName.toLowerCase() ===
		// 					userName.toLowerCase() ||
		// 				user.orgName.toLowerCase() === org.toLowerCase() ||
		// 				user.email.toLowerCase() === email.toLowerCase() ||
		// 				user.profile.phoneNumber.toLowerCase() ===
		// 					phoneNumber.toLowerCase() ||
		// 				user.createdAt.toLowerCase() ===
		// 					dateTime.toLowerCase() ||
		// 				user.userName.toLowerCase() === status.toLowerCase(),
		// 	  )
		// 	: [];

		// setFilteredUsers(tempUsers);

		// setShowFilter(false);
	};

	const closeModals = () => {
		if (showModal) {
			setShowModal(false);
		}
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
										<div className={styles["status-modal"]}>
											<Link
												to={`/user-details/${userId}`}>
												<BsEye
													className={styles.icon3}
												/>
												<p>View User</p>
											</Link>

											<div
												onClick={() =>
													handleBlacklist(user.id)
												}
												className={
													styles["status-modal-item"]
												}>
												<TbUserX
													className={styles.icon3}
												/>
												<p>Blacklist User</p>
											</div>
											<div
												onClick={() =>
													setStatus("Active")
												}
												className={
													styles["status-modal-item"]
												}>
												<TbUserCheck
													className={styles.icon3}
												/>
												<p>Activate User</p>
											</div>
										</div>
									) : null}
								</td>
							</tr>
						);
					})}
				</tbody>
			</table>

			{showFilter && (
				<form
					className={styles["filter-modal"]}
					onSubmit={(e) => submitForm(e)}>
					<MdOutlineClose
						className={styles.icon}
						onClick={() => setShowFilter(false)}
					/>
					<div>
						<label>Organization</label>
						<select
							ref={orgRef}
							required>
							<option value="">Select</option>
							{users
								? users.map((user) => (
										<option
											key={user.id}
											value={user.orgName}>
											{user.orgName}
										</option>
								  ))
								: null}
						</select>
					</div>
					<div>
						<label>UserName</label>
						<input
							ref={userNameRef}
							type="text"
							placeholder="User"
							required
						/>
					</div>
					<div>
						<label>Email</label>
						<input
							ref={emailRef}
							type="email"
							placeholder="Email"
						/>
					</div>
					<div>
						<label>Date</label>
						<input
							ref={dateRef}
							type="datetime-local"
						/>
					</div>
					<div>
						<label>Phone Number</label>
						<input
							ref={phoneRef}
							type="number"
							placeholder="Phone Number"
						/>
					</div>
					<div>
						<label>status</label>
						<select
							value={status}
							onChange={(e) => setStatus(e.target.value)}>
							<option>Select</option>
							<option value="pending">Pending</option>
							<option value="active">Active</option>
							<option value="blacklisted">Blaclisted</option>
						</select>
					</div>
					<div>
						<button
							type="reset"
							className={styles.reset}>
							Reset
						</button>
						<button
							type="submit"
							className={styles.submit}>
							Filter
						</button>
					</div>
				</form>
			)}
		</div>
	);
};

export default Table;
