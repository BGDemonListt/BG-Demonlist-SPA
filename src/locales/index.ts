import { Locale } from '../types/enums/locale.enum';
import bgTranslation from './bg/translation.json';
import enTranslation from './en/translation.json';

export default Object.seal({
  [Locale.EN]: Object.seal({ translation: enTranslation }),
  [Locale.BG]: Object.seal({ translation: bgTranslation }),
});
