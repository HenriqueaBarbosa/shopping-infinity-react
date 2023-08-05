import React, { useState } from "react";
import "./AddressForm.css";

const AddressForm = ({ onFormSubmit }) => {
  const [formData, setFormData] = useState({
    name: "",
    address: "",
    city: "",
    state: "",
    zip: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, address, city, state, zip } = formData;

    if (name && address && city && state && zip) {
      onFormSubmit();
    } else {
      alert("Por favor, preencha todos os campos obrigatórios!");
    }
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <table>
          <tbody>
            <tr>
              <td>Nome:</td>
              <td>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </td>
            </tr>
            <tr>
              <td>Endereço:</td>
              <td>
                <input
                  type="text"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  required
                />
              </td>
            </tr>
            <tr>
              <td>Cidade:</td>
              <td>
                <input
                  type="text"
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  required
                />
              </td>
            </tr>
            <tr>
              <td>Estado:</td>
              <td>
                <input
                  type="text"
                  name="state"
                  value={formData.state}
                  onChange={handleChange}
                  required
                />
              </td>
            </tr>
            <tr>
              <td>CEP:</td>
              <td>
                <input
                  type="text"
                  name="zip"
                  value={formData.zip}
                  onChange={handleChange}
                  required
                />
              </td>
            </tr>
          </tbody>
        </table>
      </form>
      
      <div className="container">
        <a className="custom-link custom-button" href="/order-confirmation">
          Fazer pedido
        </a>
      </div>
      
    </div>
  );
};

export default AddressForm;
