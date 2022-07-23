import React, { useState, useEffect } from "react";

import { addTodo, updateTodo } from "../../redux/slices/todos";
import { useDispatch } from "react-redux";

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
		if (!editTodo) dispatch(addTodo({ task: inputContent }));
		setInputContent("");
	};

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
