import { useContext } from "react";
import { ExpenseTrackerContext } from './context/context';

import { incomeCategories, expenseCategories, resetCategories } from "./constants/categories";

const useTransaction = (title) => {
  resetCategories(); 
  const { transactions } = useContext(ExpenseTrackerContext)

  const transactionsPerType = transactions.filter((t) => t.type === title)
  const total = transactionsPerType.reduce((acc, currval) => acc += currval.amount, 0 )
  const categories = total ==='income' ? incomeCategories : expenseCategories;

  console.log({transactionsPerType, total, categories });

  transactionsPerType.forEach((t) => {
    const catigory = categories.find((c) => c.type === t.catigory)

    if(catigory) catigory.amount += t.amount;
  })

  const filteredCatigory = categories.filter((c) => c.amount > 0); 
  
  const chatData ={
    datasets : [{
      data: filteredCatigory.map((c) => c.amount),
      backgroundColor: filteredCatigory.map((c) => c.color)
    }],
    labels: filteredCatigory.map((c) => c.type)
  }

  return { total, chatData   }  
}

export default useTransaction