import axios from "axios";

const sendEmail = async (message) => {
  return axios({
    method: "post",
    url: "/api/sendmail",
    data: {
      message: message,
    },
  });
};

export default sendEmail;
