import styled from "styled-components";
import { useEffect } from "react";
import { useUser } from "../features/authentication/useUser";
import { useNavigate } from "react-router-dom";
import Spinner from "./Spinner";

const FullPage = styled.div`
  height: 100vh;
  background-color: ver(--color-grey-50);
  display: center;
  align-items: center;
`;

const ProtectedRoute = ({ children }) => {
  const navigate = useNavigate();
  // 1. Load the authenticated use
  const { isLoading, isAuthenticated } = useUser();

  // 2. If there is no authenticated user, redirect to landing page
  useEffect(() => {
    if (!isAuthenticated && !isLoading) navigate("/landing");
  }, [isAuthenticated, isLoading, navigate]);

  // 3. While loading, show a spinner
  if (isLoading) {
    return (
      <FullPage>
        <Spinner />
      </FullPage>
    );
  }

  // 4. If there is a user, render the app
  if (isAuthenticated) return children;
  return <div>ProtectedRoute</div>;
};

export default ProtectedRoute;
