import React from "react";

import { useSelector } from "react-redux";

import styles from "./footer.module.css";

export const Footer = () => {
	const todos = useSelector((state) => state.todos);

	const incompleteTodos = todos.filter((todo) => !todo.completed);

	return (
		<footer>
			{incompleteTodos.length === 0 ? (
				<h4 className={styles.complete__todos}>Well done!</h4>
			) : (
				<h4 className={styles.incomplete__todos}>
					You have {incompleteTodos.length} pending{" "}
					{incompleteTodos.length > 1 ? "tasks" : "task"}.
				</h4>
			)}
		</footer>
	);
};
