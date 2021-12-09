import { render } from '@testing-library/react';

import HealthcareStore from './healthcare-store';

describe('HealthcareStore', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<HealthcareStore />);
    expect(baseElement).toBeTruthy();
  });
});
