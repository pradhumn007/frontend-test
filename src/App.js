import Login from "./components/Login";
import SignUp from "./components/SignUp";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import DataTable from "./components/pages/DataTable";
import Analytics from "./components/pages/Analytics";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<Login />}></Route>
        <Route path="signup" element={<SignUp />}></Route>
        <Route path="home" element={<Home />}>
          <Route path="chart" element={<Analytics />}></Route>
          <Route path="table" element={<DataTable />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
