import { useEffect, useState } from "react";
import DrinkItem from "./DrinkItem";
import { fw } from "../utils/fw";
import axios from "axios";
import { aw } from "../utils/aw";
import { Link } from "react-router-dom";

const FetchAPI = () => {
  const SEARCH_BY_FRIST_LATTER = "/search.php?f=a";
  const [drinks, setDrinks] = useState([]);

  // const asyncFetchAPI = async () => {
  //   try {
  //     const response = await fw({
  //       url: import.meta.env.VITE_API_URL,
  //       endPoint: SEARCH_BY_FRIST_LATTER,
  //     });

  //     if (response.unAuthorized) {
  //       console.log(response.message);
  //       return;
  //     }

  //     if (response.message) {
  //       console.log(response.message);
  //       return;
  //     }

  //     setDrinks(response.drinks);
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };

  const axioFETCHAPI = async () => {
    try {
      const response = await aw().get(
        `${import.meta.env.VITE_API_URL}${SEARCH_BY_FRIST_LATTER}`
      );
      setDrinks(response.data.drinks);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    // asyncFetchAPI();
    axioFETCHAPI();
  }, []);

  return (
    <div>
      <h1>FETCH API</h1>
      <div>
        <Link to="/dashboard">Go to Users</Link>
      </div>
      {drinks.map((item) => (
        <DrinkItem drink={item} key={item.idDrink} />
      ))}
    </div>
  );
};

export default FetchAPI;
