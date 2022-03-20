import { useState, useEffect } from "react";
import userList from "./components/userList";

import axios from "axios";

function App() {
  const [usersList, setusersList] = useState([]);

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/users").then((result) => {
      setusersList(result.data);
    });
  }, []);
  return (
    <div>
        <userList usersList={usersList} />
    </div>
  );
}

export default App;
