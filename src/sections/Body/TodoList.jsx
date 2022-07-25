import React from "react";
import { BsTrashFill } from "react-icons/bs";
import { MdOutlineModeEdit } from "react-icons/md";

import { useSelector, useDispatch } from "react-redux";
import { deleteTodo, editTodo, toggleTodo } from "../../redux/slices/todos";

import styles from "./todoList.module.css";

export const TodoList = ({ inputTodo }) => {
	const todos = useSelector((state) => state.todos.todo);
	const dispatch = useDispatch();

	const handleToggleTodo = (todo) => {
		dispatch(toggleTodo(todo));
		inputTodo.current.focus();
	};

	const handleDeleteTodo = (todo) => {
		dispatch(deleteTodo(todo));
		inputTodo.current.focus();
	};

	return (
		<>
			{todos.map((todo) => (
				<div key={todo.id} className={styles.todo__container}>
					<div className="pretty p-default">
						<input
							className={styles.todo__checkbox}
							type="checkbox"
							onChange={() => handleToggleTodo(todo)}
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
							onClick={() => dispatch(editTodo(todo))}
							className={`${styles.todo__button} ${styles.todo__button__pencil}`}
						>
							<MdOutlineModeEdit />
						</button>
						<button
							onClick={() => handleDeleteTodo(todo)}
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
