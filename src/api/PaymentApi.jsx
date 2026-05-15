import axios from "axios";

import {
  auth
} from "../config/Firebase";

const API =
"http://localhost:3000/api/payment";


export const pay =
async (data) => {

  const token =
  await auth.currentUser.getIdToken();

  return axios.post(
    `${API}/stkpush`,
    data,
    {
      headers: {
        Authorization:
        "Bearer " + token
      }
    }
  );

};