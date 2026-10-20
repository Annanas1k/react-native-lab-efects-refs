import { useState } from 'react';
import { Text, TextInput, Pressable } from 'react-native';
import { s } from '../styles';
import { UI } from '../data';

export default function NumeScreen({ nume, setNume, onContinua }) {
  const [activ, setActiv] = useState(false);

  return (
    <>
      <Text style={s.stampila}>{UI.nume.stampila}</Text>
      <Text style={s.titlu}>{UI.nume.titlu}</Text>
      <Text style={s.text}>{UI.nume.intrebare}</Text>
      <TextInput
        style={[s.cuvant, activ && s.activ]}
        value={nume}
        onChangeText={setNume}
        onFocus={() => setActiv(true)}
        onBlur={() => setActiv(false)}
        onSubmitEditing={() => nume.trim() && onContinua()}
        placeholder={UI.nume.placeholder}
        placeholderTextColor="#64748b"
        maxLength={16}
      />
      <Pressable
        style={[s.buton, !nume.trim() && { opacity: 0.4 }]}
        disabled={!nume.trim()}
        onPress={onContinua}
      >
        <Text style={s.textButon}>{UI.nume.buton}</Text>
      </Pressable>
    </>
  );
}