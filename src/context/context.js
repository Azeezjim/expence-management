import React, {useReducer, createContext} from 'react';

const InitialState = []

export const ExpenseTrackerContext = createContext(InitialState)

export const Provider = ( { children } ) => {
  return (
    <ExpenseTrackerContext.Provider value = {{ appName: "Expence Tracker"}}>
      {children}
    </ExpenseTrackerContext.Provider>
  )
}