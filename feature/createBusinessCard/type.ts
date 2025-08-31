import { UseFormRegisterReturn } from 'react-hook-form';

export type ToggleSwitchProps = {
  value: boolean;
  onToggle: (val: boolean) => void;
};
export type FormComponentProps = {
  label?: string;
  placeholder?: string;
  id?: string;
  register?: UseFormRegisterReturn;
  error?: string;
  value?: boolean;
  onToggle?: (val: boolean) => void;
};
export type ToggleFieldProps = {
  label: string;
  value: boolean;
  onToggle: (val: boolean) => void;
};
export type TagInputProps = {
  label: string;
  error?: string;
  onChange?: (tags: string[]) => void;
};
export type TagFieldProps = {
  label: string;
  placeholder?: string;
  error?: string;
  onChange?: (values: string[]) => void;
};
