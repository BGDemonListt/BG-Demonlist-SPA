export const RoutePage = {
  HOME: '/',
} as const;

export type RoutePage = (typeof RoutePage)[keyof typeof RoutePage];
