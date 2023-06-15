import React, { useEffect, useState } from "react";
import { aw } from "../../../utils/aw";
import { useParams } from "react-router-dom";

const Detail = () => {
  const [data, setData] = useState();
  const params = useParams();
  const getData = async () => {
    const DETAIL = `/${params.id}?language=en-US`;
    console.log(DETAIL);
    aw()
      .get(DETAIL)
      .then((response) => {
        console.log("DETAIL", response.data);
        setData(response.data);
      })
      .catch((error) => console.error(error));
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <div className="min-h-screen grid font-mono bg-gray-900">
      <div className="bg-white rounded-md bg-gray-800 shadow-lg">
        <div className="md:flex px-4 leading-none max-w-4xl">
          <div className="flex-none ">
            <img
              src={`https://www.themoviedb.org/t/p/w220_and_h330_face/${data?.poster_path}`}
              alt="pic"
              className="h-72 w-56 rounded-md shadow-2xl transform -translate-y-4 border-4 border-gray-300 shadow-lg"
            />
          </div>

          <div className="flex-col text-gray-300">
            <p className="pt-4 text-2xl font-bold">{data?.original_title}</p>
            <hr className="hr-text" data-content=""></hr>
            <p className="hidden md:block px-4 my-4 text-sm text-left">
              {data?.overview}
            </p>

            <div className="text-xs">
              {data?.genres?.map((item, index) => (
                <button
                  key={index}
                  type="button"
                  className="border border-gray-400 text-gray-400 rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-gray-900 focus:outline-none focus:shadow-outline"
                >
                  {item.name}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detail;
