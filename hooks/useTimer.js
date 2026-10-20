import { useState, useEffect } from 'react';

// Cronometru care numără secundele cât timp componenta e montată.
export default function useTimer() {
  const [secunde, setSecunde] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setSecunde((s) => s + 1), 1000);
    return () => clearInterval(id);
  }, []);

  return [secunde, setSecunde];
}