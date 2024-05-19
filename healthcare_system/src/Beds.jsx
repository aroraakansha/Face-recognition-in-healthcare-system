import React, { Component, useEffect, useState } from "react";
import axios from "axios";
export default function Beds({ userData }) {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:3001/BedsRegis")
      .then((users) => setUsers(users.data))
      .catch((err) => console.log(err));
  }, []);
  return (
    <>
      <div className="d-flex justify-content-center align-items-center">
      <div className="">
        <table className="table table-bordered table-hover"  >
        
          <thead>
            <tr>
              <th>Hospital Name</th>
              <th>Casyality Beds</th>            
              <th>General Ward Beds</th>
              <th>Semi-Special Beds</th>
              <th>Special Beds</th>
              <th>Deluxe Beds</th>
              <th>CCU Beds</th>
              <th>ICCU</th>
              <th>Sicy Beds</th>
              <th>Nicu Beds</th>
              <th>Picu Beds</th>
            </tr>
          </thead>
          <tbody>{
            users.map(user=>{
                return <tr>
                <td>{user.Name}</td>
                <td>{user.Bed1}</td>
                <td>{user.Bed2}</td>
                <td>{user.Bed3}</td>
                <td>{user. Bed4}</td>
                <td>{user. Bed5}</td>
                <td>{user. Bed6}</td>
                <td>{user.Bed7}</td><td>{user. pincode}</td>
                <td>{user. Bed8}</td>
                <td>{user. Bed9}</td>
                <td>{user. Bed10}</td>
                </tr>
            })
          } </tbody>
        </table>
        </div>
      </div>
    </>
  );
}