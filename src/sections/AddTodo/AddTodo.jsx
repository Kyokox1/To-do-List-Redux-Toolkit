import React, { useState, useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { addTodo, updateTodo, editTodo } from "../../redux/slices/todos";

import styles from "./addTodo.module.css";

export const AddTodo = ({ inputTodo }) => {
	const [inputContent, setInputContent] = useState("");

	const editableTodo = useSelector((state) => state.todos.editTodo);
	const dispatch = useDispatch();

	useEffect(() => {
		if (editableTodo) {
			setInputContent(editableTodo.task);
			inputTodo.current.focus();
		}
	}, [editableTodo]);

	const handleSubmit = (e) => {
		e.preventDefault();
		if (!inputContent) return;
		if (editableTodo) {
			dispatch(updateTodo({ task: inputContent, edit: editableTodo }));
			dispatch(editTodo(null));
		}
		if (!editableTodo) dispatch(addTodo(inputContent));
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
				{editableTodo ? "Edit Todo" : "Add Todo"}
			</button>
		</form>
	);
};
