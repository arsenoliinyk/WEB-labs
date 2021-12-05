import axios from "axios";
import qs from "qs";

const BASE_URL = "http://localhost:8088";

const baseAxios = axios.create({
  baseURL: BASE_URL,
  timeout: 5000,
});

baseAxios.interceptors.request.use(
  (config) => {
    console.log(
      `Method: ${config.method.toUpperCase()}\n` +
        `URL: ${BASE_URL}${config.url}\n` +
        `Params: ${JSON.stringify(config.params)}\n` +
        `Time: ${new Date().toLocaleString()}`
    );
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

const helicoptersApi = {
  getHelicopters: (filters) =>
    baseAxios.get("/helicopters", {
      params: {
        filters: filters,
      },
      paramsSerializer: (params) => {
        return qs.stringify(params, { arrayFormat: "repeat" });
      },
    }),  
  getHelicopterTypes: () => baseAxios.get("/helicopters/types"),

  createHelicopter: (helicopter) =>
    baseAxios.post("/helicopters", {
      name: helicopter.name,
      numOfPassengers: helicopter.numOfPassengers,
      maxSpeed: helicopter.maxSpeed,
      type: helicopter.type,
      value: helicopter.value,
    }),

  editHelicopter: (helicopter) =>
    baseAxios.put("/helicopters", {
      id: helicopter.id,
      name: helicopter.name,
      numOfPassengers: helicopter.numOfPassengers,
      maxSpeed: helicopter.maxSpeed,
      type: helicopter.type,
      value: helicopter.value,
    }),

  deleteHelicopter: (id) => baseAxios.delete(`/helicopters/${id}`),
};

export default helicoptersApi;
