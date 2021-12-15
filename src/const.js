const emptyQuest = {
  'id': 0,
  'title': '',
  'description': '',
  'previewImg': '',
  'coverImg': '',
  'type': '',
  'level': '',
  'peopleCount': [],
  'duration': 0,
};

const City = {
  Lng: 30.3141,
  Lat: 59.9686,
};

const Point = {
  Lng: 30.316272,
  Lat: 59.968137,
};

const Message = {
  SUCCESSFUL_BOOKING: 'Бронирование прошло успешно',
  FAIL_BOOKING: 'Не удалось забронировать',
};

const IconSizes = {
  Size: [40, 40],
  Anchor: [20, 40],
};

const ContactsInfo = {
  Phone: '8 (800) 333-55-99',
  EMail: 'info@escape-room.ru',
};

const AppRoute = {
  Home: '/',
  Contacts: '/contacts',
  DetailedQuest: '/detailed-quest',
  NotFoundScreen: '/not-found-screen',
};

const ApiRoute = {
  Quests: '/quests',
  Orders: '/orders',
};

export {
  emptyQuest,
  City,
  Point,
  Message,
  IconSizes,
  AppRoute,
  ApiRoute,
  ContactsInfo,
};
