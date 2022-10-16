import { BrowserRouter, Routes, Route } from "react-router-dom";
import Insurance from "./components/insurance";
import Payment from "./components/payment";
import PreviousAppointments from "./components/previousAppointments";
import UpcomingAppointments from "./components/upcomingAppointments";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Payment />}></Route>
          <Route path="/insurance" element={<Insurance />}></Route>
          <Route
            path="/upcoming-appointments"
            element={<UpcomingAppointments />}
          ></Route>
          <Route
            path="/previous-appointments"
            element={<PreviousAppointments />}
          ></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
