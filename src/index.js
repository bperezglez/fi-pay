import { render } from "react-dom";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import App from "./App";
import FiPay from "./routes/fiPay";
import Login from "./routes/login";

const rootElement = document.getElementById("root");
render(
<BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="fi-pay" element={<FiPay />} />
        <Route path="login" element={<Login />} />
      </Route>
    </Routes>
  </BrowserRouter>,
  rootElement
);