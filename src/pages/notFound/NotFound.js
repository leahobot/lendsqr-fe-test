import React from "react";
import styles from "./NotFound.module.scss";
import { Link } from "react-router-dom";

const NotFound = () => {
	return (
		<section className={styles.notFound}>
			<div>
				<p>Page not found</p>
				<Link to="/">Login</Link>
			</div>
		</section>
	);
};

export default NotFound;
