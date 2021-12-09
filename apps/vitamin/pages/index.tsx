import { FeatureFooter } from '@mono/feature';
import { getTime } from '@mono/util';

export function Index() {
  /*
   * Replace the elements below with your own.
   *
   * Note: The corresponding styles are in the ./index.styled-components file.
   */
  return (
    <div>
      <header className="flex">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <h1>Welcome to vitamin!</h1>
      </header>

      <FeatureFooter />
    </div>
  );
}

export default Index;
