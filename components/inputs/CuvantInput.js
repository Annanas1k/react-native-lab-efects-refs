import { useState, useRef, useEffect } from 'react';
import { TextInput, Pressable, Text } from 'react-native';
import { s } from '../../styles';
import { UI } from '../../data';

// Cuvânt liber. onRaspuns(valoare) întoarce true dacă e corect.
export default function CuvantInput({ onRaspuns }) {
  const [cuvant, setCuvant] = useState('');
  const [activ, setActiv] = useState(false);
  const input = useRef(null);

  useEffect(() => {
    input.current?.focus();
  }, []);

  function trimite() {
    if (!cuvant.trim()) return;
    if (!onRaspuns(cuvant)) {
      setCuvant('');
      input.current?.focus();
    }
  }

  return (
    <>
      <TextInput
        ref={input}
        style={[s.cuvant, activ && s.activ]}
        value={cuvant}
        onChangeText={setCuvant}
        onFocus={() => setActiv(true)}
        onBlur={() => setActiv(false)}
        onSubmitEditing={trimite}
        placeholder={UI.quest.placeholderCuvant}
        placeholderTextColor="#64748b"
        autoCapitalize="characters"
        autoCorrect={false}
      />
      <Pressable style={s.buton} onPress={trimite}>
        <Text style={s.textButon}>{UI.quest.verifica}</Text>
      </Pressable>
    </>
  );
}