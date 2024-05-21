import React, { useState, useEffect } from 'react';

const CurrencyConverter = () => {
  const [amount, setAmount] = useState(1);
  const [fromCurrency, setFromCurrency] = useState('USD');
  const [toCurrency, setToCurrency] = useState('EUR');
  const [exchangeRate, setExchangeRate] = useState();
  const [result, setResult] = useState();

  useEffect(() => {
    fetch(`https://api.exchangerate-api.com/v4/latest/${fromCurrency}`)
      .then((response) => response.json())
      .then((data) => setExchangeRate(data.rates[toCurrency]));
  }, [fromCurrency, toCurrency]);

  const handleAmountChange = (e) => {
    setAmount(e.target.value);
  };

  const handleFromCurrencyChange = (e) => {
    setFromCurrency(e.target.value);
  };

  const handleToCurrencyChange = (e) => {
    setToCurrency(e.target.value);
  };

  const handleConvert = () => {
    setResult((amount * exchangeRate).toFixed(2));
  };

  return (
    <div className="currency-converter">
      <h2>Conversor de Moedas</h2>
      <div>
        <label>De:</label>
        <select value={fromCurrency} onChange={handleFromCurrencyChange}>
          <option value="USD">USD</option>
          <option value="EUR">EUR</option>
          <option value="GBP">GBP</option>
          {/* Adicione outras moedas conforme necessário */}
        </select>
        <input type="number" value={amount} onChange={handleAmountChange} />
      </div>
      <div>
        <label>Para:</label>
        <select value={toCurrency} onChange={handleToCurrencyChange}>
          <option value="USD">USD</option>
          <option value="EUR">EUR</option>
          <option value="GBP">GBP</option>
          {/* Adicione outras moedas conforme necessário */}
        </select>
        <button onClick={handleConvert}>Converter</button>
      </div>
      {result && <p>{amount} {fromCurrency} = {result} {toCurrency}</p>}
    </div>
  );
};

export default CurrencyConverter;
