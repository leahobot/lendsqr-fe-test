import React from "react";
import styles from "../../../pages/dashboard/Dashboard.module.scss";
import {
	useParams,
	useNavigate,
	NavLink,
	Routes,
	Route,
} from "react-router-dom";
import {
	AppSystem,
	BankDetails,
	Details,
	Documents,
	Loan,
	Savings,
} from "../..";
import { BiArrowBack } from "react-icons/bi";
import { MdStar, MdOutlineStarBorder } from "react-icons/md";

const UserDetails = ({ setShowUserDetails }) => {
	const navigate = useNavigate();
	const { id } = useParams();
	const users = localStorage.getItem("users")
		? JSON.parse(localStorage.getItem("users"))
		: null;

	const user = users.find((user) => user.id === id);

	const handleViewUsers = () => {
		navigate("/home/users");
		setShowUserDetails(false);
	};

	const activeLink = ({ isActive }) => (isActive ? styles.activeLink : "");

	return (
		<div className={styles["user-details"]}>
			<div
				onClick={handleViewUsers}
				className={styles["user-details-link"]}>
				Back to Users
				<BiArrowBack className={styles.icon4} />
			</div>

			<div className={styles["user-details-top"]}>
				<p>User Details</p>
				<div>
					<button
						type="button"
						className={styles["btn-blackList"]}>
						BLACKLIST USER
					</button>
					<button
						type="button"
						className={styles["btn-activate"]}>
						ACTIVATE USER
					</button>
				</div>
			</div>
			{user && (
				<div className={styles.summary}>
					<div className={styles["summary-top"]}>
						<img
							src={
								user.profile.avatar === undefined
									? ""
									: user.profile.avatar
							}
							alt="user-avatar"
						/>
						<span>
							<p className={styles.name}>
								{user.profile.firstName} {"   "}
								{user.profile.lastName}
							</p>
							<p className={styles["acc-num"]}>
								{user.accountNumber}
							</p>
						</span>
						<span className={styles.line}></span>
						<span>
							<p className={styles.tier}>User's Tier</p>
							<span>
								<MdStar className={styles.icon5} />
								<MdOutlineStarBorder className={styles.icon5} />
								<MdOutlineStarBorder className={styles.icon5} />
							</span>
						</span>
						<span className={styles.line}></span>
						<span>
							<p
								className={
									styles.amount
								}>{`₦${user.education.monthlyIncome[1]}`}</p>
							<p
								className={
									styles.amt
								}>{`${user.profile.bvn}/${user.education.sector}`}</p>
						</span>
					</div>
					<div className={styles["summary-bottom"]}>
						<NavLink
							className={activeLink}
							to={`/home/users/${id}`}
							end>
							General Details
						</NavLink>
						<NavLink
							className={activeLink}
							to="documents">
							Documents
						</NavLink>
						<NavLink
							className={activeLink}
							to="bank-details">
							Bank Details
						</NavLink>
						<NavLink
							className={activeLink}
							to="loans">
							Loans
						</NavLink>
						<NavLink
							className={activeLink}
							to="savings">
							Savings
						</NavLink>
						<NavLink
							className={activeLink}
							to="app-system">
							App and System
						</NavLink>
					</div>
				</div>
			)}
			<div className={styles.details}>
				<Routes>
					<Route
						index
						element={<Details />}
					/>
					<Route
						path="documents"
						element={<Documents />}
					/>
					<Route
						path="bank-details"
						element={<BankDetails />}
					/>
					<Route
						path="loans"
						element={<Loan />}
					/>
					<Route
						path="savings"
						element={<Savings />}
					/>
					<Route
						path="app-system"
						element={<AppSystem />}
					/>
				</Routes>
			</div>
		</div>
	);
};

export default UserDetails;
