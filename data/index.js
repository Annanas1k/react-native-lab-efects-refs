import config from './config.json';
import texte from './texte.json';
import nivele from './nivele.json';

export const PENALIZARE_LUPA = config.penalizareLupa;
export const PAS = config.pas; // pentru testare rapidă: pune 3 în config.json
export const VITEZA_LITERE = config.vitezaLitere;

export const PROLOG = texte.prolog;
export const EPILOG = texte.epilog;
export const UI = texte.ui;

// în JSON indiciile au "pas" (0, 1, 2, 3); aici îl transformăm în secunde: la = pas * PAS
export const NIVELE = nivele.map((n) => ({
  ...n,
  indicii: n.indicii.map((i) => ({ la: i.pas * PAS, text: i.text })),
}));
