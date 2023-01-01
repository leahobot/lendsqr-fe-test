import React from "react";
import styles from "../pages/dashboard/Dashboard.module.scss";
import { NavLink } from "react-router-dom";
import { links } from "../data/data";
import { FaHome, FaSuitcase } from "react-icons/fa";
import { FiChevronDown } from "react-icons/fi";

const Sidebar = () => {
	const activeLink = ({ isActive }) =>
		isActive ? `${styles.activeLink} ${styles.link}` : `${styles.link}`;
	return (
		<nav className={styles.sidebar}>
			<div className={styles.org}>
				<FaSuitcase className={styles.icon} />
				<p>Switch Organization</p>
				<FiChevronDown className={styles.icon} />
			</div>
			<NavLink
				end
				to="/home"
				className={activeLink}>
				<FaHome className={styles.icon} />
				<p>Dashboard</p>
			</NavLink>

			<div>
				{links.map((item) => (
					<div key={item.title}>
						<p className={styles.title}>{item.title}</p>
						{item.links.map((link) => (
							<NavLink
								key={link.name}
								to={`/home/${link.name.toLowerCase()}`}
								className={activeLink}>
								{link.icon} <p>{link.name}</p>
							</NavLink>
						))}
					</div>
				))}
			</div>
		</nav>
	);
};

export default Sidebar;
