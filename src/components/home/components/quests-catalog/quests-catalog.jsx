import QuestItem from './ques-item';
import TabItem from './tab-item';
import { selectTypesFromQestsData } from 'utils';
import { useEffect, useState } from 'react';
import * as S from './quests-catalog.styled';

const DEFAULT_TYPE = 'Все квесты';

const QuestsCatalog = ({ api }) => {
  const [quests, setQuests] = useState([]);
  const [currentType, setCurrentType] = useState(DEFAULT_TYPE);

  const loadQuests = async () => {
    const { data } = await api.get('/quests');

    setQuests(data);
  };

  useEffect(() => {
    loadQuests();
  }, []);

  const onChangeType = (type) => {
    setCurrentType(type);
  };

  return (
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
  );
};

export default QuestsCatalog;
