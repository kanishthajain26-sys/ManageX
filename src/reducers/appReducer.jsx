export const initialState = {
  users: [],
  loading: false,
  error: "",
  search: "",
  role: "All",
  currentPage: 1,

  
  theme: localStorage.getItem("theme") || "light",
};

function appReducer(state, action) {
  switch (action.type) {
    case "FETCH_START":
      return {
        ...state,
        loading: true,
        error: "",
      };

    case "FETCH_SUCCESS":
      return {
        ...state,
        loading: false,
        users: action.payload,
      };

    case "FETCH_ERROR":
      return {
        ...state,
        loading: false,
        error: "Failed to load users",
      };

    case "SET_SEARCH":
      return {
        ...state,
        search: action.payload,
        currentPage: 1,
      };

    case "SET_ROLE":
      return {
        ...state,
        role: action.payload,
        currentPage: 1,
      };

    case "SET_PAGE":
      return {
        ...state,
        currentPage: action.payload,
      };

    case "DELETE_USER":
      return {
        ...state,
        users: state.users.filter(
          (user) => user.id !== action.payload
        ),
      };

    case "ADD_USER":
      return {
        ...state,
        users: [action.payload, ...state.users],
      };


    case "TOGGLE_THEME": {
      const newTheme =
        state.theme === "light" ? "dark" : "light";

      localStorage.setItem("theme", newTheme);

      return {
        ...state,
        theme: newTheme,
      };
    }

    default:
      return state;
  }
}

export default appReducer;