import Axios from "axios";

const axiosInstance = Axios.create({
  baseURL: `${process.env.REACT_APP_SERVER_URI}/user`,
  withCredentials: true,
});

const AuthAPI = {
  signup: async (body) => {
    const response = await axiosInstance.post("/signup", body);
    const data = await response.data;
    return data;
  },

  login: async (body) => {
    const response = await axiosInstance.post("/login", body);
    const data = await response.data;
    return data;
  },

  logout: async () => {
    const response = await axiosInstance.post("/logout");
    const data = await response.data;
    return data;
  },
};

export default AuthAPI;
