import {
	FaUserFriends,
	FaUsers,
	FaHandshake,
	FaPiggyBank,
	FaUserCheck,
	FaUserTimes,
	FaSuitcase,
	FaFan,
	FaUserCog,
	FaScroll,
} from "react-icons/fa";
import { TbCurrencyNaira } from "react-icons/tb";
import { RiHandCoinFill } from "react-icons/ri";
import { BsBuilding } from "react-icons/bs";
import { ImDatabase } from "react-icons/im";
import { MdOutlineSendToMobile, MdTune } from "react-icons/md";
import { AiOutlineBarChart } from "react-icons/ai";
import { VscOutput } from "react-icons/vsc";
import { TbDiscount2 } from "react-icons/tb";
import { IoFilter } from "react-icons/io5";
import styles from "../pages/dashboard/Dashboard.module.scss";

export const links = [
	{
		title: "CUSTOMERS",
		links: [
			{
				name: "Users",
				icon: <FaUserFriends className={styles.icon} />,
			},
			{
				name: "Guarantors",
				icon: <FaUsers className={styles.icon} />,
			},
			{
				name: "Loans",
				icon: <TbCurrencyNaira className={styles.icon} />,
			},
			{
				name: "Decision Models",
				icon: <FaHandshake className={styles.icon} />,
			},
			{
				name: "Savings",
				icon: <FaPiggyBank className={styles.icon} />,
			},
			{
				name: "Loan Requests",
				icon: <RiHandCoinFill className={styles.icon} />,
			},
			{
				name: "Whitelist",
				icon: <FaUserCheck className={styles.icon} />,
			},
			{
				name: "Karma",
				icon: <FaUserTimes className={styles.icon} />,
			},
		],
	},

	{
		title: "BUSINESSES",
		links: [
			{
				name: "Organization",
				icon: <FaSuitcase className={styles.icon} />,
			},
			{
				name: "Loan Products",
				icon: <RiHandCoinFill className={styles.icon} />,
			},
			{
				name: "Savings Product",
				icon: <BsBuilding className={styles.icon} />,
			},
			{
				name: "Fees and Charges",
				icon: <ImDatabase className={styles.icon} />,
			},
			{
				name: "Transactions",
				icon: <MdOutlineSendToMobile className={styles.icon} />,
			},
			{
				name: "Services",
				icon: <FaFan className={styles.icon} />,
			},
			{
				name: "Service Account",
				icon: <FaUserCog className={styles.icon} />,
			},
			{
				name: "Settlements",
				icon: <FaScroll className={styles.icon} />,
			},
			{
				name: "Reports",
				icon: <AiOutlineBarChart className={styles.icon} />,
			},
		],
	},

	{
		title: "SETTINGS",
		links: [
			{
				name: "Preferences",
				icon: <MdTune className={styles.icon} />,
			},
			{
				name: "Fees and Pricing",
				icon: <TbDiscount2 className={styles.icon} />,
			},
			{
				name: "Audit Logs",
				icon: <VscOutput className={styles.icon} />,
			},
		],
	},
];

export const tableHead = [
	{
		title: "ORGANIZATION",
		icon: <IoFilter className={styles.icon1} />,
	},
	{
		title: "USERNAME",
		icon: <IoFilter className={styles.icon1} />,
	},
	{
		title: "EMAIL",
		icon: <IoFilter className={styles.icon1} />,
	},
	{
		title: "PHONE NUMBER",
		icon: <IoFilter className={styles.icon1} />,
	},
	{
		title: "DATE JOINED",
		icon: <IoFilter className={styles.icon1} />,
	},
	{
		title: "STATUS",
		icon: <IoFilter className={styles.icon1} />,
	},
	{
		title: "",
		icon: "",
	},
];

export const routes = [
	{
		path: "guarantors",
		name: "Guarantors",
	},
	{
		path: "loans",
		name: "Loans",
	},
	{
		path: "decision models",
		name: "Decision Models",
	},
	{
		path: "savings",
		name: "Savings",
	},
	{
		path: "loan requests",
		name: "Loan Requests",
	},
	{
		path: "whitelist",
		name: "WhiteList",
	},
	{
		path: "karma",
		name: "Karma",
	},
	{
		path: "organization",
		name: "Organization",
	},
	{
		path: "loan products",
		name: "Loan Products",
	},
	{
		path: "savings product",
		name: "Savings Product",
	},
	{
		path: "fees and charges",
		name: "Fees and Charges",
	},
	{
		path: "transactions",
		name: "Transactions",
	},
	{
		path: "services",
		name: "Services",
	},
	{
		path: "service account",
		name: "Service Account",
	},
	{
		path: "settlements",
		name: "Settlements",
	},
	{
		path: "reports",
		name: "Reports",
	},
	{
		path: "preferences",
		name: "Preferences",
	},
	{
		path: "fees and pricing",
		name: "Fees and Princing",
	},
	{
		path: "audit logs",
		name: "Audit Logs",
	},
];
