import { Text, Pressable } from 'react-native';
import { s } from '../styles';
import { UI, VITEZA_LITERE } from '../data';
import { fmt } from '../utils/text';
import useTypewriter from '../hooks/useTypewriter';

// Folosit și pentru prolog (nivel = null), și pentru începutul fiecărui dosar.
export default function PovesteScreen({ text, nivel, total, titlu, onContinua }) {
  const [litere, gata, arataTot] = useTypewriter(text, VITEZA_LITERE);
  const estePrologul = nivel === null;

  return (
    <>
      <Text style={s.mic}>
        {estePrologul
          ? UI.poveste.etichetaProlog
          : fmt(UI.poveste.etichetaDosar, { n: nivel + 1, total })}
      </Text>
      {!estePrologul && <Text style={s.titlu}>{titlu}</Text>}
      <Pressable onPress={arataTot}>
        <Text style={s.poveste}>
          {text.slice(0, litere)}
          {!gata ? '▌' : ''}
        </Text>
      </Pressable>
      {gata && (
        <Pressable style={s.buton} onPress={onContinua}>
          <Text style={s.textButon}>
            {estePrologul ? UI.poveste.butonProlog : UI.poveste.butonNivel}
          </Text>
        </Pressable>
      )}
    </>
  );
}