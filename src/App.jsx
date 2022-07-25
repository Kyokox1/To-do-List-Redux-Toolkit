import React, { useRef } from "react";

import "./reset.css";
import style from "./App.module.css";

import { Header } from "./sections/Header/Header";
import { AddTodo } from "./sections/AddTodo/AddTodo";
import { TodoList } from "./sections/Body/TodoList";
import { Footer } from "./sections/Footer/Footer";

function App() {
	const inputTodo = useRef(null);

	return (
		<div className={style.container}>
			<section className={style.container__todos}>
				<Header />
				<main>
					<AddTodo inputTodo={inputTodo} />
					<TodoList inputTodo={inputTodo} />
				</main>
				<Footer />
			</section>
		</div>
	);
}

export default App;
