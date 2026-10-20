import { useState } from 'react';
import { View, Pressable, Text } from 'react-native';
import { s } from '../../styles';
import { UI } from '../../data';

// Atingi plăcile în ordine. onRaspuns('a|b|c') întoarce true dacă e corect.
export default function OrdonareInput({ optiuni, onRaspuns }) {
  const [alese, setAlese] = useState([]);

  function alegePlaca(id) {
    const noi = [...alese, id];
    setAlese(noi);
    if (noi.length === optiuni.length) {
      if (!onRaspuns(noi.join('|'))) setAlese([]);
    }
  }

  return (
    <>
      <View style={s.rand}>
        {optiuni.map((o) => {
          const loc = alese.indexOf(o.id);
          return (
            <Pressable
              key={o.id}
              disabled={loc !== -1}
              style={[s.placa, loc !== -1 && { opacity: 0.35 }]}
              onPress={() => alegePlaca(o.id)}
            >
              <Text style={s.textPlaca}>{o.eticheta}</Text>
              {loc !== -1 && <Text style={s.numar}>{loc + 1}</Text>}
            </Pressable>
          );
        })}
      </View>
      <Pressable disabled={alese.length === 0} onPress={() => setAlese(alese.slice(0, -1))}>
        <Text style={[s.lupa, alese.length === 0 && { opacity: 0.3 }]}>{UI.quest.anuleaza}</Text>
      </Pressable>
    </>
  );
}