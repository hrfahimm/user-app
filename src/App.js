import "./App.css";
import Header from "./Commponents/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Commponents/Home";
import User from "./Commponents/User";
import AddUser from "./Commponents/AddUser";
import UpdateUser from "./Commponents/UpdateUser";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header></Header>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/users" element={<User />} />
          <Route path="/users/add" element={<AddUser />} />
          <Route path="/users/update/:id" element={<UpdateUser />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
