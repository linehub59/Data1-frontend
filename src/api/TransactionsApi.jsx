import axios from "axios";

import {
  auth
} from "../config/Firebase";

const API =
"http://localhost:3000/api/transactions";

export const getTransactions =
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

export const createTransaction =
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

export const updateTransaction =
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

export const deleteTransaction =
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