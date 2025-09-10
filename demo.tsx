import React from "react";
import ReactDOM from "react-dom/client";
import ExamplePage from "./src/ExamplePage";

// This is a demo file to showcase the ExamplePage component
// You can use this to test your shopping cart library components

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <ExamplePage />
  </React.StrictMode>
);

// Alternative: You can also import individual components
// import { Button, Card, Cart, CartItem, InputText, Modal } from './src';

export default ExamplePage;
