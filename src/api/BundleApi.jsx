import axios from "axios";

import {
  auth
} from "../config/Firebase";

const API =
"https://data1-jywv.onrender.com/api/data";

export const getBundles =
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

export const createBundle =
async (data) => {

  const token =
  await auth.currentUser.getIdToken();

  return axios.post(
    API,
    data,
    {
      headers: {
        Authorization:
        "Bearer " + token
      }
    }
  );

};

export const updateBundle =
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

export const deleteBundle =
async (id) => {

  const token =
  await auth.currentUser.getIdToken();

  return axios.delete(
    `${API}/${id}`,
    {
      headers: {
        Authorization:
        "Bearer " + token
      }
    }
  );

};