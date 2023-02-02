import { Expense } from "./Expense";

export const ExpenseList = ({
  expenses,
  editExpense,
  setEditExpense,
  deleteExpense,
  filter,
  expensesFiltered,
}) => {
  return (
    <div className="listado-expenses">
      {filter ? (
        <>
          <h4>
            {expensesFiltered.length
              ? "Transactions"
              : "There are no transactions in this category"}
          </h4>
          <span>
            {expensesFiltered.length
              ? "Swipe right to edit and swipe left to delete!"
              : ""}
          </span>
          <br />
          {expensesFiltered.map((expense) => (
            <Expense
              key={expense.id}
              expense={expense}
              editExpense={editExpense}
              setEditExpense={setEditExpense}
              deleteExpense={deleteExpense}
            />
          ))}
        </>
      ) : (
        <>
          <h4>{expenses.length ? "Transactions" : "No transactions yet"}</h4>
          <span>
            {expenses.length
              ? "Swipe right to edit and swipe left to delete!"
              : ""}
          </span>
          <br />
          {expenses.map((expense) => (
            <Expense
              key={expense.id}
              expense={expense}
              editExpense={editExpense}
              setEditExpense={setEditExpense}
              deleteExpense={deleteExpense}
            />
          ))}
        </>
      )}
    </div>
  );
};
