import React, { useState, useEffect } from 'react';

function RelogioDigital() {
  const [horaAtual, setHoraAtual] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setHoraAtual(new Date());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  const horas = horaAtual.getHours().toString().padStart(2, '0');
  const minutos = horaAtual.getMinutes().toString().padStart(2, '0');
  const segundos = horaAtual.getSeconds().toString().padStart(2, '0');

  return (
    <div>
      <h1>Relógio Digital</h1>
      <p>{`${horas}:${minutos}:${segundos}`}</p>
    </div>
  );
}

export default RelogioDigital;
