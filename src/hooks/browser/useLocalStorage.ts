import { useStorage } from './useStorage';

// Hook that stores a value in localStorage
export const useLocalStorage = <T>(key: string, initialValue: Partial<T>) => {
  return useStorage<T>(key, initialValue, 'localStorage');
};
