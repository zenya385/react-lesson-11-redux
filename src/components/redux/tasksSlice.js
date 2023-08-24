import { createSlice, nanoid } from "@reduxjs/toolkit";
import { fetchTasks } from "./operations";

const tasksInitialState = [
  { id: 0, text: "Learn HTML and CSS", completed: true },
  { id: 1, text: "Get good at JavaScript", completed: true },
  { id: 2, text: "Master React", completed: false },
  { id: 3, text: "Discover Redux", completed: false },
  { id: 4, text: "Build amazing apps", completed: false },
];

const tasksSlice = createSlice({
  // Ім'я слайсу
  name: "tasks",
  // Початковий стан редюсера слайсу
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },
  // // Об'єкт редюсерів
  // reducers: {
  //   // Виконається в момент старту HTTP-запиту
  //   fetchingInProgress(state) {
  //     state.isLoading = true;
  //   },
  //   // Виконається якщо HTTP-запит завершився успішно
  //   fetchingSuccess(state, action) {
  // state.isLoading = false;
  // state.error = null;
  // state.items = action.payload;
  //   },
  //   // Виконається якщо HTTP-запит завершився з помилкою
  //   fetchingError(state, action) {
  // state.isLoading = false;
  // state.error = action.payload;
  //   },
  //   // addTask: {
  //   //   reducer(state, action) {
  //   //     state.push(action.payload);
  //   //   },
  //   //   prepare(text) {
  //   //     return {
  //   //       payload: {
  //   //         text,
  //   //         id: nanoid(),
  //   //         completed: false,
  //   //       },
  //   //     };
  //   //   },
  //   // },
  //   // deleteTask(state, action) {
  //   //   const index = state.findIndex(task => task.id === action.payload);
  //   //   state.splice(index, 1);
  //   // },
  //   // toggleCompleted(state, action) {
  //   //   for (const task of state) {
  //   //     if (task.id === action.payload) {
  //   //       task.completed = !task.completed;
  //   //       break;
  //   //     }
  //   //   }
  //   // },
  // },
  // Додаємо обробку зовнішніх екшенів
  extraReducers: {
    [fetchTasks.pending](state) {
      state.isLoading = true;
    },
    [fetchTasks.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.items = action.payload;
    },
    [fetchTasks.rejected](state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});
// export const tasksReducer = tasksSlice.reducer;
// Експортуємо генератори екшенів та редюсер
// export const { addTask, deleteTask, toggleCompleted } = tasksSlice.actions;
export const tasksReducer = tasksSlice.reducer;

// export const { fetchingInProgress, fetchingSuccess, fetchingError } =
//   tasksSlice.actions;
