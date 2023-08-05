import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import Products from "./components/Products/Products";
import Provider from "./context/Provider";
import Cart from "./components/Cart/Cart";
import AddressForm from "./components/Form/AddressForm";
import OrderConfirmation from "./components/Confirmation/OrderConfirmation";

const App = () => {
  const [isOrderConfirmed, setIsOrderConfirmed] = useState(false);

  const handleFormSubmit = () => {
    setIsOrderConfirmed(true);
  };

  return (
    <Provider>
      <BrowserRouter>
        <div>
          <Header />
          <h1>Formulário de Endereço</h1>
          <Routes>
            <Route path="/" element={<Products />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/order-confirmation" element={<OrderConfirmation />} />

            <Route
              path="/address-form"
              element={
                !isOrderConfirmed ? (
                  <AddressForm onFormSubmit={handleFormSubmit} />
                ) : (
                  <OrderConfirmation />
                )
              }
            />
          </Routes>
        </div>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
