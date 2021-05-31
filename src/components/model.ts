export interface KeyType {
  label: string;
  isPressed: boolean;
  value?: string;
}

export const specialKeys: KeyType[] = [
  { value: "capsLock", label: "Caps Lock", isPressed: false },
  { value: "backSpace", label: "Backspace", isPressed: false },
];
