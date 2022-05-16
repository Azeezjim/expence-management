import { useContext } from "react";
import { ExpenseTrackerContext } from './context/context';

import { incomeCtigories, expenseCatigories, resetCatigories } from "./constants/catigories ";

const useTransaction = (title) => {
  resetCatigories(); 
  const { transactions } = useContext(ExpenseTrackerContext)

  const selectedCatigories = transactions.filter((t) => t.type === title)
}

export default useTransaction