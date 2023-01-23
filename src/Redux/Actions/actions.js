import { ActionTypes } from "../Constants/actionTypes";


export const addCards = (cards) => {
  return {
    type: ActionTypes.ADD_CARDS,
    payload: {
      id: new Date().getTime().toString(),
      name: cards.name,
      bankName: cards.bankName,
      cardType: cards.cardType,
      cardNumber: cards.cardNumber,
      validTill: cards.validTill,
      cvv: cards.cvv,
      setCardDefault: cards.setCardDefault,
      addGpayCard: cards.addGpayCard,
    },
  };
};


