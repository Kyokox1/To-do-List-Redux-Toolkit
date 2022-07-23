import React, { useRef, useState } from "react";
import "./reset.css";
import style from "./App.module.css";
import { Header } from "./sections/Header/Header";
import { AddTodo } from "./sections/AddTodo/AddTodo";
import { TodoList } from "./sections/Body/TodoList";

function App() {
	// const tasks = [
	// 	{ id: 1, task: "hacer la cama", completed: false },
	// 	{ id: 2, task: "hacer algo", completed: false }
	// ];

	// const [todos, setTodos] = useState(tasks);
	const [editTodo, setEditTodo] = useState(null);
	const inputTodo = useRef(null);

	// const addTodo = (todo) => {
	// 	const newTodo = {
	// 		id: +new Date(),
	// 		task: todo,
	// 		completed: false
	// 	};
	// 	setTodos((prevTodos) => [...prevTodos, newTodo]);
	// };

	// const deleteTodo = (todo) => {
	// 	setTodos((prevTodos) =>
	// 		prevTodos.filter((todos) => todos.id !== todo.id)
	// 	);
	// 	inputTodo.current.focus();
	// };

	// const toggleTodo = (task) => {
	// 	setTodos((prevTodos) =>
	// 		prevTodos.map((todo) =>
	// 			todo.id === task.id
	// 				? { ...todo, completed: !todo.completed }
	// 				: todo
	// 		)
	// 	);
	// };

	return (
		<div className={style.container}>
			<section className={style.container__todos}>
				<Header />
				<main>
					<AddTodo
						editTodo={editTodo}
						setEditTodo={setEditTodo}
						inputTodo={inputTodo}
					/>
					<TodoList setEditTodo={setEditTodo} inputTodo={inputTodo} />
				</main>
				<footer></footer>
			</section>
		</div>
	);
}

export default App;
