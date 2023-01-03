import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Login.module.scss";
import loginImage from "../../images/pablo-sign-in.png";
import logo from "../../images/logo.svg";
import { toast } from "react-hot-toast";
import { BsCheckCircleFill } from "react-icons/bs";

const Login = ({ user, setUser }) => {
	const navigate = useNavigate();
	const [showPassword, setShowPassword] = useState(false);

	const handleLogin = (e) => {
		e.preventDefault();
		navigate("/home/users");
		toast("Login Successful!!", {
			icon: <BsCheckCircleFill className={styles["toast-icon"]} />,
			style: {
				border: "1px solid var(--primary-color)",
				padding: "0.3rem 0.5rem",
				borderRadius: "6px",
				fontSize: "1.3rem",
				color: "var(--primary-color)",
			},
			position: "top-center",
		});
	};

	return (
		<section className={styles.login}>
			<div className={styles["login-left"]}>
				<div className={styles.logo}>
					<img
						src={logo}
						alt="logo"
					/>
				</div>
				<div className={styles.illustration}>
					<img
						src={loginImage}
						alt="login-illustration"
					/>
				</div>
			</div>
			<div
				onClick={() => showPassword && setShowPassword(false)}
				className={styles["login-right"]}>
				<div className={styles.logo}>
					<img
						src={logo}
						alt="logo"
					/>
				</div>
				<header>
					<h1>Welcome!</h1>
					<p>Enter details to login</p>
				</header>
				<form onSubmit={handleLogin}>
					<input
						type="email"
						placeholder="Email"
						required
						value={user.email}
						onChange={(e) =>
							setUser({ ...user, email: e.target.value })
						}
					/>
					<div className={styles["password-container"]}>
						<input
							type={showPassword ? "text" : "password"}
							placeholder="Password"
							required
							value={user.password}
							onChange={(e) =>
								setUser({ ...user, password: e.target.value })
							}
						/>
						<span onClick={() => setShowPassword((prev) => !prev)}>
							SHOW
						</span>
					</div>
					<p>FORGOT PASSWORD?</p>
					<button type="submit">LOG IN</button>
				</form>
			</div>
		</section>
	);
};

export default Login;
