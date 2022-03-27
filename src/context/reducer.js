export const initialState = {
  todos: [
    {
      id: 1,
      content: "todo 1",
      isCompleted: false,
    },
  ],
};
export const reducer = (state, action) => {
  console.log(action);
  console.log(state);
  switch (action.type) {
    case "ADD_TODO":
      return {
        ...state,
        todos: [action.payload, ...state.todos],
      };
    case "REMOVE_TODO":
      return {
        ...state,
        todos: [...state.todos].filter((todo) => todo.id !== action.payload),
      };
    case "COMPLETE_TODO":
      return {
        ...state,
        todos: [...state.todos].map((todo) => {
          if (todo.id === action.payload) {
            return { ...todo, isCompleted: !todo.isCompleted };
          } else {
            return todo;
          }
        }),
      };
    case "UPDATE_TODO":
      return {
        ...state,
        todos: [...state.todos].map((todo) => {
          if (todo.id === action.payload.todoId) {
            return { ...todo, content: action.payload.newValue };
          } else {
            return todo;
          }
        }),
      };
    default:
      return state;
  }
};
export default reducer;
