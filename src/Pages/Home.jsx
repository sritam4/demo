import { useState } from "react";
import { useDispatch } from "react-redux";
import { addNames } from "../Utils/appSlice";

const Home = () => {
  const dispatch = useDispatch();
  const [userName, setUserName] = useState();

  const submitHandler = () => {
    userName && dispatch(addNames(userName));
    setUserName("");
  };

  return (
    <div style={{ margin: "30px" }}>
      <input
        type="text"
        placeholder="Enter your name "
        value={userName}
        onChange={(e) => setUserName(e.target.value)}
      />
      <button onClick={() => submitHandler()}>Submit</button>
    </div>
  );
};

export default Home;
