import { render } from '@testing-library/react';

import VitaminStore from './vitamin-store';

describe('VitaminStore', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<VitaminStore />);
    expect(baseElement).toBeTruthy();
  });
});
