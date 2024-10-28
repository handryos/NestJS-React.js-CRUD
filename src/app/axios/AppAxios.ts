import axios from "axios";

export default function AppAxios() {
  const token = localStorage.getItem("token");
  return axios.create({
    baseURL: `http://localhost:8000`,
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
}
