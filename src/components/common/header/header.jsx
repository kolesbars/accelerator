import logo from 'assets/img/logo.svg';
import { useHistory } from 'react-router';
import { AppRoute, ContactsInfo } from 'const';
import NavItem from './nav-item';
import * as S from './header.styled';

const Header = () => {
  const history = useHistory();

  return (
    <S.StyledHeader>
      <S.HeaderWrapper>
        <S.Logo>
          <S.Image
            src={logo}
            alt="Логотип Escape Room"
            width="134"
            height="50"
            onClick={(evt) => {
              evt.preventDefault();
              history.push(AppRoute.Home);
            }}
          />
        </S.Logo>

        <S.Navigation>
          <S.Links>
            <NavItem textContent="Квесты" route={AppRoute.Home} />

            <NavItem textContent="Новичкам" route={AppRoute.Newbies} />

            <NavItem textContent="Отзывы" route={AppRoute.Reviews} />

            <NavItem textContent="Акции" route={AppRoute.Promo} />

            <NavItem textContent="Контакты" route={AppRoute.Contacts} />
          </S.Links>
        </S.Navigation>
        <S.Phone href={`tel:${ContactsInfo.Phone}`}>
          {ContactsInfo.Phone}
        </S.Phone>
      </S.HeaderWrapper>
    </S.StyledHeader>
  );
};

export default Header;
