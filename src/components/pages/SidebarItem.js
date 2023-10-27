import * as React from "react";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import BarChartIcon from "@mui/icons-material/BarChart";
import TableChartIcon from "@mui/icons-material/TableChart";
import { Link } from "react-router-dom";

function SidebarItem() {
  return (
    <React.Fragment>
      <ListItemButton component={Link} to="/home/chart">
        <ListItemIcon>
          <BarChartIcon />
        </ListItemIcon>
        <ListItemText primary="Analytics" />
      </ListItemButton>
      <ListItemButton component={Link} to="/home/table">
        <ListItemIcon>
          <TableChartIcon />
        </ListItemIcon>

        <ListItemText primary="Data table" />
      </ListItemButton>
    </React.Fragment>
  );
}

export default SidebarItem;
