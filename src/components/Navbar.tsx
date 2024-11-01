import { Link } from "react-router-dom";
import styled from "styled-components";
import useAuth from "../hooks/useAuth";

const StyledNavbar = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  padding: var(--gap-width);
  position: fixed;
  background-color: var(--bg-color);
  z-index: 50;
`;

const Container = styled.nav`
  width: 100%;
  max-width: 48rem;
  height: 2.5rem;
  display: flex;
  justify-content: end;
  align-items: center;
`;

const StyledAvatar = styled.img`
  aspect-ratio: 1 / 1;
  height: 100%;
  border-radius: 9999px;
  object-fit: cover;
`;

const ActionsContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  height: 100%;
`;

const Navbar = () => {
  const auth_url = "http://localhost:5000/api/auth/google";

  const [user, setUser, clearUser] = useAuth();

  const logout = () => {
    clearUser();
  };

  return (
    <StyledNavbar>
      <Container>
        {!user && (
          <ActionsContainer>
            <a href={auth_url}>Login</a>
          </ActionsContainer>
        )}

        {user && (
          <ActionsContainer>
            <button type="button" onClick={logout}>
              Logout
            </button>
            <Link to="/preferences">{`${
              user.displayName.split(" ")[0]
            }'s preferences`}</Link>
            <StyledAvatar src={user.picture[0].value} alt="User icon" />
          </ActionsContainer>
        )}
      </Container>
    </StyledNavbar>
  );
};

export default Navbar;
