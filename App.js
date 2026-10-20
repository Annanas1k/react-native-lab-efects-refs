import { useState, useRef } from 'react';
import { ScrollView, Platform, KeyboardAvoidingView } from 'react-native';
import { s } from './styles';
import { NIVELE, PROLOG } from './data';
import { fmt } from './utils/text';
import useKeyboard from './hooks/useKeyboard';
import NumeScreen from './screens/NumeScreen';
import PovesteScreen from './screens/PovesteScreen';
import QuestScreen from './screens/QuestScreen';
import FinalScreen from './screens/FinalScreen';

export default function App() {
  // ecran: nume -> prolog -> poveste -> quest -> (poveste -> quest ...) -> final
  const [ecran, setEcran] = useState('nume');
  const [nume, setNume] = useState('');
  const [nivel, setNivel] = useState(0);
  const [greseli, setGreseli] = useState(0);
  const [lupe, setLupe] = useState(0);
  const [timpTotal, setTimpTotal] = useState(0);

  const scrollRef = useRef(null);
  const tastatura = useKeyboard(scrollRef);
  const curent = NIVELE[nivel];

  function handleCorect(secunde) {
    setTimpTotal((t) => t + secunde);
    if (nivel + 1 >= NIVELE.length) {
      setEcran('final');
    } else {
      setNivel(nivel + 1);
      setEcran('poveste');
    }
  }

  function handleReset() {
    setEcran('nume');
    setNivel(0);
    setGreseli(0);
    setLupe(0);
    setTimpTotal(0);
  }

  return (
    <KeyboardAvoidingView
      style={s.fundal}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    >
      <ScrollView
        ref={scrollRef}
        contentContainerStyle={s.container}
        keyboardShouldPersistTaps="handled"
      >
        {ecran === 'nume' && (
          <NumeScreen nume={nume} setNume={setNume} onContinua={() => setEcran('prolog')} />
        )}

        {ecran === 'prolog' && (
          <PovesteScreen
            key="prolog"
            text={fmt(PROLOG, { nume })}
            nivel={null}
            onContinua={() => setEcran('poveste')}
          />
        )}

        {ecran === 'poveste' && (
          <PovesteScreen
            key={'poveste' + nivel}
            text={curent.poveste}
            titlu={curent.titlu}
            nivel={nivel}
            total={NIVELE.length}
            onContinua={() => setEcran('quest')}
          />
        )}

        {ecran === 'quest' && (
          <QuestScreen
            key={'quest' + nivel}
            nume={nume}
            nivel={nivel}
            total={NIVELE.length}
            curent={curent}
            tastatura={tastatura}
            onCorect={handleCorect}
            onGreseala={() => setGreseli((g) => g + 1)}
            onLupa={() => setLupe((l) => l + 1)}
          />
        )}

        {ecran === 'final' && (
          <FinalScreen
            nume={nume}
            timpTotal={timpTotal}
            greseli={greseli}
            lupe={lupe}
            onReset={handleReset}
          />
        )}
      </ScrollView>
    </KeyboardAvoidingView>
  );
}