// import Home from "./pages/home/Home";
import "./app.scss";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
// import Watch from "./pages/watch/Watch";
import Home from "./pages/home/Home";
import { Route, Routes } from "react-router";

function App() {
  return (
      <Routes>
        <Route path="/" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home />}/>
          {/* <Route path="/watch" element={<Watch />} /> */}
      </Routes>
  );
}

export default App;
