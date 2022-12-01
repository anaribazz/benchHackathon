import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.scss";
import SignIn from "./pages/SignIn/SignIn";
import Complete from "./pages/Complete/Complete";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SignIn />} />
          <Route path="/complete" element={<Complete />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
