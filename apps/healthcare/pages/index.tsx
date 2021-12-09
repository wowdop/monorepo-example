import { FeatureFooter } from '@mono/feature';
import { FeatureCart } from '@mono/healthcare-store';
import { TextField } from '@mono/ui';

export function Index() {
  /*
   * Replace the elements below with your own.
   *
   * Note: The corresponding styles are in the ./index.styled-components file.
   */
  return (
    <div>
      <header>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <h1>Welcome to healthcare!</h1>
      </header>

      <FeatureCart />

      <FeatureFooter />
    </div>
  );
}

export default Index;
