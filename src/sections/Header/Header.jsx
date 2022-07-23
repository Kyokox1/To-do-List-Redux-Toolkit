import React from "react";
import styles from "./header.module.css";

export const Header = () => {
	return (
		<header className={styles.container}>
			<h1 className={styles.title}>To-do App</h1>
		</header>
	);
};
