import axios from "axios";
import { configDotenv } from "dotenv";

configDotenv();
export default function AppAxios() {
  return axios.create({
    baseURL: process.env.BASE_URL || "http://localhost:8080/",
  });
}
