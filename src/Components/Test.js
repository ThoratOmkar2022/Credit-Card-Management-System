// import React, { Component } from "react";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

// export default class SimpleSlider extends Component {
//     render() {
//         const settings = {
//             dots: true,
//             infinite: true,
//             speed: 500,
//             slidesToShow: 1,
//             slidesToScroll: 1
//         };
//         return (
//             <div>
//                 <h2> Single Item</h2>
//                 <Slider {...settings}>
//                     <div>
//                         <h3>1</h3>
//                     </div>
//                     <div>
//                         <h3>2</h3>
//                     </div>
//                     <div>
//                         <h3>3</h3>
//                     </div>
//                     <div>
//                         <h3>4</h3>
//                     </div>
//                     <div>
//                         <h3>5</h3>
//                     </div>
//                     <div>
//                         <h3>6</h3>
//                     </div>
//                 </Slider>
//             </div>
//         );
//     }
// }

// import React from "react";
// import { DatePicker, Space } from 'antd';
// const onChange = (date, dateString) => {
//     console.log(date, dateString);
//   };
// const FC = () => (
//     <Space direction="vertical">
//       <DatePicker onChange={onChange} picker="month" />
//     </Space>
//   );
  
//   export default FC;









// ***************Form**************************

import React, { useState } from "react";
import { Modal, ModalHeader, ModalBody } from "reactstrap";
// import { useFormik } from "formik";
import { newCardSchema } from "../Schemas/index.jsx";
import { useDispatch } from "react-redux";
import { addCards } from "../Redux/Actions/actions";
import { Formik, Form, Field } from "formik";


// import { DatePicker, Space } from "antd";
// const onChange = (date, dateString) => {
//   console.log(date, dateString);
// };

const initialValues = {
  name: "",
  bankName: "",
  cardType: "",
  cardNumber: "",
  validTill: "",
  cvv: "",
  setCardDefault: false,
  addGpayCard: false,
  lockID: false,
  archive: false,
};

function NewCard() {
  const dispatch = useDispatch();
  const [modal, setModal] = useState(false);
  return (
    <div>
      <Modal size="md" isOpen={modal} toggle={() => setModal(!modal)}>
        <ModalHeader toggle={() => setModal(!modal)}>New card</ModalHeader>
        <ModalBody>
          <Formik
            initialValues={initialValues}
            validationSchema={newCardSchema}
            onSubmit={(values, actions) => {
              actions.setSubmitting(false);
              console.log(values)
              dispatch(
                addCards({
                  name: values.name,
                  bankName: values.bankName,
                  cardType: values.cardType,
                  cardNumber: values.cardNumber,
                  validTill: values.validTill,
                  cvv: values.cvv,
                  setCardDefault: values.setCardDefault,
                  addGpayCard: values.addGpayCard,
                })
              );
              // action.resetForm();
            }}
          >
            {({
              values,
              errors,
              touched,
              handleChange,
              handleBlur,
              handleSubmit,
              isSubmitting,
            }) => (
              <Form className="new_card_form">
                <div>
                  <label htmlFor="name" className="input-label">
                    Name:
                  </label>
                  <br />
                  <Field
                    placeholder="Name"
                    type="name"
                    autoComplete="off"
                    name="name"
                    id="name"
                    value={values.name}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className="form_field"
                  />

                  {errors.name && touched.name ? (
                    <p className="form-error">{errors.name}</p>
                  ) : null}
                </div>
                <div>
                  <label htmlFor="bankName" className="input-label">
                    Bank Name:
                  </label>
                  <br />
                  <Field
                    type="text"
                    placeholder="ie.HDFC BANK"
                    autoComplete="off"
                    name="bankName"
                    id="bankName"
                    value={values.bankName}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className="form_field"
                  />
                  
                  {errors.bankName && touched.bankName ? (
                    <p className="form-error">{errors.bankName}</p>
                  ) : null}
                </div>

                <div>
                  <label htmlFor="cardType" className="input-label">
                    Card Type:
                  </label>
                  <br />
                  <select
                    name="cardType"
                    value={values.cardType}
                    onChange={handleChange}
                    className="form_field"
                  >
                    <option>Select Card Type</option>
                    <option>Credit</option>
                    <option> Debit </option>
                  </select>
                  {errors.cardType && touched.cardType ? (
                    <p className="form-error">{errors.cardType}</p>
                  ) : null}
                </div>

                <div>
                  <label htmlFor="cardNumber" className="input-label">
                    Card Number:
                  </label>
                  <br />

                  <Field
                    type="tel"
                    placeholder="ie.7565 8564 7564 8756"
                    autoComplete="off"
                    name="cardNumber"
                    id="cardNumber"
                    value={values.cardNumber}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className="form_field"
                  />
                  {errors.cardNumber && touched.cardNumber ? (
                    <p className="form-error">{errors.cardNumber}</p>
                  ) : null}
                </div>

                <div>
                  <label htmlFor="validTill" className="input-label">
                    Valid Till:
                  </label>
                  <br />

                  <Field
                    type="date"
                    name="validTill"
                    id="validTill"
                    value={values.validTill}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className="form_field"
                  />

                  {/* <DatePicker minDate={new Date()} picker="month"
                    name="validTill"
                    value={values.checkIn}
                    onChange={(value) => setFieldValue ("checkIn", value)} /> */}

                </div>

                <div>
                  <label htmlFor="cvv">CVV:</label>
                  <br />
                  <Field
                    type="password"
                    name="cvv"
                    id="cvv"
                    value={values.cvv}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className="form_field"
                  />
                  {errors.cvv && touched.cvv ? (
                    <p className="form-error">{errors.cvv}</p>
                  ) : null}
                </div>

                <div>
                  <Field type="checkbox" name="setCardDefault" />
                  <label htmlFor="setCardDefault" className="input-label">
                    Set this card as Default
                  </label>
                </div>

                <div>
                  <Field type="checkbox" name="addGpayCard" id="addGpayCard" />
                  <label htmlFor="addGpayCard" className="input-label">
                    Add this card to GPay
                  </label>
                </div>

                <button type="submit" disabled={isSubmitting}>
                  Submit
                </button>
              </Form>
            )}
          </Formik>
        </ModalBody>
      </Modal>
      <button onClick={() => setModal(true)} className="new_card">
        + Add Card
      </button>
    </div>
  );
}

export default NewCard;
