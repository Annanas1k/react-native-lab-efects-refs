import { useState } from 'react';
import { View, Pressable, Text } from 'react-native';
import { s } from '../../styles';

// Butoane de alegere. onRaspuns(id) întoarce true dacă e corect.
export default function AlegereInput({ optiuni, onRaspuns }) {
  const [selectat, setSelectat] = useState('');

  return (
    <View style={s.rand}>
      {optiuni.map((o) => (
        <Pressable
          key={o.id}
          style={[s.optiune, selectat === o.id && s.optiuneSel]}
          onPress={() => {
            setSelectat(o.id);
            if (!onRaspuns(o.id)) setSelectat('');
          }}
        >
          <Text style={[s.textOptiune, selectat === o.id && { color: '#0f172a' }]}>
            {o.eticheta}
          </Text>
        </Pressable>
      ))}
    </View>
  );
}