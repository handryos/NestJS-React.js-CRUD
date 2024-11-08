import AppAxios from "@/app/axios/AppAxios";
import { toast } from "react-toastify";
import dotenv from "dotenv";

dotenv.config();

export default {
  async getAllCountries() {
    return AppAxios()
      .get(`/countries`)
      .then((response) => {
        return response;
      })
      .catch((error) => {
        toast.error(error.response.data.message);
        return error.response;
      });
  },

  async getCountryInfo(country: string, id: string) {
    return AppAxios()
      .post("/countries", { country, id: id })
      .then((response) => {
        return response;
      })
      .catch((error) => {
        toast.error(error.response.data.message);
        return error.response;
      });
  },
};
