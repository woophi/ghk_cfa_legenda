import calendar from './assets/calendar.png';
import check from './assets/check.png';
import sun from './assets/sun.png';
import suns from './assets/suns.png';

export const data = {
  minRequest: 85,
  maxRequest: 250,
  titleName: 'ООО "Легенда"',
  titleType: 'Накопительный ЦФА (м2).',
  titlePeriod: '1 год',
  p1: 'Накопительные цифровые квадратные метры жилой недвижимости  — возможность сформировать целевой бюджет для покупки выбранной квартиры у застройщика.',
  p2: 'Покупая Накопительные цифровые квадратные метры жилой недвижимости, вы получаете получаете право на длительное бронирование квартиры у застройщика по текущей цене с последующим заключением договорам долевого участия (ДДУ) для покупки квартиры.',
  p3: 'Накопительные цифровые квадратные метры жилой недвижимости – это инновационный продукт, выпускаемый в формате ЦФА.',
  cfaNumber: 'LEG-1-DTD-092024-00073',
  cfaPrice: '100 000 ₽',
  cfaPriceNumber: 100_000,
  cfaVolume: 'от 100 000 ₽ до 25 000 000 ₽',
  cfaPeriodPayment: 'В конце срока',
  cfaDuration: '1 год',
  hideSellDate: true,

  cfaCoefType: 'Фиксированная',
  cfaCoef: '15%',

  imgRows: [
    {
      title: 'Целевой формат накоплений',
      subtitle:
        'Забронируйте квартиру у застройщика и сформируйте бюджет на её покупку и/или первоначальный взнос по ипотеке',
      img: sun,
    },
    {
      title: 'Один из лидеров рынка жилья высокой ценовой категории',
      subtitle:
        'Холдинг LEGENDA входит в ТОП-10 по объёму продаж квартир и ТОП-15 девелоперов по объёму текущего строительства  Санкт-Петербурга',
      img: check,
    },
    {
      title: 'Гарантированная доходность',
      subtitle: '15% годовых',
      img: suns,
    },
    {
      title: 'Комфортный срок',
      subtitle: 'Срок инвестиций - 1 год',
      img: calendar,
    },
  ],
  emitment: 'ООО "Легенда"',
  address: '196210, г Санкт-Петербург, ул. Стартовая, д. 8 литер А, офис 307, каб. 1',
  site: 'https://investment.legenda-dom.ru/',
};
