import "./App.scss";
// import Home from "./pages/Home";
import Book from "./pages/Book";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          {/* <Route path="/home" element={Home}></Route> */}
          <Route path="/book" element={Book}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
