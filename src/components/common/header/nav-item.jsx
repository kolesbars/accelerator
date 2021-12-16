import { useHistory } from 'react-router';
import * as S from './header.styled';

const NavItem = ({ textContent, activeItem, route }) => {
  const history = useHistory();

  return (
    <S.LinkItem>
      <S.Link to={route} $isActiveLink={history.location.pathname === route}>
        {textContent}
      </S.Link>
    </S.LinkItem>
  );
};

export default NavItem;
