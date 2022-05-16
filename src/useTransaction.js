import { useContext } from "react";
import { ExpenseTrackerContext } from './context/context';

import { incomeCtigories, expenseCatigories, resetCatigories } from "./constants/catigories ";

const useTransaction = (titles) => {
  resetCatigories(); 
  const { transactions } = useContext(ExpenseTrackerContext)
}

export default useTransaction