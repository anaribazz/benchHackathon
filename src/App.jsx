import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.scss";
import SignIn from "./Pages/SignIn/SignIn";
import FirstStep from "./Pages/FirstStep/FirstStep";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SignIn />} />
          <Route path='/firststep' element={<FirstStep/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
