import { useState } from "react";
import Message from "./Message";
import BannerImage from "../public/banner-image.png";
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
    <>
     <img src={Banner} alt="" className="banner"/>
      <div className="newBudgetContainer">       
        <div className="headerContainer">
          <img
            src={BannerImage}
            alt=""
            className="BannerImage"
          />
          <div className="budgetContainer container shadow">
            <form onSubmit={handleBudget} className="form">
              <p className="headerTitle">Control your finances</p>
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
    </>
  );
};

export default NewBudget;
