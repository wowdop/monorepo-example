import styled from 'styled-components';

/* eslint-disable-next-line */
export interface HealthcareStoreProps {}

const StyledHealthcareStore = styled.div`
  color: pink;
`;

export function HealthcareStore(props: HealthcareStoreProps) {
  return (
    <StyledHealthcareStore>
      <h1>Welcome to HealthcareStore!</h1>
    </StyledHealthcareStore>
  );
}

export default HealthcareStore;
