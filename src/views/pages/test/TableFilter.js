import React, { useEffect, useState } from "react";
import "../../../style/test.css";

const TableFilter = () => {

  const [search, setSearch] = useState("");
  const [state, setState] = useState([])


  //#region Event

  const handleSearchChange = (e) => {
    setSearch(e.target.value);
  };


  //#endregion

  useEffect(() => {
    const data=[
        { id: 1, name: "Karim Uddin", age: 54, city: "Chittagong" },
        { id: 2, name: "Aslam Uddin", age: 64, city: "Dhaka" },
        { id: 3, name: "Moin Uddin", age: 25, city: "Noakhali" },
        { id: 4, name: "Iqbal Hossain", age: 12, city: "Comilla" },
        { id: 5, name: "Amjad Uddin", age: 41, city: "Rajshahi" },
        { id: 6, name: "Akbar", age: 13, city: "Sylhet" },
        { id: 7, name: "Rasel", age: 41, city: "Nobinagar" },
        { id: 8, name: "Faruk", age: 45, city: "Chittagong" },
        { id: 9, name: "Shaiful Islam", age: 54, city: "Dhaka" },
        { id: 10, name: "Monir", age: 7, city: "Comilla" },
      ];

    const filterData= !search ? data : data.filter(item=>Object.values(item).join('').toLowerCase().includes(search.toLowerCase()));
    setState(filterData)
  }, [search])
  

  return (
    <div className="maindiv">
      <input
        type="text"
        name="search"
        id="search"
        placeholder="Search..."
        value={search}
        onChange={(e) => handleSearchChange(e)}
      />
      <table id="customer">
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>City</th>
          </tr>
        </thead>
        <tbody>
          {state?.map((item) => (
            <tr key={item.id}>
              <td>{item.name}</td>
              <td>{item.age}</td>
              <td>{item.city}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TableFilter;

