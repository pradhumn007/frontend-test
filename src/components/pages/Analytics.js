import * as React from "react";
import { useEffect, useState } from "react";
import Axios from "axios";

import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Legend } from "recharts";

export default function Analytics() {
  const [data, setData] = useState([]);
  useEffect(() => {
    const token = localStorage.getItem("token");
    Axios({
      url: "http://localhost:8081/dashboard/chart",
      method: "POST",
      headers: {
        "auth-token": token,
      },
    })
      .then((res) => {
        console.log(res);
        setData(res.data.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <h1>Bar chart</h1>
      <BarChart
        width={800}
        height={400}
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Legend />
        <Bar dataKey="buy" fill="#8884d8" />
        <Bar dataKey="sell" fill="#82ca9d" />
      </BarChart>
    </>
  );
}
