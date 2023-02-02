import OnlineIcon from "../public/categories/online.svg";
import FoodIcon from "../public/categories/food.svg";
import ShoppingIcon from "../public/categories/shopping.svg";
import PaymentsIcon from "../public/categories/payments.svg";
import EducationIcon from "../public/categories/education.svg";
import SavingIcon from "../public/categories/saving.svg";
import EntertainmentIcon from "../public/categories/entertainment.svg";

export const Filters = ({ filter, setFilter }) => {
  const categories = [
    "saving",
    "payments",
    "food",
    "education",
    "shopping",
    "online",
    "entertainment"
  ];

  const iconsList = {
    saving: SavingIcon,
    education: EducationIcon,
    online: OnlineIcon,
    payments: PaymentsIcon,
    food: FoodIcon,
    shopping: ShoppingIcon,
    entertainment: EntertainmentIcon
  };

  return (
    <>
      <div className="categoriesTitle">Categories:</div>
      <br />
      <div className="categoriesContainer">
        {categories.map((category) => (
          <div className="categoryContainer" key={category}>
            <button
              value={category}
              className={filter === category ? `category active` : `category`}
              onClick={(e) => setFilter(e.target.value)}
            >
              <img src={iconsList[category]} alt={iconsList[category]} />
            </button>
            <div>{category}</div>
          </div>
        ))}
      </div>
    </>
  );
};
