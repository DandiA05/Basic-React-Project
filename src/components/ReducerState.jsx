import { useEffect, useMemo, useReducer, useRef } from "react";

const initialState = {
  counter: 0,
};

const actions = {
  INCREMENT: "increment",
  SET_NAME: "set_name",
};

const counterReducer = (state, action) => {
  switch (action.type) {
    case actions.INCREMENT:
      return { ...state, counter: state.counter + 1 };
    case action.SET_NAME:
      return { ...state, name: action.payload };
    default:
      return state;
  }
};

const factorial = (n) => {
  if (n === 0 || n === 1) {
    return 1;
  }
  return n * (n - 1);
};

const ReducerState = () => {
  const [state, dispatch] = useReducer(counterReducer, initialState);
  const { counter, name } = state;

  const inputRef = useRef(null);
  console.log("render");

  const handleFacotrial = useMemo(() => factorial(10), [factorial]);

  useEffect(() => {
    // if (counter === 2) {
    //   console.log("COUNTER");
    // }
    console.log(inputRef.current);
  }, [inputRef.current]);

  const updateRef = () => {
    inputRef.current = "string";
  };

  //belum bisa nihhhhhh
  const debounceRef = useRef(null);
  const onChange = (e) => {
    if (debounceRef.current) clearTimeout(debounceRef.current);
    debounceRef.current = setTimeout(() => {
      console.log(e.target.value);
    }, 800);
  };
  return (
    <div>
      <h1 className="text-rose-900 ">Reducer State</h1>
      <input ref={inputRef} />
      <p className="text-orange-800">{counter}</p>
      <p>{name}</p>
      <button
        className="bg-amber-400 text-white rounded"
        onClick={() => console.log(inputRef.current)}
      >
        Update Ref
      </button>
      <button
        className=""
        onClick={() => {
          dispatch({ type: actions.INCREMENT });
          dispatch({ type: actions.SET_NAME, payload: "Budi" });
          updateRef();
        }}
      >
        {" "}
        Add Counter
      </button>
      <br></br>
      <input onChange={onChange} />
    </div>
  );
};

export default ReducerState;
