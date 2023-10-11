import React, { useState } from 'react';
import './css.css';

function Button() {
  const [formData, setFormData] = useState({
    empresa: '',
    email: '',
    cnpj: '',
    fone: '',
    nomeSolicitante: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault(); // Impede o comportamento padrão do botão (enviar o formulário)

    // Enviar os dados para o servidor Flask
    fetch('/inserir_dados', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('Resposta do servidor:', data);
        // Faça algo com a resposta, se necessário
      })
      .catch((error) => {
        console.error('Erro ao enviar formulário:', error);
        // Trate os erros, se necessário
      });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <div id="submit-button-mobile">
      <form onSubmit={handleSubmit}>
        <button id="enviarButton" className="submit" type="submit">
          Enviar
        </button>
      </form>
    </div>
  );
}

export default Button;
