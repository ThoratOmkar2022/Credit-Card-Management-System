
import * as Yup from "yup";

export const newCardSchema = Yup.object().shape({
    name: Yup.string().min(2).max(35).required("Please enter your name"),
    bankName: Yup.string().required("Please enter Bank Name"),
    cardType: Yup.string().required("Please select card type"),
    cardNumber: Yup.string().min(16).max(16).required("Please enter card number"),
    cvv: Yup.string().min(3).max(3).required("Please enter CVV"),
    validTill: Yup.string().required("Please select valid Month"),
    defaultCard: Yup.boolean()
        .oneOf([true], "You must accept the terms and conditions")
})





