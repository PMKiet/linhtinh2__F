import NavBar from "./pages/NavBar/NavBar";
import HomePage from "./pages/HomePage/HomePage";
import DetaileBlog from "./pages/HomePage/DetaileBlog";
import CountdownTimer from "./pages/countDown/CountdownTimer";
import TableUser from "./pages/TableUser/TableUser";
import FormEditUser from "./pages/TableUser/formEditUser";
import UserPaginate from "./pages/userpagination/UserPaginate";
import Presskey from "./pages/Presskey/Presskey";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  return (
    <div className="App">
      <BrowserRouter>

        <NavBar />
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route path="/home/:id" element={<DetaileBlog />} />
          <Route path="/countTime" element={<CountdownTimer />} />
          <Route path="/tableUser" element={<TableUser />} />
          <Route path="/update/:id" element={<FormEditUser />} />
          <Route path="/userPaginate" element={<UserPaginate />} />
          <Route path="/presskey" element={<Presskey />} />
        </Routes>

      </BrowserRouter>
    </div>
  );
}

export default App;
