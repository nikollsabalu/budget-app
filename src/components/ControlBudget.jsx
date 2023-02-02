import { useState, useEffect } from "react";
import {
  CircularProgressbarWithChildren,
  buildStyles,
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

import { formatAmount } from "../helpers";
import { Modal } from "./Modal";
import { ExpenseList } from "./ExpenseList";

import { generateId } from "../helpers";
import { Filters } from "./Filters";
import IncomeIcon from "../public/income.svg";
import ExpenseIcon from "../public/expense.svg";

const ControlBudget = ({
  budget,
  setBudget,
  expenses,
  setExpenses,
  setIsValidBudget,
}) => {
  const [modal, setModal] = useState(false);
  const [animateModal, setAnimateModal] = useState(false);
  const [spent, setSpent] = useState(0);
  const [available, setAvailable] = useState(0);
  const [editExpense, setEditExpense] = useState({});
  const [percent, setPercent] = useState(0);
  const [filter, setFilter] = useState("");
  const [expensesFiltered, setExpensesFiltered] = useState([]);

  useEffect(() => {
    const spentTotal = expenses.reduce(
      (total, expense) => expense.amount + total,
      0
    );
    const availableTotal = budget - spentTotal;

    //Caculate percent
    const newPercent = (((budget - availableTotal) / budget) * 100).toFixed(1);

    setAvailable(availableTotal);
    setPercent(newPercent);
    setTimeout(() => {
      setSpent(spentTotal);
    }, 300);
  }, [expenses]);

  useEffect(() => {
    if (Object.keys(editExpense).length > 0) {
      setModal(true);
      setAnimateModal(true);
    }
  }, [editExpense]);

  useEffect(() => {
    if (filter) {
      //filter expenses by categories
      const expensesFiltered = expenses.filter(
        (expense) => expense.category === filter
      );
      setExpensesFiltered(expensesFiltered);
    }
  }, [filter]);

  const handleNewExpense = () => {
    setModal(true);
    setEditExpense({});
    setAnimateModal(true);
  };

  const handleCreateNewBudget = () => {
    const result = confirm(
      "This action deletes all the registered data. Are you sure to create a new budget?"
    );

    if (result) {
      setBudget(0);
      setExpenses([]);
      setIsValidBudget(false);
    }
  };

  const saveExpense = (expense) => {
    if (expense.id) {
      //Update
      const expensesUpdated = expenses.map((expenseState) =>
        expenseState.id == expense.id ? expense : expenseState
      );
      setExpenses(expensesUpdated);
      setEditExpense({});
    } else {
      //New expense
      expense.id = generateId();
      expense.date = Date.now();
      setExpenses([...expenses, expense]);
    }

    setAnimateModal(false);
    setModal(false);
  };

  const deleteExpense = (id) => {
    const expensesUpdated = expenses.filter((expense) => expense.id !== id);
    setExpenses(expensesUpdated);
  };

  return (
    <div className={modal ? 'pinUp': ''}>
      <div className="budgetContainer two-columns">
        <div className="budgetFirstColumn">
          <div className="budgetCardContainer">
            <div className="budgetCard">
              <h3>Spent</h3>
              <h2> {formatAmount(spent)}</h2>
              <h4> of {formatAmount(budget * 1)} </h4>

            </div>

            <div className="graphicContainer">
              <CircularProgressbarWithChildren
                value={percent}
                styles={buildStyles({
                  pathColor: percent > 100 ? `var(--orange)` : `var(--orange)`,
                  trailColor: "rgba(255,255,255,0.25)",
                })}
              >
                <strong>{percent}%</strong>
              </CircularProgressbarWithChildren>
              <h3>Available: {formatAmount(available)}</h3>
            </div>
          </div>

          <div className="transactionsContainer">
            <div>
              <img src={IncomeIcon} alt="Income Icon" />
              <div className="income">
                <h5>Income</h5>
                <h3>+ {formatAmount(budget * 1)}</h3>
              </div>
            </div>
            <div>
              <img src={ExpenseIcon} alt="Spend Icon" />
              <div className="spend">
                <h5>Spend:</h5>
                <h3> { spent > 0 ? `- ${formatAmount(spent)}` :  formatAmount(spent) }</h3>
              </div>
            </div>
          </div>

          <div className="buttonContainer">
            <button
              className="button-primary active"
              onClick={handleNewExpense}
            >
              + Add spending
            </button>
          </div>

          <div>
              <button
                className="button-secondary"
                onClick={handleCreateNewBudget}
              >
                Reset budget
              </button>

          </div>
        </div>

        <div className="budgetSecondColumn">
          <Filters filter={filter} setFilter={setFilter} />
          <ExpenseList
            expenses={expenses}
            editExpense={editExpense}
            setEditExpense={setEditExpense}
            deleteExpense={deleteExpense}
            filter={filter}
            expensesFiltered={expensesFiltered}
          />
        </div>
      </div>

      {modal && (
        <Modal
          setModal={setModal}
          animateModal={animateModal}
          setAnimateModal={setAnimateModal}
          saveExpense={saveExpense}
          editExpense={editExpense}
          setEditExpense={setEditExpense}
        />
      )}
    </div>
  );
};

export default ControlBudget;
