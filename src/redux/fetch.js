import axios from 'axios';

const BASE_URL = `https://655202615c69a77903296963.mockapi.io`;

export const fetchAll = async () => {
  await axios.get(`${BASE_URL}/contacts`);
};

export const addContact = async newContact => {
  await axios.post(`${BASE_URL}/contacts`, newContact);
};

export const deleteContact = async id => {
  await axios.delete(`${BASE_URL}/contacts/${id}`);
};
