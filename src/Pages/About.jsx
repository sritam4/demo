import { useDispatch, useSelector } from "react-redux";
import { removeName } from "../Utils/appSlice";

const About = () => {
  const userNames = useSelector((store) => store.app);
  const dispatch = useDispatch();

  const handleRemove = (i) => {
    dispatch(removeName(i));
  };

  console.log(userNames);

  return (
    <div>
      <h2>About Page </h2>
      {userNames?.length === 0 ? null : (
        <ul>
          {userNames?.map((name, index) => {
            return (
              <li style={{ display: "flex" }} key={index}>
                <p>{name}</p>
                <p
                  style={{ marginLeft: "100px", border: "1px solid" }}
                  onClick={() => handleRemove(index)}
                >
                  {"X"}
                </p>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default About;
