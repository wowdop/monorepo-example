import { TextField } from '@mono/ui';

const FeatureCart = () => {
  return (
    <div>
      <TextField
        label="What is your first name?"
        placeholder="Ex: John"
        onChange={() => console.log('First name')}
        value="changeme"
        helpText="Your first name or nickname so we can address to you"
      />

      <p>change two</p>
    </div>
  );
};

export default FeatureCart;
