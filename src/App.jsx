import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.scss";
import SignIn from "./Pages/SignIn/SignIn";
import Complete from "./Pages/Complete/Complete";
import Book from "./Pages/Book/Book";
import CreateAccount from "./Pages/CreateAccount/CreateAcoount";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SignIn />} />
          <Route path="/book" element={<Book />} />
          <Route path="/create-account" element={<CreateAccount />} />
          <Route path="/complete" element={<Complete />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
