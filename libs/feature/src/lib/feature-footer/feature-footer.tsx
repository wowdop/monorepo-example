import { formatNumber, getTime } from '@mono/util';
import { TextField } from '@mono/ui';

const FeatureFooter = () => {
  const price = Math.floor(Math.random() * 25000) / 100;

  return (
    <div>
      <TextField
        onChange={() => {}}
        label="CopyRight"
        value={formatNumber(price)}
      />
    </div>
  );
};

export default FeatureFooter;
