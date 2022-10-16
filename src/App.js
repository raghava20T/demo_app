import { BrowserRouter, Routes, Route } from "react-router-dom";
import Insurance from "./components/insurance";
import Payment from "./components/payment";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Payment />}></Route>
          <Route path="/insurance" element={<Insurance />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
