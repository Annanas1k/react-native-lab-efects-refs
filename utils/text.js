// majuscule + fără diacritice, ca "gaură" și "GAURA" să fie la fel
export function normalizeaza(s) {
  return s.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toUpperCase().trim();
}

// înlocuiește {cheie} din șablon cu valorile date: fmt('Salut {nume}', { nume: 'Ana' })
export function fmt(sablon, valori = {}) {
  return sablon.replace(/\{(\w+)\}/g, (_, k) => String(valori[k] ?? ''));
}