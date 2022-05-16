import { useContext } from "react";
import { ExpenseTrackerContext } from './context/context';

import { incomeCtigories, expenseCatigories, resetCatigories } from "./constants/catigories ";

const useTransaction = (title) => {
  resetCatigories(); 
  const { transactions } = useContext(ExpenseTrackerContext)

  const transactionsPerType = transactions.filter((t) => t.type === title)
  const total = transactionsPerType.reduce((acc, corrval) => acc += corrval.amount, 0 )
  const catigories = total ==='income' ? incomeCtigories : expenseCatigories;

  console.log({transactionsPerType, total, catigories });

  transactionsPerType.forEach((t) => {
    const catigory = catigories.find((c) => c.type === t.catigory)
  })
}

export default useTransaction