import { useState, useRef, useEffect } from 'react';
import { View, TextInput } from 'react-native';
import { s } from '../../styles';

// Căsuțe cu cifre. onRaspuns(valoare) întoarce true dacă e corect.
export default function CodInput({ lungime, onRaspuns }) {
  const [cifre, setCifre] = useState([]);
  const [activ, setActiv] = useState('');
  const campuri = useRef([]);

  useEffect(() => {
    campuri.current[0]?.focus();
  }, []);

  function schimbaCifra(i, t) {
    const cifra = t.replace(/[^0-9]/g, '').slice(-1);
    const noi = Array.from({ length: lungime }, (_, j) => (j === i ? cifra : cifre[j] || ''));
    setCifre(noi);
    if (cifra && i < lungime - 1) campuri.current[i + 1]?.focus();
    if (noi.every((c) => c !== '')) {
      if (!onRaspuns(noi.join(''))) {
        setCifre([]);
        campuri.current[0]?.focus();
      }
    }
  }

  function tastaCifra(i, e) {
    if (e.nativeEvent.key === 'Backspace' && !cifre[i] && i > 0) {
      campuri.current[i - 1]?.focus();
    }
  }

  return (
    <View style={s.rand}>
      {Array.from({ length: lungime }, (_, i) => (
        <TextInput
          key={i}
          ref={(el) => { campuri.current[i] = el; }}
          style={[s.cifra, activ === 'c' + i && s.activ]}
          value={cifre[i] || ''}
          onChangeText={(t) => schimbaCifra(i, t)}
          onKeyPress={(e) => tastaCifra(i, e)}
          onFocus={() => setActiv('c' + i)}
          onBlur={() => setActiv('')}
          keyboardType="number-pad"
          selectTextOnFocus
        />
      ))}
    </View>
  );
}