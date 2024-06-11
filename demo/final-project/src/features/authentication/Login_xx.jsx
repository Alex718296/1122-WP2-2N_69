import styled from 'styled-components';
import LoginForm from './LoginForm';
// import Logo from '../ui/Logo';
// import Heading from '../ui/Heading';

const LoginLayout = styled.main`
  min-height: 100vh;
  display: grid;
  grid-template-columns: 48rem;
  align-content: center;
  justify-content: center;
  gap: 3.2rem;
  // background-color: var(--color-grey-50);
  background-image: url('https://qfvxjrlpnpxdkvvjlnnu.supabase.co/storage/v1/object/public/project_img/background.png');
  background-size: cover;
  opacity:1;
  `;


function Login_xx() {
  return (
    <LoginLayout>
      {/* <Logo /> */}
      {/* <Heading as='h4'> Welcome 鐘教授</Heading> */}
      <LoginForm />
    </LoginLayout>
  );
}

export default Login_xx;
