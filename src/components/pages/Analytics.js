import * as React from "react";

import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Legend } from "recharts";

const data = [
  {
    name: "Jan",
    buy: 4000,
    sell: 2400,
  },
  {
    name: "Feb",
    buy: 3000,
    sell: 1398,
  },
  {
    name: "Mar",
    buy: 2000,
    sell: 9800,
  },
  {
    name: "Apr",
    buy: 2780,
    sell: 3908,
  },
  {
    name: "May",
    buy: 1890,
    sell: 4800,
  },
  {
    name: "Jun",
    buy: 2390,
    sell: 3800,
  },
  {
    name: "Jul",
    buy: 3490,
    sell: 4300,
  },
];

export default function Analytics() {
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
