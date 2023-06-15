import React from "react";
import { Link } from "react-router-dom";
import { preload } from "swr";
import { fw } from "../utils/fw";

const DrinkItem = ({ drink }) => {
  return (
    <Link to={`/${drink.idDrink}`}>
      <p
        onMouseOver={() =>
          preload(
            [
              import.meta.env.VITE_API_URL,
              `/lookup.php?i=${drink.idDrink}`,
              "GET",
            ],
            ([url, endPoint, method]) => fw({ url, endPoint, method })
          )
        }
      >
        {drink.strDrink}
      </p>
    </Link>
  );
};

export default DrinkItem;
