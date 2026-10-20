import { useState, useEffect } from 'react';
import { Keyboard, Platform } from 'react-native';

// Știe când e deschisă tastatura și derulează ca inputul să rămână vizibil.
export default function useKeyboard(scrollRef) {
  const [tastatura, setTastatura] = useState(false);

  useEffect(() => {
    const [arata, ascunde] =
      Platform.OS === 'ios'
        ? ['keyboardWillShow', 'keyboardWillHide']
        : ['keyboardDidShow', 'keyboardDidHide'];
    const a = Keyboard.addListener(arata, () => {
      setTastatura(true);
      setTimeout(() => scrollRef.current?.scrollToEnd({ animated: true }), 80);
    });
    const b = Keyboard.addListener(ascunde, () => setTastatura(false));
    return () => {
      a.remove();
      b.remove();
    };
  }, [scrollRef]);

  return tastatura;
}