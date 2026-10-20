import { Text, Pressable } from 'react-native';
import { s } from '../styles';
import { UI, EPILOG, VITEZA_LITERE, PENALIZARE_LUPA } from '../data';
import { fmt } from '../utils/text';
import useTypewriter from '../hooks/useTypewriter';

export default function FinalScreen({ nume, timpTotal, greseli, lupe, onReset }) {
  const text = fmt(EPILOG, { nume });
  const [litere, gata, arataTot] = useTypewriter(text, VITEZA_LITERE);

  const puncte = greseli + lupe;
  const stele = puncte <= 2 ? 3 : puncte <= 6 ? 2 : 1;

  return (
    <>
      <Text style={s.stampila}>{UI.final.stampila}</Text>
      <Text style={s.titlu}>{fmt(UI.final.titlu, { nume })}</Text>
      <Text style={s.stele}>{'⭐'.repeat(stele)}</Text>
      <Text style={s.text}>
        {fmt(UI.final.statistici, {
          timp: timpTotal + lupe * PENALIZARE_LUPA,
          greseli,
          lupe,
        })}
      </Text>
      <Pressable onPress={arataTot}>
        <Text style={s.poveste}>{text.slice(0, litere)}</Text>
      </Pressable>
      {gata && (
        <Pressable style={s.buton} onPress={onReset}>
          <Text style={s.textButon}>{UI.final.buton}</Text>
        </Pressable>
      )}
    </>
  );
}