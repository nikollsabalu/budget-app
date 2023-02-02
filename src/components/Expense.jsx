import React from "react";
import {
  LeadingActions,
  SwipeableList,
  SwipeableListItem,
  SwipeAction,
  TrailingActions,
} from "react-swipeable-list";
import "react-swipeable-list/dist/styles.css";

import { formatAmount, formatDate } from "../helpers";
import OnlineIcon from "../public/categories/online.svg";
import FoodIcon from "../public/categories/food.svg";
import ShoppingIcon from "../public/categories/shopping.svg";
import PaymentsIcon from "../public/categories/payments.svg";
import EducationIcon from "../public/categories/education.svg";
import SavingIcon from "../public/categories/saving.svg";
import EntertainmentIcon from "../public/categories/entertainment.svg";

const iconsList = {
  saving: SavingIcon,
  education: EducationIcon,
  online: OnlineIcon,
  payments: PaymentsIcon,
  food: FoodIcon,
  shopping: ShoppingIcon,
  entertainment: EntertainmentIcon
};

export const Expense = ({
  expense,
  editExpense,
  setEditExpense,
  deleteExpense,
}) => {
  const { category, name, amount, id, date } = expense;


  const leadingActions = () => (
    <LeadingActions>
      <SwipeAction onClick={() => setEditExpense(expense)}>Edit</SwipeAction>
    </LeadingActions>
  );

  const trailingActions = () => (
    <TrailingActions>
      <SwipeAction onClick={() => deleteExpense(id)} destructive={true}>
        Delete
      </SwipeAction>
    </TrailingActions>
  );

  return (
    <SwipeableList>
      <SwipeableListItem
        leadingActions={leadingActions()}
        trailingActions={trailingActions()}
      >
        <div className="expenseContainer">
          <img src={iconsList[category]} alt={`${iconsList[category]} icon`} />
          <div className="expenseDescription">
            <p className="expenseName">
              {name}
            </p>
            <p className="expenseCategory">{category}</p>
            <p className="expenseDate">{formatDate(date)}</p>
          </div>
        </div>
        <div className="expenseQuantity">{formatAmount(amount)}</div>
      </SwipeableListItem>
    </SwipeableList>
  );
};
