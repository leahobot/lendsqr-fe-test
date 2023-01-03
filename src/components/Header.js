import React from "react";
import { GoSearch } from "react-icons/go";
import { BsBell } from "react-icons/bs";
import { AiFillCaretDown } from "react-icons/ai";
import styles from "../pages/dashboard/Dashboard.module.scss";
import image from "../images/user-image.png";
import logo from "../images/logo.svg";
import { Link } from "react-router-dom";

const Header = ({ searchValue, setSearchValue, user }) => {
	const userName = user.email.slice(0, user.email.indexOf("@"));
	const firstLetter = userName ? userName[0].toUpperCase() : null;
	const otherLetters = userName.slice(1).toLowerCase();
	const name = firstLetter + otherLetters;

	return (
		<header className={styles.header}>
			<div className={styles.left}>
				<div className={styles["left-logo"]}>
					<img
						src={logo}
						alt="logo"
					/>
				</div>
				<div className={styles["left-input"]}>
					<input
						value={searchValue}
						onChange={(e) => setSearchValue(e.target.value)}
						type="text"
						placeholder="Search for anything"
					/>
					<span>
						<GoSearch className={styles.icon} />
					</span>
				</div>
			</div>
			<div className={styles.right}>
				<Link to="/home/users">Docs</Link>
				<BsBell className={styles.icon2} />
				<img
					src={image}
					alt="user"
				/>
				<span className={styles.user}>
					{name}
					<AiFillCaretDown />
				</span>
			</div>
		</header>
	);
};

export default Header;
