import React, { useRef, useState } from "react";

import "./reset.css";
import style from "./App.module.css";

import { Header } from "./sections/Header/Header";
import { AddTodo } from "./sections/AddTodo/AddTodo";
import { TodoList } from "./sections/Body/TodoList";
import { Footer } from "./sections/Footer/Footer";

function App() {
	const [editTodo, setEditTodo] = useState(null);
	const inputTodo = useRef(null);

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
				<Footer />
			</section>
		</div>
	);
}

export default App;
