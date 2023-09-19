import { useState } from "react";
import Child from "./Child";

const Parent = () => {
  const [userData, setUserData] = useState([]);

  const receiveDataFromChild = (dataFromUser) => {
    setUserData(dataFromUser);
  };

  return (
    <div>
      <div>
        <Child dataFromUser={receiveDataFromChild} />
        {userData.map((user) => {
          return <p>{user}</p>;
        })}
      </div>
    </div>
  );
};

export default Parent;
