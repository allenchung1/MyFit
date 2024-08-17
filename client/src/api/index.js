import axios  from "axios";

const API = axios.create({
    baseURL: "https://myfit.onrender.com/api/",
});

export const UserSignUp = async (data) => API.post("/user/signup", data);
export const UserSignIn = async (data) => API.post("/user/signin", data);

export const getDashboardDetails = async (token) =>
    API.get("/user/dashboard", {
        headers: { Authorization: `Bearer ${token}` },
    });

export const getWorkouts = async (token, date) =>
      API.get(`/user/workout${date}`, {
        headers: { Authorization: `Bearer ${token}` },
    });

export const addWorkout = async (token, data) =>
    await API.post(`/user/workout`, data, {
        headers: { Authorization: `Bearer ${token}` },
    });


export const exerciseOptions = {
    method: 'GET',
    headers: {
        'x-rapidapi-key': process.env.REACT_APP_RAPID_API_KEY,
        'x-rapidapi-host': 'exercisedb.p.rapidapi.com',
    },
};

export const fetchData = async (url, options) => {
    const response = await fetch(url, options);
    const data = await response.json();

    return data;
};