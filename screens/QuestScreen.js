import { useState } from 'react';
import { View, Text } from 'react-native';
import { s } from '../styles';
import { UI } from '../data';
import { fmt, normalizeaza } from '../utils/text';
import useTimer from '../hooks/useTimer';
import Indicii from '../components/Indicii';
import CodInput from '../components/inputs/CodInput';
import CuvantInput from '../components/inputs/CuvantInput';
import AlegereInput from '../components/inputs/AlegereInput';
import OrdonareInput from '../components/inputs/OrdonareInput';

export default function QuestScreen({
  nume, nivel, total, curent, tastatura, onCorect, onGreseala, onLupa,
}) {
  const [secunde, setSecunde] = useTimer();
  const [mesaj, setMesaj] = useState('');

  // întoarce true dacă răspunsul e corect (inputurile se golesc singure dacă e greșit)
  function verifica(valoare) {
    const corecte = [].concat(curent.raspuns).map(normalizeaza);
    if (corecte.includes(normalizeaza(valoare))) {
      onCorect(secunde);
      return true;
    }
    onGreseala();
    setMesaj(UI.quest.raspunsGresit);
    return false;
  }

  function handleLupa(laSecunda) {
    onLupa();
    setSecunde(laSecunda);
  }

  return (
    <>
      <View style={s.antet}>
        <Text style={s.mic}>
          {fmt(UI.quest.antet, { nume: nume.toUpperCase(), n: nivel + 1, total })}
        </Text>
        <Text style={s.timp}>⏱ {secunde} s</Text>
      </View>
      <Text style={s.titlu}>{curent.titlu}</Text>

      <Indicii indicii={curent.indicii} secunde={secunde} onLupa={handleLupa} />

      {curent.tip === 'cod' && (
        <CodInput lungime={curent.raspuns.length} onRaspuns={verifica} />
      )}
      {curent.tip === 'cuvant' && <CuvantInput onRaspuns={verifica} />}
      {curent.tip === 'alegere' && (
        <AlegereInput optiuni={curent.optiuni} onRaspuns={verifica} />
      )}
      {curent.tip === 'ordonare' && (
        <OrdonareInput optiuni={curent.optiuni} onRaspuns={verifica} />
      )}

      <Text style={s.eroare}>{mesaj}</Text>
      {tastatura && <View style={{ height: 24 }} />}
    </>
  );
}