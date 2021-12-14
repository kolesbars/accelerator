import QuestItem from './ques-item';
import TabItem from './tab-item';
import Loading from 'components/loading/loading';
import { selectTypesFromQestsData } from 'utils';
import { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import * as S from './quests-catalog.styled';

const DEFAULT_TYPE = 'Все квесты';

const QuestsCatalog = ({ api }) => {
  const [quests, setQuests] = useState([]);
  const [currentType, setCurrentType] = useState(DEFAULT_TYPE);
  const [isLoaded, setIsLoaded] = useState(false);
  const history = useHistory();

  const loadQuests = async () => {
    try {
      const { data } = await api.get('/quests');
      setIsLoaded(true);
      setQuests(data);
    } catch {
      history.push('/not-found-screen');
    }
  };

  useEffect(() => {
    loadQuests();
  }, []);

  const onChangeType = (type) => {
    setCurrentType(type);
  };

  return isLoaded ? (
    <>
      <S.Tabs>
        {selectTypesFromQestsData(quests).map((type) => {
          return (
            <TabItem
              type={type}
              key={type}
              isActiveType={type === currentType}
              onChangeType={onChangeType}
            />
          );
        })}
      </S.Tabs>

      <S.QuestsList>
        {quests
          .filter((quest) => {
            return quest.type === currentType || currentType === DEFAULT_TYPE;
          })
          .map((quest) => {
            return <QuestItem questData={quest} key={quest.id} />;
          })}
      </S.QuestsList>
    </>
  ) : (
    <Loading />
  );
};

export default QuestsCatalog;
