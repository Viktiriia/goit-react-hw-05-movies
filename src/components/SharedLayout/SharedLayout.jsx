import { Outlet } from "react-router-dom";
import { Header, NavList, Link } from './SharedLayout.styled'
const SharedLayout = () => {
  return (
    <>
      <Header>
        <nav>
          <NavList>
            <li>
            <Link to="/">
            Home
          </Link>
            </li>
            <li>
            <Link to="/movies">Movies</Link>
            </li>
          </NavList>
        </nav>
      </Header>
      <Outlet />
    </>
  );
};

export default SharedLayout;