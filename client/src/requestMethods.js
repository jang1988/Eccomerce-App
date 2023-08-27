import axios from 'axios';

const BASE_URL = 'http://localhost:5000/api/';
const TOKEN =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0NDZhZTFjMWQxZjgyOWY2YmZlNWJiMiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY5MjIwMzc5NywiZXhwIjoxNjkyNDYyOTk3fQ.hzsqepgsLppa_-EPHPXYIKDvsYvzKTkDan971tS8OV0';

// const user = JSON.parse(localStorage.getItem('persist:root'))?.user;
// const currentUser = user && JSON.parse(user).currentUser;

export const publicRequest = axios.create({
    baseURL: BASE_URL,
});

export const userRequest = axios.create({
    baseURL: BASE_URL,
    header: { token: `Bearer ${TOKEN}` },
});
