import { View, Text, Pressable } from 'react-native';
import { s } from '../styles';
import { UI, PENALIZARE_LUPA } from '../data';
import { fmt } from '../utils/text';

// Jurnalul cu indicii deblocate + butonul de lupă.
export default function Indicii({ indicii, secunde, onLupa }) {
  const deblocate = indicii.filter((i) => secunde >= i.la);
  const urmator = indicii.find((i) => secunde < i.la);

  return (
    <>
      <View style={s.jurnal}>
        {deblocate.map((i) => (
          <Text key={i.la} style={s.indiciu}>🔎 {i.text}</Text>
        ))}
        {urmator && (
          <Text style={s.asteptare}>
            {fmt(UI.quest.urmatorulIndiciu, { s: urmator.la - secunde })}
          </Text>
        )}
      </View>

      {urmator && (
        <Pressable onPress={() => onLupa(urmator.la)}>
          <Text style={s.lupa}>{fmt(UI.quest.lupa, { penalizare: PENALIZARE_LUPA })}</Text>
        </Pressable>
      )}
    </>
  );
}