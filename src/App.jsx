import "./App.css";
import CartSection from "./Pages/CartSection";
import Home from "./Pages/Home";
import ItemDescription from "./Pages/ItemDescription"
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import PaymentForm from "./Pages/PaymentForm";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/itemDescription",
    element: <ItemDescription />,
  },
  {
    path: "/cartSection",
    element: <CartSection />,
  },{
    path: "PaymentForm",
    element :<PaymentForm />
  }
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
