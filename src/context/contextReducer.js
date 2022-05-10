// Reducer is a function that takes in the current state and an action and returns the next state.

const contextReducer = (state, action) => {
let transactions;

  switch (action.type) {
    case "DELETE+_TRANSACTION":
      transactions = state.filter((t) => t.id !== action.payload);

      return transactions;

    case "ADD_TRANSACTION":
      transactions = [action.payload,  ...state]

      return transactions;
    default:
      return state;
  }
};

export default contextReducer;    
