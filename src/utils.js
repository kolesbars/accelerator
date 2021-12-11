const getQuestLevel = (level) => {
  switch (level) {
    case 'hard':
      return 'сложный';
    case 'medium':
      return 'седний';
    case 'easy':
      return 'легкий';
    default:
      return 'другой';
  }
};

const getQuestType = (type) => {
  switch (type) {
    case 'adventures':
      return 'Приключения';
    case 'horror':
      return 'Ужасы';
    case 'mystic':
      return 'Мистика';
    case 'detective':
      return 'Детектив';
    case 'sci-fi':
      return 'Sci-fi';
    default:
      return 'Все квесты';
  }
};

const selectTypesFromQestsData = (quests) => {
  const typesList = ['Все квесты'];

  quests.forEach((quest) => {
    if (!typesList.includes(quest.type)) {
      typesList.push(quest.type);
    }
  });

  return typesList;
};

export { getQuestLevel, getQuestType, selectTypesFromQestsData };
