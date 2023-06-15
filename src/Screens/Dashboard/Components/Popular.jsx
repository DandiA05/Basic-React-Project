import { useEffect, useState } from "react";
import { aw } from "../../../utils/aw";
import { Link } from "react-router-dom";

const Content2 = () => {
  const [data, setData] = useState();

  const getData = async () => {
    const POPULAR = "popular?language=en-US&page=1";
    aw()
      .get(POPULAR)
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
        LIST MOVIE POPULAR
      </h1>
      <div className="grid grid-cols-4 gap-4">
        {data &&
          data.map((item, idx) => (
            <Link key={idx} to={`/popular/${item.id}`}>
              <div className="max-w-sm rounded bg-gray-200 overflow-hidden shadow-lg">
                <img
                  className="w-full"
                  src={`https://www.themoviedb.org/t/p/w220_and_h330_face/${item.poster_path}`}
                  alt="Sunset in the mountains"
                />
                <div className="px-6 py-4">
                  <div className="font-bold  text-xl mb-2">
                    {item.original_title}
                  </div>
                  <p className="text-gray-700 text-base">{item.release_date}</p>
                </div>
              </div>
            </Link>
          ))}
      </div>
    </div>
  );
};

export default Content2;
