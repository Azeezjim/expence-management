/* eslint-disable no-undef */
import React, {useReducer, createContext} from 'react';

import contextReducer from './contextReducer';
const InitialState = []

export const ExpenseTrackerContext = createContext(InitialState)

export const Provider = ( { children } ) => {
  const [transaction, dispatch] = useReducer(contextReducer, initialState)

  const deleteTransaction = (id) => dispatch({type: "DELETE_TRANSTON" , payload: id})

  const addTransacton = (transaction) =>  dispatch({ type: "ADD_TRANSACTION", payload: transaction  })

  return (
    <ExpenseTrackerContext.Provider value =  {{ deleteTransaction, addTransacton}}>
      {children}
    </ExpenseTrackerContext.Provider>
  )
}