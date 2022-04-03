import { useState, useEffect } from "react";
import "./App.css";
import DataTable from "./components/DataTable";
function App() {
  const [query, setQuery] = useState("");
  const [usersData, setUsersData] = useState([]);
 

  useEffect(() => {
    fetch(
      "https://geektrust.s3-ap-southeast-1.amazonaws.com/adminui-problem/members.json"
    )
      .then((res) => res.json())
      .then((data) => setUsersData(data));
  }, []);

  const search = (rows) => {
    const columns = rows[0] && Object.keys(rows[0]);
    return rows.filter((row) =>
      columns.some(
        (column) =>
          row[column].toString().toLowerCase().indexOf(query.toLowerCase()) > -1
      )
    );
  };

  return (
    <div className="App">
      <div>
        <input
          type="text"
          placeholder="Search by name, email or role"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </div>
      <DataTable data={search(usersData)} />
  
    </div>
  );
}

export default App;
