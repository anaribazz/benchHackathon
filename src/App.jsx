import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.scss";
import SignIn from "./Pages/SignIn/SignIn";
import Book from "./Pages/Book/Book";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SignIn />} />
          <Route path="/book" element={<Book />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
