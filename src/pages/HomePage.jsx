import ControlBudget from "../components/ControlBudget";
import NewBudget from "../components/NewBudget";
import Footer from "../components/Footer";

const HomePage = ({
  budget,
  setBudget,
  month,
  setMonth,
  isValidBudget,
  setIsValidBudget,
  setIsValidMonth,
  expenses,
  setExpenses,
}) => {
  return (
    <>
      {isValidBudget ? (
        <div className="homePage">
          <header>{isValidBudget ? <h1>Budget</h1> : ""}</header>
          <ControlBudget
            budget={budget}
            setBudget={setBudget}
            expenses={expenses}
            setExpenses={setExpenses}
            setIsValidBudget={setIsValidBudget}
          />
        </div>
      ) : (
        <NewBudget
          budget={budget}
          setBudget={setBudget}
          month={month}
          setMonth={setMonth}
          setIsValidBudget={setIsValidBudget}
          setIsValidMonth={setIsValidMonth}
        />
      )}

      <Footer />
    </>
  );
};

export default HomePage;
