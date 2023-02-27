import emailjs from "emailjs-com";

const sendEmail = () => {
  emailjs.sendForm("service_24j29tr", "template_e00m9sz", form.current, "SR17iEIADb6T20ayR").then(
    (result) => {
      console.log(result.text);
    },
    (error) => {
      console.log(error.text);
    }
  );
  form.target.reset();
};

export default sendEmail;
