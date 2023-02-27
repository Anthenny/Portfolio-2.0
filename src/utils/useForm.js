import { useState } from "react";
import emailjs from "emailjs-com";

const useForm = (validation, form) => {
  const [values, setValues] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [emailState, setEmailState] = useState(true);

  const sendEmail = () => {
    emailjs.sendForm("service_ry13h7r", "template_cjzhzs3", form.current, "yTAMT2R-MCyCH23ZQ").then(
      (result) => {
        console.log(result.text);
      },
      (error) => {
        console.log(error.text);
      }
    );
  };

  const clearError = (e) => {
    const { name } = e.target;
    setErrors({ ...errors, [name]: "" });
  };

  const handelSubmit = (e) => {
    e.preventDefault();

    setErrors(validation(values));

    if (Object.keys(validation(values)).length === 0) {
      sendEmail();
      setEmailState(true);
      setValues({ name: "", email: "", phoneNumber: "", subject: "", message: "" });
    }
  };

  const handelChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  return [values, handelChange, handelSubmit, errors, clearError, emailState];
};

export default useForm;
