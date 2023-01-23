import React from "react";
import "./Css/component.css";
import hdfcLogo from "../Assets/hdfcLogo.png";
import masterCard from "../Assets/masterCard.png";
import { CheckOutlined } from "@ant-design/icons";
import { LockOutlined } from "@ant-design/icons";
import { CreditCardOutlined } from "@ant-design/icons";
import { GoogleOutlined } from "@ant-design/icons";
import ActionButtons from "./ActionButtons";
import ShowButtons from "./ShowButtons"


export default function CreditCard(props) {
  const {
    name,
    cardNumber,
    validTill,
    // valid_month,
    // valid_year,
    lockID,
    setCardDefault,
    addGpayCard,
    archive,
    showCardNum
  } = props;

  // const month=validTill.getMonth();
  // console.log(month)

  return (
    <div className="credit_card">
      <div>
        <h4 className="card_heading">Credit Card</h4>
        <ShowButtons {...props} />
      </div>
      <div className="cr_card">
        <div className="cr_wrapper" style={{
          backgroundColor: lockID || archive ? 'rgb(58, 71, 99)' : setCardDefault ? 'rgb(42, 186, 230)' : addGpayCard ? 'rgb(71, 129, 236)' : ''
        }} >
          <div className="card_logo">
            <span> {
              lockID ? <LockOutlined /> : setCardDefault ? <CheckOutlined /> : archive ? <CreditCardOutlined /> : addGpayCard ? <GoogleOutlined /> : null
            } </span>
            <img src={hdfcLogo} alt="hdfc_logo" className="hdfc_logo" />
          </div>
          <div className="card_name">
            <span className="card_holder_name">{name}</span>
            {
              showCardNum ?
                <span className="acc_no">{cardNumber.slice(0, 4) + " " + cardNumber.slice(4, 8) + " " + cardNumber.slice(8, 12) + " " + cardNumber.slice(12, 16)}</span>
                :
                <span className="acc_no">
                  {"•••• •••• •••• " + cardNumber.slice(12)}
                </span>
            }
          </div>
          <div className="card_date">
            <span>Valid Till:{validTill}</span>
            <span>CVV: •••</span>
            <img src={masterCard} alt="masterCard" className="masterCard" />
          </div>
        </div>
        <ActionButtons {...props} />
      </div>
    </div>
  );
}





