import React from "react";
import styles from "./todoList.module.css";
import { BsTrashFill } from "react-icons/bs";
import { MdOutlineModeEdit } from "react-icons/md";

import { useSelector } from "react-redux";

export const TodoList = ({ toggleTodo, setEditTodo, deleteTodo }) => {
	const todos = useSelector((state) => state.todos);

	return (
		<>
			{todos.map((todo) => (
				<div key={todo.id} className={styles.todo__container}>
					<div className="pretty p-default">
						<input
							className={styles.todo__checkbox}
							type="checkbox"
							onChange={() => toggleTodo(todo)}
						/>
						<h3
							className={`
								${styles.todo__task} ${todo.completed && styles.completed}`}
						>
							{todo.task}
						</h3>
					</div>
					<div>
						<button
							onClick={() => setEditTodo(todo)}
							className={`${styles.todo__button} ${styles.todo__button__pencil}`}
						>
							<MdOutlineModeEdit />
						</button>
						<button
							onClick={() => deleteTodo(todo)}
							className={`${styles.todo__button} ${styles.todo__button__trash}`}
						>
							<BsTrashFill />
						</button>
					</div>
				</div>
			))}
		</>
	);
};
