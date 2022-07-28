import * as Yup from "yup";

const requiredMsg = "Required field!";
const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

export const checkoutValidation = Yup.object().shape({
  name: Yup.string().min(2, "Too short!").required(requiredMsg),
  email: Yup.string().email("Invalid email").required(requiredMsg),
  nmb: Yup.string()
    .matches(phoneRegExp, "Phone number is not valid")
    .required(requiredMsg),
  address: Yup.string().required(requiredMsg),
  zip: Yup.number().required(requiredMsg),
  city: Yup.string().min(3, "Too short").required(requiredMsg),
  country: Yup.string().required(requiredMsg),
  method: Yup.string(),
  enmb: Yup.number().when('method===', {
    is: "emoney",
    then: Yup.number().required(requiredMsg),
  }),
  pin: Yup.number().when('method===', {
    is: "emoney",
    then: Yup.number().required(requiredMsg),
  }),
});
