import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { emptyQuest } from 'const';
import { getQuestLevel, getQuestType } from 'utils';
import { MainLayout } from 'components/common/common';
import { ReactComponent as IconClock } from 'assets/img/icon-clock.svg';
import { ReactComponent as IconPerson } from 'assets/img/icon-person.svg';
import { ReactComponent as IconPuzzle } from 'assets/img/icon-puzzle.svg';
import * as S from './detailed-quest.styled';
import { BookingModal } from './components/components';

const DetailedQuest = ({ api }) => {
  const { id } = useParams();
  const currentId = +id;

  const [isBookingModalOpened, setIsBookingModalOpened] = useState(false);
  const [questData, setQuestData] = useState(emptyQuest);

  const { title, description, type, coverImg, level, peopleCount, duration } =
    questData;

  const loadQuestData = async () => {
    const { data } = await api.get(`/quests/${currentId}`);
    setQuestData(data);
  };

  useEffect(() => {
    loadQuestData();
  }, [currentId]);

  const onBookingBtnClick = () => {
    setIsBookingModalOpened(true);
  };

  return (
    <MainLayout>
      <S.Main>
        <S.PageImage
          src={`/${coverImg}`}
          alt={`Квест ${title}`}
          width="1366"
          height="768"
        />
        <S.PageContentWrapper>
          <S.PageHeading>
            <S.PageTitle>{title}</S.PageTitle>
            <S.PageSubtitle>{getQuestType(type)}</S.PageSubtitle>
          </S.PageHeading>

          <S.PageDescription>
            <S.Features>
              <S.FeaturesItem>
                <IconClock width="20" height="20" />
                <S.FeatureTitle>{duration} мин</S.FeatureTitle>
              </S.FeaturesItem>
              <S.FeaturesItem>
                <IconPerson width="19" height="24" />
                <S.FeatureTitle>{peopleCount.join('-')} чел</S.FeatureTitle>
              </S.FeaturesItem>
              <S.FeaturesItem>
                <IconPuzzle width="24" height="24" />
                <S.FeatureTitle>{getQuestLevel(level)}</S.FeatureTitle>
              </S.FeaturesItem>
            </S.Features>

            <S.QuestDescription>{description}</S.QuestDescription>

            <S.QuestBookingBtn onClick={onBookingBtnClick}>
              Забронировать
            </S.QuestBookingBtn>
          </S.PageDescription>
        </S.PageContentWrapper>

        {isBookingModalOpened && (
          <BookingModal
            setIsBookingModalOpened={setIsBookingModalOpened}
            api={api}
          />
        )}
      </S.Main>
    </MainLayout>
  );
};

export default DetailedQuest;
