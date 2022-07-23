import React from "react";
import styles from "./todoList.module.css";
import { BsTrashFill } from "react-icons/bs";
import { MdOutlineModeEdit } from "react-icons/md";

import { useSelector, useDispatch } from "react-redux";
import { deleteTodo, toggleTodo } from "../../redux/slices/todos";

export const TodoList = ({ setEditTodo }) => {
	const todos = useSelector((state) => state.todos);
	const dispatch = useDispatch();

	return (
		<>
			{todos.map((todo) => (
				<div key={todo.id} className={styles.todo__container}>
					<div className="pretty p-default">
						<input
							className={styles.todo__checkbox}
							type="checkbox"
							onChange={() => dispatch(toggleTodo(todo))}
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
							onClick={() => dispatch(deleteTodo(todo))}
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
