import { useState } from 'react';

type StorageType = 'localStorage' | 'sessionStorage';

// Abstract storage hook that works with both localStorage and sessionStorage
export const useStorage = <T>(
  key: string,
  initialValue: Partial<T>,
  storageType: StorageType = 'localStorage'
) => {
  type K = typeof initialValue;

  // Get the appropriate storage object
  const storage =
    storageType === 'localStorage' ? localStorage : sessionStorage;

  // On load try to load storage value
  // otherwise load the given initial value
  const [value, setValue] = useState<K>(() => {
    const storageData = storage.getItem(key);

    if (!storageData) {
      storage.setItem(key, JSON.stringify(initialValue));
      return initialValue;
    }

    return JSON.parse(storageData);
  });

  // Set storage data handler
  const setStorageData = (value: K | ((val: K) => K)) => {
    if (!value) return;

    // State set based on previous value
    if (value instanceof Function) {
      return setValue((oldValue: K) => {
        const result = value(oldValue);
        storage.setItem(key, JSON.stringify(result));
        return result;
      });
    }

    // Default state set
    storage.setItem(key, JSON.stringify(value));
    setValue(value);
  };

  // Clear storage data handler
  const clearStorageData = () => {
    storage.removeItem(key);
    setValue(initialValue);
  };

  return { value, setStorageData, clearStorageData };
};
