import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { addTodo, updateTodo } from "../../redux/slices/todos";
import styles from "./addTodo.module.css";

export const AddTodo = ({ editTodo, setTodos, setEditTodo, inputTodo }) => {
	const [inputContent, setInputContent] = useState("");

	const dispatch = useDispatch();

	useEffect(() => {
		if (editTodo) {
			setInputContent(editTodo.task);
			inputTodo.current.focus();
		}
	}, [editTodo]);

	const handleSubmit = (e) => {
		e.preventDefault();
		if (!inputContent) return;
		if (editTodo) {
			dispatch(updateTodo({ task: inputContent, edit: editTodo }));
			setEditTodo(null);
		}
		// if (!editTodo) addTodo(inputContent);
		if (!editTodo) dispatch(addTodo({ task: inputContent }));
		setInputContent("");
	};

	// const updateTodo = () => {
	// 	setTodos((prevTodos) =>
	// 		prevTodos.map((todo) =>
	// 			todo.id === editTodo.id ? { ...todo, task: inputContent } : todo
	// 		)
	// 	);
	// 	setEditTodo(null);
	// };

	return (
		<form onSubmit={handleSubmit} className={styles.form}>
			<input
				ref={inputTodo}
				placeholder="New to-do"
				name="todos"
				value={inputContent}
				onChange={(e) => setInputContent(e.target.value)}
				autoFocus
			/>
			<button type="submit">
				{" "}
				{editTodo ? "Edit Todo" : "Add Todo"}
			</button>
		</form>
	);
};
