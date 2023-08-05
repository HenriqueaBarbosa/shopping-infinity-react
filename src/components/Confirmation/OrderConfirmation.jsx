import React from "react";
import { Link } from "react-router-dom";
import "./OrderConfirmation.css"

const OrderConfirmation = () => {
  return (
    <div className="order-confirmation">
      <p>
        Seu pedido foi feito com sucesso! Aguarde de 5 a 7 dias para que ele
        chegue até você.
      </p>
      <Link to="/">Voltar à página inicial</Link>

    </div>
  );
};

export default OrderConfirmation;
