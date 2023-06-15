import { useEffect, useState } from "react";
import { aw } from "../../../utils/aw";

const Content = () => {
  const [data, setData] = useState();

  const getData = async () => {
    const UP_COMING = "upcoming?language=en-US&page=1";
    aw()
      .get(UP_COMING)
      .then((response) => {
        console.log(response.data.results);
        setData(response.data.results);
      })
      .catch((error) => console.error(error));
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className=" p-10 bg-gray-800">
      <h1 className="mb-8 text-4xl font-extrabold leading-none tracking-tight text-gray-200 md:text-5xl lg:text-6xl dark:text-white">
        UP COMING MOVIE
      </h1>
      <div className="grid grid-cols-4 gap-4">
        {data &&
          data.map((item, idx) => (
            <div
              key={idx}
              className="max-w-sm rounded bg-gray-200 overflow-hidden shadow-lg"
            >
              <img
                className="w-full"
                src={`https://www.themoviedb.org/t/p/w220_and_h330_face/${item.poster_path}`}
                alt="Sunset in the mountains"
              />
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">
                  {item.original_title}
                </div>
                <p className="text-gray-700 text-base">{item.release_date}</p>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Content;
