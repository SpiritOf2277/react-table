import React from 'react';
import './App.css';

const Table = () => {
  const data = [
    { cc: "1", txt: "Data 1" },
    { cc: "3", txt: "Data 2" },
    { cc: "4", txt: "Data 3" },
    { cc: "7", txt: "Data 4" },
    { cc: "8", txt: "Data 5" }
  ];

  return (
    <table border="1">
      <thead>
        <tr>
          <th>CC</th>
          <th>Text</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => (
          <tr key={index}>
            <td>{item.cc}</td>
            <td>{item.txt}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

function App() {
  return (
    <div className="App">
      <h1>Table Example</h1>
      <Table />
    </div>
  );
}

export default App;
