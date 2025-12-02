import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { CartProvider } from "../src/context/CartContext.jsx";
import { Toaster } from "./components/ui/sonner";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <CartProvider>
      <App />
      <Toaster/>
    </CartProvider>
  </StrictMode>
);
