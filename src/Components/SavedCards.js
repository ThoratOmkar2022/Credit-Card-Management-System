import React from "react";
import "./Css/component.css";
import Form from "./Form";
import { useSelector } from "react-redux";
import CreditCard from "./CreditCard";
import DebitCard from "./DebitCard";
import CardDetails from "./CardDetails";
import Slider from "react-slick";


function Cards() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  const cards = useSelector((state) => state.card.cards);
  const renderCards = cards.map((card) => {

    return (
      <>
        <Slider {...settings}>{card.cardType === "Credit" && (
          <CreditCard
            name={card.name}
            id={card.id}
            bankName={card.bankName}
            cardType={card.cardType}
            cardNumber={card.cardNumber}
            validTill={card.validTill}
            cvv={card.cvv}
            setCardDefault={card.setCardDefault}
            lockID={card.lockID}
            addGpayCard={card.addGpayCard}
            showCardNum={card.showCardNum}
            archive={card.archive}
          />
        )}
          {card.cardType === "Debit" && (
            <DebitCard
              name={card.name}
              id={card.id}
              bankName={card.bankName}
              cardType={card.cardType}
              cardNumber={card.cardNumber}
              validTill={card.validTill}
              cvv={card.cvv}
              setCardDefault={card.setCardDefault}
              lockID={card.lockID}
              addGpayCard={card.addGpayCard}
              showCardNum={card.showCardNum}
              archive={card.archive}
            />
          )}
        </Slider> </>
    );
  });

  return (
    <div>
      <div className="nav_items">
        <div className="showCard_heading">
          <div className="sv_heading"><h5>Saved Card</h5></div><div className="gd_heading"><h5>GD Card</h5></div>
        </div>
        <Form />
      </div>
      <div className="save_card">
        <div className="card_detailss">
          <CardDetails />
        </div>
        <div className="show_card">{renderCards}</div>
      </div>
    </div>
  );
}

export default Cards;
