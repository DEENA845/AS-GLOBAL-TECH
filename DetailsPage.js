import React, { useState } from "react";

const DetailsPage = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [records, setRecords] = useState([]);

  const handleAdd = (e) => {
    e.preventDefault();
    setRecords([...records, { name, age }]);
    setName("");
    setAge("");
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>Details Page</h2>
      <form onSubmit={handleAdd}>
        <div>
          <label>Name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Age:</label>
          <input
            type="number"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            required
          />
        </div>
        <button type="submit">Add</button>
      </form>
      <h3>Details Table</h3>
      <table border="1" style={{ margin: "0 auto" }}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
          </tr>
        </thead>
        <tbody>
          {records.map((record, index) => (
            <tr key={index}>
              <td>{record.name}</td>
              <td>{record.age}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DetailsPage;
