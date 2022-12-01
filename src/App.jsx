import "./App.scss";
// import Home from "./pages/Home";
import Complete from "./pages/Complete/Complete";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          {/* <Route path="/home" element={Home}></Route> */}
          <Route path="/complete" element={<Complete />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
