import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	todo: [
		{ id: 1, task: "hacer la cama", completed: false },
		{ id: 2, task: "hacer algo", completed: false },
		{ id: 3, task: "hacer jijij", completed: false }
	],

	editTodo: null
};

const todoSlice = createSlice({
	name: "todos",
	initialState,
	reducers: {
		addTodo(state, action) {
			const newTodo = {
				id: +new Date(),
				task: action.payload,
				completed: false
			};
			// return [...state, newTodo];
			state.todo = [...state.todo, newTodo];
		},

		deleteTodo(state, action) {
			state.todo = state.todo.filter(
				(todo) => todo.id !== action.payload.id
			);
		},

		toggleTodo(state, action) {
			state.todo = state.todo.map((todo) =>
				todo.id === action.payload.id
					? { ...todo, completed: !todo.completed }
					: todo
			);
		},

		updateTodo(state, action) {
			state.todo = state.todo.map((todo) =>
				todo.id === action.payload.edit.id
					? { ...todo, task: action.payload.task }
					: todo
			);
		},

		editTodo(state, action) {
			state.editTodo = action.payload;
		}
	}
});

export const { addTodo, deleteTodo, toggleTodo, updateTodo, editTodo } =
	todoSlice.actions;
export default todoSlice.reducer;
