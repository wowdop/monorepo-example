import React from 'react';
import { FeatureFooter } from '@mono/feature';
import { TextField } from '@mono/ui';

export function Index() {
  /*
   * Replace the elements below with your own.
   *
   * Note: The corresponding styles are in the ./index.styled-components file.
   */
  return (
    <div>
      <h1>Welcome to web</h1>

      <FeatureFooter />
      <TextField label="test" />
    </div>
  );
}

export default Index;
