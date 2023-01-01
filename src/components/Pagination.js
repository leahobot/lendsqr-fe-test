import React, { useState } from "react";
import styles from "./Pagination.module.scss";
import { AiOutlineDown, AiOutlineLeft, AiOutlineRight } from "react-icons/ai";

const Pagination = ({
	users,
	filteredUsers,
	currentPage,
	setCurrentPage,
	usersPerPage,
	setUsersPerPage,
}) => {
	//Limit page numbers shown
	let pageNumberLimit = 5;
	const [maxPageNumberLimit, setMaxPageNumberLimit] = useState(5);
	const [minPageNumberLimit, setMinPageNumberLimit] = useState(0);

	const pageNumbers = [];
	const totalUsers = filteredUsers.length;
	const totalPages = Math.ceil(totalUsers / usersPerPage);

	//Get Current Users

	//Paginate
	const paginate = (pageNumber) => {
		setCurrentPage(pageNumber);
	};

	//Go to next Page
	const paginateNext = () => {
		setCurrentPage(currentPage + 1);

		//Show next set of page numbers
		if (currentPage + 1 > maxPageNumberLimit) {
			setMaxPageNumberLimit(maxPageNumberLimit + pageNumberLimit);
			setMinPageNumberLimit(minPageNumberLimit + pageNumberLimit);
		}
	};

	//Go to prev page
	const paginatePrev = () => {
		setCurrentPage(currentPage - 1);

		//Show prev set of page numbers
		if ((currentPage - 1) % pageNumberLimit === 0) {
			setMaxPageNumberLimit(maxPageNumberLimit - pageNumberLimit);
			setMinPageNumberLimit(minPageNumberLimit - pageNumberLimit);
		}
	};

	for (let i = 1; i <= totalPages; i++) {
		pageNumbers.push(i);
	}

	return (
		<footer className={styles.pagination}>
			<div className={styles["left-container"]}>
				<p>Showing</p>
				<select
					value={usersPerPage}
					onChange={(e) => setUsersPerPage(e.target.value)}>
					<option value={10}>10</option>
					<option value={15}>15</option>
					<option value={20}>20</option>
					<option value={25}>25</option>
				</select>
				<p>out of {users && users.length}</p>
			</div>
			<ul className={styles["right-container"]}>
				<li
					className={
						currentPage === pageNumbers[0]
							? `${styles.hidden}`
							: `${styles.paginate}`
					}
					onClick={paginatePrev}>
					<AiOutlineLeft className={styles.icon} />
				</li>

				{pageNumbers.map((num) => {
					if (
						num < maxPageNumberLimit + 1 &&
						num > minPageNumberLimit
					) {
						return (
							<li
								key={num}
								className={
									currentPage === num
										? `${styles.pageNum}`
										: `${styles.page}`
								}
								onClick={() => paginate(num)}>
								{num}
							</li>
						);
					}
					return null;
				})}

				<li
					data-testid={paginateNext}
					className={
						currentPage === pageNumbers[pageNumbers.length - 1]
							? `${styles.hidden}`
							: `${styles.paginate}`
					}
					onClick={paginateNext}>
					<AiOutlineRight className={styles.icon} />
				</li>
			</ul>
		</footer>
	);
};

export default Pagination;
