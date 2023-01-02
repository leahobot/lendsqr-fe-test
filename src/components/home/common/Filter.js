import React, { useRef } from "react";

const Filter = () => {
	const orgRef = useRef();
	const emailRef = useRef();
	const userNameRef = useRef();
	const phoneRef = useRef();
	const dateRef = useRef();

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

	// 	return (
	// 		<form
	// 			className={styles["filter-modal"]}
	// 			onSubmit={(e) => submitForm(e)}>
	// 			<MdOutlineClose
	// 				className={styles.icon}
	// 				onClick={() => setShowFilter(false)}
	// 			/>
	// 			<div>
	// 				<label>Organization</label>
	// 				<select
	// 					ref={orgRef}
	// 					required>
	// 					<option value="">Select</option>
	// 					{users
	// 						? users.map((user) => (
	// 								<option
	// 									key={user.id}
	// 									value={user.orgName}>
	// 									{user.orgName}
	// 								</option>
	// 						  ))
	// 						: null}
	// 				</select>
	// 			</div>
	// 			<div>
	// 				<label>UserName</label>
	// 				<input
	// 					ref={userNameRef}
	// 					type="text"
	// 					placeholder="User"
	// 					required
	// 				/>
	// 			</div>
	// 			<div>
	// 				<label>Email</label>
	// 				<input
	// 					ref={emailRef}
	// 					type="email"
	// 					placeholder="Email"
	// 				/>
	// 			</div>
	// 			<div>
	// 				<label>Date</label>
	// 				<input
	// 					ref={dateRef}
	// 					type="datetime-local"
	// 				/>
	// 			</div>
	// 			<div>
	// 				<label>Phone Number</label>
	// 				<input
	// 					ref={phoneRef}
	// 					type="number"
	// 					placeholder="Phone Number"
	// 				/>
	// 			</div>
	// 			<div>
	// 				<label>status</label>
	// 				<select
	// 					value={status}
	// 					onChange={(e) => setStatus(e.target.value)}>
	// 					<option>Select</option>
	// 					<option value="pending">Pending</option>
	// 					<option value="active">Active</option>
	// 					<option value="blacklisted">Blaclisted</option>
	// 				</select>
	// 			</div>
	// 			<div>
	// 				<button
	// 					type="reset"
	// 					className={styles.reset}>
	// 					Reset
	// 				</button>
	// 				<button
	// 					type="submit"
	// 					className={styles.submit}>
	// 					Filter
	// 				</button>
	// 			</div>
	// 		</form>
	// 	);
};

export default Filter;
