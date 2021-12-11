import { ReactComponent as IconAllQuests } from 'assets/img/icon-all-quests.svg';
import { ReactComponent as IconAdventures } from 'assets/img/icon-adventures.svg';
import { ReactComponent as IconHorrors } from 'assets/img/icon-horrors.svg';
import { ReactComponent as IconMystic } from 'assets/img/icon-mystic.svg';
import { ReactComponent as IconDetective } from 'assets/img/icon-detective.svg';
import { ReactComponent as IconScifi } from 'assets/img/icon-scifi.svg';
import { getQuestType } from 'utils';
import * as S from './quests-catalog.styled';

const getIcon = (type) => {
  switch (type) {
    case 'adventures':
      return <IconAdventures />;
    case 'horror':
      return <IconHorrors />;
    case 'mystic':
      return <IconMystic />;
    case 'detective':
      return <IconDetective />;
    case 'sci-fi':
      return <IconScifi />;
    default:
      return <IconAllQuests />;
  }
};

const TabItem = ({ type, isActiveType, onChangeType }) => {
  return (
    <S.TabItem isActive={isActiveType}>
      <S.TabBtn
        onClick={(evt) => {
          evt.preventDefault();
          onChangeType(type);
        }}
      >
        {getIcon(type)}
        <S.TabTitle>{getQuestType(type)}</S.TabTitle>
      </S.TabBtn>
    </S.TabItem>
  );
};

export default TabItem;
