import React from "react";
import styles from "./Pagination.module.scss";
import { AiOutlineDown, AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import { useStateContext } from "../../context/ContextProvider";

const Pagination = () => {
	const {
		totalUsers,
		paginatePrev,
		paginateNext,
		paginate,
		pageNumbers,
		currentPage,
		maxPageNumberLimit,
		minPageNumberLimit,
	} = useStateContext();

	return (
		<footer className={styles.pagination}>
			<div className={styles["left-container"]}>
				<p>Showing</p>
				<span className={styles["total-users"]}>
					<p>{totalUsers}</p>
					<AiOutlineDown />
				</span>
				<p>out of {totalUsers}</p>
			</div>
			<ul className={styles["right-container"]}>
				<li
					className={
						currentPage === pageNumbers[0]
							? `${styles.hidden}`
							: `${styles.paginate}`
					}
					onClick={paginatePrev}>
					<AiOutlineLeft />
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
					<AiOutlineRight />
				</li>
			</ul>
		</footer>
	);
};

export default Pagination;
