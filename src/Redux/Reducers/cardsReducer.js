import { ActionTypes } from "../Constants/actionTypes";


const intialState = {
  cards: [
    {
      id: "1",
      name: "Os Thorat",
      bankName: "Bank of Maharahtra",
      cardType: "Credit",
      cardNumber: "1278963578942563",
      validTill: "12/28",
      // valid_month: 5,
      // valid_year: 2030,
      cvv: "856",
      setCardDefault: false,
      addGpayCard: false,
      lockID: false,
      archive: false,
      showCardNum: false
    },

    {
      id: "123456789",
      name: "Omkar",
      bankName: "HDFC",
      cardType: "Debit",
      cardNumber: "1247698537129648",
      validTill: "10/25",
      // valid_month: 12,
      // valid_year: 2040,
      cvv: "245",
      setCardDefault: true,
      addGpayCard: false,
      lockID: false,
      archive: false,
      showCardNum: false
    },
  ],
};

export const cardsReducer = (state = intialState, action) => {
  // console.log(action.payload);
  switch (action.type) {
    case ActionTypes.ADD_CARDS:
      // console.log(action.payload)
      const {
        id,
        name,
        bankName,
        cardType,
        cardNumber,
        validTill,
        cvv,
        setCardDefault,
        addGpayCard,
      } = action.payload;
      return {
        // ...state,
        cards: [
          ...state.cards,
          {
            id,
            name,
            bankName,
            cardType,
            cardNumber,
            validTill,
            cvv,
            setCardDefault,
            addGpayCard,
            lockID: false,
            archive: false,
            showCardNum: false
          },
        ],
      };


      
    case  ActionTypes.SHOW_CARDS_NUMBER:
      return {
        ...state,
        cards: state.cards.map((item) =>
          (item.id === action.payload)
            ? { ...item, showCardNum: !(item.showCardNum), lockID: false, archive: false, setCardDefault: false, addGpayCard: false }
            : item
        ),
      }

    case   ActionTypes.LOCK:
      return {
        ...state,
        cards: state.cards.map((item) =>
          (item.id === action.payload)
            ? { ...item, lockID: !(item.lockID), archive: false, setCardDefault: false, addGpayCard: false }
            : item
        ),
      };


    case  ActionTypes.SET_AS_DEFAULT:
      return {
        ...state,
        cards:
          state.cards.map((item) =>
            (item.id === action.payload) ? { ...item, setCardDefault: !(item.setCardDefault), lockID: false, archive: false, addGpayCard: false } : item
          ),
      };

    case  ActionTypes.ARCHIVE_CARDS:
      return {
        ...state,
        cards:
          state.cards.map((item) =>
            (item.id === action.payload) ? { ...item, archive: !(item.archive), lockID: false, addGpayCard: false, setCardDefault: false } : item
          ),
      };

    case  ActionTypes.ADD_TO_GP:
      return {
        ...state,
        cards:
          state.cards.map((item) =>
            (item.id === action.payload) ? { ...item, addGpayCard: !(item.addGpayCard), lockID: false, archive: false, setCardDefault: false } : item
          ),
      };

    default:
      return state;
  }
};

