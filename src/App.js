import { BrowserRouter, Routes, Route } from "react-router-dom";
import Payment from "./components/payment";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Payment />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
