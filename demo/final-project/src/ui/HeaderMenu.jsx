import styled from 'styled-components';
import Logout from '../features/authentication/Logout';

const StyledHeaderMenu = styled.ul`
  display: flex;
  gap: 0.5rem;
`;
const HeaderMenu = () => {
  return (
    <StyledHeaderMenu>
        <Logout />
    </StyledHeaderMenu>
  );
};
export default HeaderMenu;
