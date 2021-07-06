import axios from "axios";
const url = "https://cloudy.tijazcloud.de/users/";
import { Credentials } from "@/api/api";

export default {
  login(credentials: Credentials) {
    return axios
      .post(url + "login", credentials)
      .then((response) => response.data);
  },
  signUp(credentials: Credentials) {
    return axios
      .post(url + "register", credentials)
      .then((response) => response.data);
  },
  getSecretContent() {
    return axios.get(url + "hello/").then((response) => response.data);
  },
};
