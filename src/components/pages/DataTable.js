import * as React from "react";
import Link from "@mui/material/Link";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { useEffect, useState } from "react";
import Axios from "axios";
import { Navigate } from "react-router-dom";

// Generate Order Data

function preventDefault(event) {
  event.preventDefault();
}

export default function DataTable() {
  const [data, setData] = useState([]);
  const [isLogged, setIsLogged] = useState(false);
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token === "") {
      setIsLogged(false);
    } else {
      setIsLogged(true);
    }
    Axios({
      url: "http://localhost:8081/dashboard/table",
      method: "POST",
      headers: {
        "auth-token": token,
      },
    })
      .then((res) => {
        setData(res.data.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return isLogged ? (
    <React.Fragment>
      <h2>Recent Orders</h2>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Date</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Ship To</TableCell>
            <TableCell>Payment Method</TableCell>
            <TableCell align="right">Sale Amount</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((d) => (
            <TableRow key={d.id}>
              <TableCell>{d.date}</TableCell>
              <TableCell>{d.name}</TableCell>
              <TableCell>{d.shipTo}</TableCell>
              <TableCell>{d.paymentMethod}</TableCell>
              <TableCell align="right">{`$${d.amount}`}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Link color="primary" href="#" onClick={preventDefault} sx={{ mt: 3 }}>
        See more orders
      </Link>
    </React.Fragment>
  ) : (
    <Navigate to="/" />
  );
}
