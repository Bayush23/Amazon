import axios from "axios";
const axiosInstance = axios.create({
	baseURL: "http://localhost:5001/clone-fe8e8/us-central1/api",
});
export {axiosInstance}
