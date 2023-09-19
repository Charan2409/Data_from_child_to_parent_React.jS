import { useState } from "react";
const Child = ({ dataFromUser }) => {
  const [receivedData, setReceivedData] = useState([]);
  const handleChange = (e) => {
    setReceivedData([...receivedData, e.target.value]);
    dataFromUser(receivedData);
  };
  const handleReset = () => {
    setReceivedData([]);
  };
  return (
    <div>
      <div className="child-card">
        <form>
          <label>Username</label>
          <br />
          <input
            type="text"
            name="username"
            autoComplete="off"
            onChange={(e) => handleChange(e)}
          ></input>
          <button onClick={handleReset}>Reset</button>
        </form>
      </div>
    </div>
  );
};

export default Child;
