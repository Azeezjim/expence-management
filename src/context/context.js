/* eslint-disable no-undef */
import React, {useReducer, createContext} from 'react';

import contextReducer from './contextReducer';
const InitialState = []

export const ExpenseTrackerContext = createContext(InitialState)

export const Provider = ( { children } ) => {
  const [transaction, dispatch] = useReducer(contextReducer, initialState)
  const deleteTransaction = (id) +> {
    dispatch({type: "DELETE_TRANSTON" , payrole: id})
  }

  return (
    <ExpenseTrackerContext.Provider value =  {{ appName: "Expence Tracker"}}>
      {children}
    </ExpenseTrackerContext.Provider>
  )
}