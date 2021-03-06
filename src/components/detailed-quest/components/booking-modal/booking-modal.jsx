import * as S from './booking-modal.styled';
import { Message, ApiRoute } from 'const';
import { toast } from 'react-toastify';
import { ReactComponent as IconClose } from 'assets/img/icon-close.svg';
import { useState } from 'react/cjs/react.development';

const BookingModal = ({ setIsBookingModalOpened, api }) => {
  const [orderData, setOrderData] = useState({
    name: '',
    peopleCount: null,
    phone: '',
    isLegal: false,
  });

  const [isDisabled, setIsDisabled] = useState(false);

  const handleCloseModal = () => {
    setIsBookingModalOpened(false);
  };

  const sendOrder = async () => {
    setIsDisabled(true);

    try {
      await api.post(ApiRoute.Orders, orderData);

      toast.info(Message.SUCCESSFUL_BOOKING);

      setIsBookingModalOpened(false);
    } catch {
      toast.info(Message.FAIL_BOOKING);
      setIsDisabled(false);
    }
  };

  const hadleSendOrder = () => {
    sendOrder();
  };

  return (
    <S.BlockLayer>
      <S.Modal>
        <S.ModalCloseBtn
          onClick={(evt) => {
            evt.preventDefault();
            handleCloseModal();
          }}
        >
          <IconClose width="16" height="16" />
          <S.ModalCloseLabel>Закрыть окно</S.ModalCloseLabel>
        </S.ModalCloseBtn>
        <S.ModalTitle>Оставить заявку</S.ModalTitle>
        <S.BookingForm
          action="https://echo.htmlacademy.ru"
          method="post"
          id="booking-form"
          onSubmit={(evt) => {
            evt.preventDefault();
            hadleSendOrder();
          }}
        >
          <S.BookingField>
            <S.BookingLabel htmlFor="booking-name">Ваше Имя</S.BookingLabel>
            <S.BookingInput
              type="text"
              id="booking-name"
              name="booking-name"
              placeholder="Имя"
              required
              disabled={isDisabled}
              onInput={({ target }) => {
                setOrderData({ ...orderData, name: target.value });
              }}
            />
          </S.BookingField>
          <S.BookingField>
            <S.BookingLabel htmlFor="booking-phone">
              Контактный телефон
            </S.BookingLabel>
            <S.BookingInput
              type="tel"
              id="booking-phone"
              name="booking-phone"
              placeholder="Телефон (xxx-xxx-xx-xx)"
              pattern="\s?[\(]{0,1}9[0-9]{2}[\)]{0,1}\s?\d{3}[-]{0,1}\d{2}[-]{0,1}\d{2}"
              required
              disabled={isDisabled}
              onInput={({ target }) => {
                setOrderData({ ...orderData, phone: target.value });
              }}
            />
          </S.BookingField>
          <S.BookingField>
            <S.BookingLabel htmlFor="booking-people">
              Количество участников
            </S.BookingLabel>
            <S.BookingInput
              type="number"
              id="booking-people"
              name="booking-people"
              placeholder="Количество участников"
              min="2"
              max={8}
              required
              disabled={isDisabled}
              onInput={({ target }) => {
                setOrderData({
                  ...orderData,
                  peopleCount: Number(target.value),
                });
              }}
            />
          </S.BookingField>
          <S.BookingSubmit type="submit" disabled={isDisabled}>
            Отправить заявку
          </S.BookingSubmit>
          <S.BookingCheckboxWrapper>
            <S.BookingCheckboxInput
              type="checkbox"
              id="booking-legal"
              name="booking-legal"
              disabled={isDisabled}
              onChange={() => {
                setOrderData({ ...orderData, isLegal: !orderData.isLegal });
              }}
              required
            />
            <S.BookingCheckboxLabel
              className="checkbox-label"
              htmlFor="booking-legal"
            >
              <S.BookingCheckboxText>
                Я согласен с{' '}
                <S.BookingLegalLink href="#">
                  правилами обработки персональных данных и пользовательским
                  соглашением
                </S.BookingLegalLink>
              </S.BookingCheckboxText>
            </S.BookingCheckboxLabel>
          </S.BookingCheckboxWrapper>
        </S.BookingForm>
      </S.Modal>
    </S.BlockLayer>
  );
};

export default BookingModal;
