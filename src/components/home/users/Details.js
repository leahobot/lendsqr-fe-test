import React from "react";
import styles from "../../../pages/dashboard/Dashboard.module.scss";

const Details = ({ user }) => {
	const editPhoneNumber = (str) => {
		const index = str.indexOf("x");
		const slicedPhoneNumber = str.slice(0, index);
		return slicedPhoneNumber;
	};

	return (
		<div className={styles["details-container"]}>
			<div className={styles["details-container-summary"]}>
				<h4>Personal Information</h4>
				<div className={styles["details-container-summary-body"]}>
					<span
						className={
							styles["details-container-summary-body-span"]
						}>
						<p>FULL NAME</p>
						<p>
							{user.profile.firstName}
							{"   "}
							{user.profile.lastName}
						</p>
					</span>
					<span
						className={
							styles["details-container-summary-body-span"]
						}>
						<p>PHONE NUMBER</p>
						<p>{editPhoneNumber(user.profile.phoneNumber)}</p>
					</span>
					<span
						className={
							styles["details-container-summary-body-span"]
						}>
						<p>EMAIL ADDRESS</p>
						<p>{user.email}</p>
					</span>
					<span
						className={
							styles["details-container-summary-body-span"]
						}>
						<p>BVN</p>
						<p>{user.profile.bvn}</p>
					</span>
					<span
						className={
							styles["details-container-summary-body-span"]
						}>
						<p>GENDER</p>
						<p>{user.profile.gender}</p>
					</span>

					<span
						className={
							styles["details-container-summary-body-span"]
						}>
						<p>MARITAL STATUS</p>
						<p>{user.profile.maritalStatus}</p>
					</span>
					<span
						className={
							styles["details-container-summary-body-span"]
						}>
						<p>CHILDREN</p>
						<p>{user.profile.children}</p>
					</span>
					<span
						className={
							styles["details-container-summary-body-span"]
						}>
						<p>TYPE OF RESIDENCE</p>
						<p>{user.profile.address}</p>
					</span>
				</div>
			</div>
			<div className={styles.line}></div>
			<div className={styles["details-container-summary"]}>
				<h4>Education and Emplyment</h4>
				<div className={styles["details-container-summary-body"]}>
					<span
						className={
							styles["details-container-summary-body-span"]
						}>
						<p>LEVEL OF EDUCATION</p>
						<p>{user.education.level}</p>
					</span>
					<span
						className={
							styles["details-container-summary-body-span"]
						}>
						<p>EMPLOYMENT STATUS</p>
						<p>{user.education.employmentStatus}</p>
					</span>
					<span
						className={
							styles["details-container-summary-body-span"]
						}>
						<p>SECTOR OF EMPLYMENT</p>
						<p>{user.education.sector}</p>
					</span>
					<span
						className={
							styles["details-container-summary-body-span"]
						}>
						<p>DURATION OF EMPLYMENT</p>
						<p>{user.education.duration}</p>
					</span>
					<span
						className={
							styles["details-container-summary-body-span"]
						}>
						<p>OFFICE EMAIL</p>
						<p>{user.education.officeEmail}</p>
					</span>

					<span
						className={
							styles["details-container-summary-body-span"]
						}>
						<p>MONTHLY INCOME</p>
						<p>{`₦${user.education.monthlyIncome[1]} - ₦${user.education.monthlyIncome[0]}`}</p>
					</span>
					<span
						className={
							styles["details-container-summary-body-span"]
						}>
						<p>LOAN REPAYMENT</p>
						<p>{`₦${user.education.loanRepayment}`}</p>
					</span>
				</div>
			</div>
			<div className={styles.line}></div>
			<div className={styles["details-container-summary"]}>
				<h4>Socials</h4>
				<div className={styles["details-container-summary-body"]}>
					<span
						className={
							styles["details-container-summary-body-span"]
						}>
						<p>TWITTER</p>
						<p>{user.socials.twitter}</p>
					</span>
					<span
						className={
							styles["details-container-summary-body-span"]
						}>
						<p>FACEBOOK</p>
						<p>{user.socials.facebook}</p>
					</span>
					<span
						className={
							styles["details-container-summary-body-span"]
						}>
						<p>INSTAGRAM</p>
						<p>{user.socials.instagram}</p>
					</span>
				</div>
			</div>
			<div className={styles.line}></div>
			<div className={styles["details-container-summary"]}>
				<h4>Guarantor</h4>
				<div className={styles["details-container-summary-body"]}>
					<span
						className={
							styles["details-container-summary-body-span"]
						}>
						<p>FULL NAME</p>
						<p>
							{user.guarantor.firstName}
							{"   "} {user.guarantor.firstName}
						</p>
					</span>
					<span
						className={
							styles["details-container-summary-body-span"]
						}>
						<p>PHONE NUMBER</p>
						<p>{editPhoneNumber(user.guarantor.phoneNumber)}</p>
					</span>
					<span
						className={
							styles["details-container-summary-body-span"]
						}>
						<p>EMAIL ADDRESS</p>
						<p>{user.guarantor.email}</p>
					</span>
					<span
						className={
							styles["details-container-summary-body-span"]
						}>
						<p>RELATIONSHIP</p>
						<p>{user.guarantor.relationship}</p>
					</span>
				</div>
			</div>
			<div className={styles.line}></div>
			<div className={styles["details-container-summary"]}>
				<h4>{""}</h4>
				<div className={styles["details-container-summary-body"]}>
					<span
						className={
							styles["details-container-summary-body-span"]
						}>
						<p>FULL NAME</p>
						<p>
							{user.guarantor.firstName}
							{"   "} {user.guarantor.firstName}
						</p>
					</span>
					<span
						className={
							styles["details-container-summary-body-span"]
						}>
						<p>PHONE NUMBER</p>
						<p>{editPhoneNumber(user.guarantor.phoneNumber)}</p>
					</span>
					<span
						className={
							styles["details-container-summary-body-span"]
						}>
						<p>EMAIL ADDRESS</p>
						<p>{user.guarantor.email}</p>
					</span>
					<span
						className={
							styles["details-container-summary-body-span"]
						}>
						<p>RELATIONSHIP</p>
						<p>{user.guarantor.relationship}</p>
					</span>
				</div>
			</div>
		</div>
	);
};

export default Details;
