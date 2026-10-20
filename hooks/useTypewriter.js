import { useState, useEffect } from 'react';

// Afișează textul literă cu literă. Returnează [litere, gata, arataTot].
export default function useTypewriter(text, viteza) {
  const [litere, setLitere] = useState(0);

  useEffect(() => {
    if (litere >= text.length) return;
    const id = setTimeout(() => setLitere(litere + 1), viteza);
    return () => clearTimeout(id);
  }, [litere, text, viteza]);

  return [litere, litere >= text.length, () => setLitere(text.length)];
}