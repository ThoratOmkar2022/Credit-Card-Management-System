import React from 'react'
import "./Css/component.css";
import { CheckOutlined } from "@ant-design/icons";
import { LockOutlined } from "@ant-design/icons";
import { CreditCardOutlined } from "@ant-design/icons";
import { GoogleOutlined } from "@ant-design/icons";
import { useDispatch } from "react-redux";


function ActionButtons(props) {
  const {
    id,
  } = props;

  const dispatch = useDispatch();

  function lockHandler(id) {
    dispatch({
      type: "LOCK",
      payload: id
    })
  }

  function defaultHandler(id) {
    dispatch({
      type: "SET_AS_DEFAULT",
      payload: id
    })
  }

  function archivetHandler(id) {
    dispatch({
      type: "ARCHIVE_CARDS",
      payload: id
    })
  }

  function gpaytHandler(id) {
    dispatch({
      type: "ADD_TO_GP",
      payload: id
    })
  }

  return (
    <div className="cr_action">
      <div className="lock_archive_btn">
        <div className='ac_btn'>
          <div><button className="action_btn" onClick={() => lockHandler(id)}>
            <LockOutlined />
          </button></div>
          <div><p className="action_btn_heading">Lock card</p></div>
        </div>

        <div className='ac_btn'>
          <div><button className="action_btn" onClick={() => archivetHandler(id)}>
            <CreditCardOutlined />
          </button></div><div> <p className="action_btn_heading">Archive</p></div>
        </div>
      </div>

      <div className="default_gp_btn">
        <div className='ac_btn'>
          <div> <button className="action_btn" onClick={() => defaultHandler(id)}>
            <CheckOutlined />
          </button></div> <div><p className="action_btn_heading">Set As Default</p></div>
        </div>

        <div className='ac_btn'>
          <div><button className="action_btn" onClick={() => gpaytHandler(id)}>
            <GoogleOutlined />
          </button></div>
          <div> <p className="action_btn_heading">Add To GPay</p></div>
        </div>

      </div>
    </div>
  )
}

export default ActionButtons

