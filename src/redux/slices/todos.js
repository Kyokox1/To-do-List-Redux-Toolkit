import { createSlice } from "@reduxjs/toolkit";

const initialState = [
	{ id: 1, task: "hacer la cama", completed: false },
	{ id: 2, task: "hacer algo", completed: false },
	{ id: 3, task: "hacer jijij", completed: false }
];

const todoSlice = createSlice({
	name: "todos",
	initialState,
	reducers: {
		addTodo(state, action) {
			const newTodo = {
				id: +new Date(),
				task: action.payload.task,
				completed: false
			};
			// state.push(newTodo);
			return [...state, newTodo];
		},

		deleteTodo(state, action) {
			return state.filter((todo) => todo.id !== action.payload.id);
			// inputTodo.current.focus();
		},

		toggleTodo(state, action) {
			return state.map((todo) =>
				todo.id === action.payload.id
					? { ...todo, completed: !todo.completed }
					: todo
			);
		}

		// updateTodo(state,action) {

		// 		state.map((todo) =>
		// 			todo.id === editTodo.id
		// 				? { ...todo, task: inputContent }
		// 				: todo
		// 		)

		// 	setEditTodo(null);
		// }
	}
});

export const { addTodo, deleteTodo, toggleTodo } = todoSlice.actions;
export default todoSlice.reducer;
