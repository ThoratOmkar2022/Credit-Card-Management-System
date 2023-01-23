import React from "react";
import { EyeOutlined } from "@ant-design/icons";
import { useDispatch } from "react-redux";

function ShowButtons(props) {
  const { id, showCardNum } = props;

  const dispatch = useDispatch();
  function ShowNumber(id) {
    dispatch({
      type: "SHOW_CARDS_NUMBER",
      payload: id,
    });
  }

  return (
    <div>
      <button className="show_card_btn" onClick={() => ShowNumber(id)}>
        <EyeOutlined />
        {showCardNum ? " Hide Card Number" : " Show Card Number"}
      </button>
    </div>
  );
}

export default ShowButtons;
