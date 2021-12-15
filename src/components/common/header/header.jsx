import logo from 'assets/img/logo.svg';
import { useHistory } from 'react-router';
import { useState } from 'react';
import { AppRoute } from 'const';
import { ContactsInfo } from 'const';
import * as S from './header.styled';

const Header = () => {
  const history = useHistory();

  const [currentTab, setCurrentTab] = useState('Квесты');

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
            <S.LinkItem>
              <S.Link $isActiveLink>Квесты</S.Link>
            </S.LinkItem>

            <S.LinkItem>
              <S.Link to="#">Новичкам</S.Link>
            </S.LinkItem>

            <S.LinkItem>
              <S.Link to="#">Отзывы</S.Link>
            </S.LinkItem>

            <S.LinkItem>
              <S.Link to="#">Акции</S.Link>
            </S.LinkItem>

            <S.LinkItem>
              <S.Link to="/contacts">Контакты</S.Link>
            </S.LinkItem>
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
