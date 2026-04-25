// Make sure a folder with a translation of this locale exists, before adding it here
export const Locale = {
  EN: 'en',
  BG: 'bg',
} as const;

export type Locale = (typeof Locale)[keyof typeof Locale];
export const ALL_LOCALES = Object.seal(Object.values(Locale));
