import { StyleSheet } from 'react-native';

export const s = StyleSheet.create({
  fundal: { flex: 1, backgroundColor: '#0b1020' },
  container: { flexGrow: 1, alignItems: 'center', padding: 20, paddingTop: 56, gap: 14 },
  antet: { flexDirection: 'row', justifyContent: 'space-between', alignSelf: 'stretch' },
  titlu: { fontSize: 26, fontWeight: 'bold', color: '#f1f5f9', textAlign: 'center' },
  text: { fontSize: 16, color: '#94a3b8', textAlign: 'center' },
  mic: { fontSize: 12, color: '#94a3b8', fontFamily: 'monospace', letterSpacing: 2 },
  timp: { fontSize: 16, color: '#fbbf24', fontFamily: 'monospace' },
  poveste: {
    fontSize: 16, lineHeight: 25, color: '#cbd5e1', fontStyle: 'italic',
    fontFamily: 'monospace', minHeight: 140,
  },
  jurnal: {
    alignSelf: 'stretch', padding: 12, borderRadius: 8, backgroundColor: '#1e293b',
    borderLeftWidth: 4, borderLeftColor: '#fbbf24',
  },
  indiciu: { fontSize: 16, color: '#f1f5f9', paddingVertical: 6, lineHeight: 22 },
  asteptare: { fontSize: 13, color: '#64748b', paddingVertical: 6, fontStyle: 'italic' },
  lupa: { color: '#fbbf24', fontSize: 14, textAlign: 'center' },
  rand: { flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center', gap: 10 },
  cifra: {
    width: 52, height: 64, borderWidth: 2, borderColor: '#78350f', borderRadius: 10,
    backgroundColor: '#1e293b', textAlign: 'center', fontSize: 28, fontWeight: 'bold', color: '#fbbf24',
  },
  cuvant: {
    width: 260, height: 56, borderWidth: 2, borderColor: '#78350f', borderRadius: 10,
    backgroundColor: '#1e293b', textAlign: 'center', fontSize: 22, fontWeight: 'bold',
    color: '#fbbf24', paddingHorizontal: 12,
  },
  activ: { borderColor: '#fbbf24', backgroundColor: '#334155' },
  optiune: {
    paddingVertical: 14, paddingHorizontal: 20, borderRadius: 10, borderWidth: 2,
    borderColor: '#fbbf24', backgroundColor: '#1e293b',
  },
  optiuneSel: { backgroundColor: '#fbbf24' },
  textOptiune: { color: '#fbbf24', fontSize: 17, fontWeight: 'bold' },
  placa: {
    width: 62, height: 62, borderRadius: 10, borderWidth: 2, borderColor: '#fbbf24',
    backgroundColor: '#1e293b', alignItems: 'center', justifyContent: 'center',
  },
  textPlaca: { color: '#fbbf24', fontSize: 20, fontWeight: 'bold' },
  numar: { position: 'absolute', top: 2, right: 6, color: '#f1f5f9', fontSize: 12, fontWeight: 'bold' },
  eroare: { fontSize: 15, color: '#f87171', minHeight: 22, textAlign: 'center' },
  stampila: {
    fontSize: 20, fontWeight: 'bold', color: '#ef4444', borderWidth: 3, borderColor: '#ef4444',
    paddingHorizontal: 12, paddingVertical: 4, marginTop: 24, transform: [{ rotate: '-6deg' }],
  },
  stele: { fontSize: 40 },
  buton: { backgroundColor: '#fbbf24', paddingVertical: 12, paddingHorizontal: 28, borderRadius: 8 },
  textButon: { color: '#0f172a', fontWeight: 'bold', fontSize: 16 },
});