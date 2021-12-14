import { Link } from 'react-router-dom';
import * as S from './not-found-screen.styled';

function NotFoundScreen(): JSX.Element {
  return (
    <S.Container>
      <S.NotFoundScreen>
        <S.NotFound>
          <S.NotFound404>
            <S.Title>Oops!</S.Title>
            <S.Text>404 - The Page can not be found</S.Text>
          </S.NotFound404>
          <S.Link>
            <Link to="/">Go TO Homepage</Link>
          </S.Link>
        </S.NotFound>
      </S.NotFoundScreen>
    </S.Container>
  );
}

export default NotFoundScreen;
