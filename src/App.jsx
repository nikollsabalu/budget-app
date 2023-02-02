import { useState, useEffect } from 'react'
import './App.css'
import HomePage from './pages/HomePage';

function App() {

  const [budget, setBudget] = useState(
    localStorage.getItem('budget') ?? 0
  );
  const [expenses, setExpenses] = useState(
    localStorage.getItem('expenses') ? JSON.parse(localStorage.getItem('expenses')) : []
);
  const [month, setMonth] = useState('');
  const [isValidBudget, setIsValidBudget] = useState(false);

  useEffect(() => {
    localStorage.setItem('budget', budget ?? 0)
  }, [budget]);


  useEffect(() => {
    localStorage.setItem('expenses', JSON.stringify(expenses) ?? [])

}, [expenses]);

  useEffect(() => {
    const budgetLS = Number(localStorage.getItem('budget', budget)) ?? 0;

    if (budgetLS) {
      setIsValidBudget(true)
    }

  }, []);


  return (
    <div>
      <HomePage
        budget={budget}
        setBudget={setBudget}
        expenses={expenses}
        setExpenses={setExpenses}
        setMonth={setMonth}
        isValidBudget={isValidBudget}
        setIsValidBudget={setIsValidBudget}
      />

    </div>

  )
}

export default App
