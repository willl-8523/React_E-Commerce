import { Fragment, useContext } from 'react';
import { Outlet, Link } from 'react-router-dom';

import { ReactComponent as Logo } from "../../assets/logo.svg";
import { UserContext } from '../../contexts/user.context';

import './navigation.styles.scss';

const Navigation = () => {

  /* useContext fait un re-render */
  const { currentUser } = useContext(UserContext);
  /* Affiche l'ux connecté */
  console.log(currentUser);

  return (
    <Fragment>
      <div className="navigation">
        <Link className="logo-container" to="/">
          <Logo className="logo" />
        </Link>
        <div className="nav-links-container">
          <Link className="nav-link" to="/shop">
            SHOP
          </Link>
          <Link className="nav-link" to="/auth">
            SIGN IN
          </Link>
        </div>
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;