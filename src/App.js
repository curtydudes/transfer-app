import { useState } from "react";
import "./App.css";
import data from "./assets/data.json";

function App() {
  const [users, setUsers] = useState(data);
  const [show, setShow] = useState(false);
  const [sender, setSender] = useState("");
  const [receiver, setReceiver] = useState("");
  const [amount, setAmount] = useState("");

  const userExist = (name) => {};

  const findUser = (name) => {};

  const transferMoney = () => {};

  return (
    <div className="App">
      {
        <div>
          {users.map((user) => {
            return (
              <div key={user.id}>
                {" "}
                {user.name} - {user.balance}
              </div>
            );
          })}
        </div>
      }
      {
        <form onSubmit={transferMoney}>
          <label>Sender:</label>
          <input
            type="text"
            value={sender}
            onChange={(event) => setSender(event.target.value)}
            required
          ></input>
          <br />
          <input
            type="text"
            value={receiver}
            onChange={(event) => setreceiver(event.target.value)}
            required
          ></input>
          <br />
          <input
            type="nummber"
            value={amount}
            onChange={(event) => setAmount(event.target.value)}
            required
          ></input>
          <br />
          <button>Confirm Transfer</button>
        </form>
      }
    </div>
  );
}

export default App;
