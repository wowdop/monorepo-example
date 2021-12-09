import styled from 'styled-components';

/* eslint-disable-next-line */
export interface VitaminStoreProps {}

const StyledVitaminStore = styled.div`
  color: pink;
`;

export function VitaminStore(props: VitaminStoreProps) {
  return (
    <StyledVitaminStore>
      <h1>Welcome to VitaminStore!</h1>
    </StyledVitaminStore>
  );
}

export default VitaminStore;
