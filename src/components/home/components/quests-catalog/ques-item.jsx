import { useHistory } from 'react-router';
import { getQuestLevel } from 'utils';
import { AppRoute } from 'const';
import { ReactComponent as IconPerson } from 'assets/img/icon-person.svg';
import { ReactComponent as IconPuzzle } from 'assets/img/icon-puzzle.svg';
import * as S from './quests-catalog.styled';

const QuestItem = ({ questData }) => {
  const { level, previewImg, title, peopleCount, id } = questData;

  const history = useHistory();

  return (
    <S.QuestItem>
      <S.QuestItemLink
        to="#"
        onClick={(evt) => {
          evt.preventDefault();
          history.push(`${AppRoute.DetailedQuest}/${id}`);
        }}
      >
        <S.Quest>
          <S.QuestImage
            src={previewImg}
            width="344"
            height="232"
            alt={`квест ${title}`}
          />
          <S.QuestContent>
            <S.QuestTitle>{title}</S.QuestTitle>

            <S.QuestFeatures>
              <S.QuestFeatureItem>
                <IconPerson />
                {`${peopleCount.join('-')} чел`}
              </S.QuestFeatureItem>
              <S.QuestFeatureItem>
                <IconPuzzle />
                {getQuestLevel(level)}
              </S.QuestFeatureItem>
            </S.QuestFeatures>
          </S.QuestContent>
        </S.Quest>
      </S.QuestItemLink>
    </S.QuestItem>
  );
};

export default QuestItem;
