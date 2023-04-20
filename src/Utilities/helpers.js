import axios from "axios";
import { baseUrl } from "./Url/Url";

export const postNewData = async (
  { name, email, phone, position, avatar },
) => {
  return await axios
    .post(`${baseUrl}/`, {
      name,
      email,
      phone,
      position,
      avatar,
    })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
};

export const getPosition = async () => {
  return await axios
    .get(`https://frontend-test-assignment-api.abz.agency/api/v1/positions`)
    .then(function (response) {
      console.log(response);
    });
};