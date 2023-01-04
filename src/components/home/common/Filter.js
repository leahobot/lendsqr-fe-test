import React, { useRef, useState } from "react";
import styles from "../../../pages/dashboard/Dashboard.module.scss";
import { MdOutlineClose } from "react-icons/md";

const Filter = ({ users, setFilteredUsers, setShowFilter }) => {
	const emailRef = useRef();
	const userNameRef = useRef();
	const phoneRef = useRef();
	const dateRef = useRef();
	const [orgName, setOrgName] = useState("");
	const [status, setStatus] = useState("");

	const submitForm = (e) => {
		e.preventDefault();

		const currentUser = {
			name: userNameRef.current.value,
			email: emailRef.current.value,
			phone: phoneRef.current.value,
			date: dateRef.current.value,
			status: status,
			org: orgName,
		};

		const tempUsers = users
			? users.filter(
					(user) =>
						user.userName.toLowerCase() ===
							currentUser.name.toLowerCase() ||
						user.orgName.toLowerCase() ===
							currentUser.org.toLowerCase() ||
						user.email.toLowerCase() ===
							currentUser.email.toLowerCase() ||
						user.profile.phoneNumber.toLowerCase() ===
							currentUser.phone.toLowerCase() ||
						user.createdAt.toLowerCase() ===
							currentUser.date.toLowerCase() ||
						user.userName.toLowerCase() ===
							currentUser.status.toLowerCase(),
			  )
			: [];

		setFilteredUsers(tempUsers);

		setShowFilter(false);
	};

	return (
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
					value={orgName}
					onChange={(e) => setOrgName(e.target.value)}
					required>
					<option
						value=""
						disabled>
						Select
					</option>
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
					placeholder="Username"
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
					<option
						value=""
						disabled>
						Select
					</option>
					<option value="inactive">Inactive</option>
					<option value="active">Active</option>
					<option value="blacklisted">Blacklisted</option>
				</select>
			</div>
			<div style={{ flexDirection: "row" }}>
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
	);
};

export default Filter;
