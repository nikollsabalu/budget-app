import { useState } from "react";
import Message from "./Message";
import BannerImage from "../public/mock.png";
import Banner from "../public/banner.svg";

const NewBudget = ({ budget, setBudget, setIsValidBudget }) => {
  const [amountMessage, setAmountMessage] = useState("");

  const handleBudget = (e) => {
    e.preventDefault();

    if (!budget || budget < 0) {
      setAmountMessage("*Enter a valid amount");
      return;
    }

    setAmountMessage("");
    setIsValidBudget(true);
  };

  return (
    <div className="headerContainer ">
      <img src={BannerImage} />
      <div className="formContainer">
        <div className="headerTitle">Control your finances</div>
      <div className="budgetContainer container shadow">
        <form onSubmit={handleBudget} className="form">
          <div className="campo">
            <label>Enter your budget:</label>
            <input
              className="newBudget"
              type="number"
              placeholder="Example: 1000"
              onChange={(e) => setBudget(Number(e.target.value))}
            />
            {amountMessage && (
              <Message tipo="error">{amountMessage}</Message>
            )}
          </div>

          <input type="submit" value="Get started" />
        </form>
      </div>
      </div>
    </div>
  );
};

export default NewBudget;
