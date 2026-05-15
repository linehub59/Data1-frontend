import axios from "axios";

import {
  auth
} from "../config/Firebase";

const API =
"https://data1-jywv.onrender.com/api/dashboard";

export const getDashboard  =
async () => {
  const token =
  await auth.currentUser.getIdToken();


  return axios.get(API, {

    headers: {
      Authorization:
      "Bearer " + token
    }

  });

};