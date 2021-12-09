export interface TextField {
  label?: string;
  value?: string | number;
  placeholder?: string;
  onChange: () => void;
  helpText?: string;
}
