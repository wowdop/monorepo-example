import * as S from './text-field.style';
import * as T from './text-field.type';

const TextField = ({
  onChange,
  helpText,
  label,
  value,
  placeholder,
}: T.TextField) => {
  return (
    <S.TextField>
      {label && <S.Label>{label}</S.Label>}

      <S.Input placeholder={placeholder} onChange={onChange} value={value} />

      {helpText && <S.HelpText>{helpText}</S.HelpText>}
    </S.TextField>
  );
};

TextField.defaultProps = {
  onChange: console.log,
  helpText: '',
  label: '',
  placeholder: '',
  value: '',
};

export default TextField;
