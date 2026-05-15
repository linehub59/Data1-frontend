import axios from "axios";

import {
  auth
} from "../config/Firebase";

const API =
"http://localhost:3000/api/profile";

export const getProfile =
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


export const updateProfile =
async (id, data) => {

  const token =
  await auth.currentUser.getIdToken();

  return axios.put(
    `${API}/${id}`,
    data,
    {
      headers: {
        Authorization:
        "Bearer " + token
      }
    }
  );

};