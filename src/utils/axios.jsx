import axios from 'axios';

const instance= axios.create({
    baseURL:'https://api.themoviedb.org/3/',
    headers: {accept: 'application/json',
        Authorization: "Bearer " +
        "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlOWMzZThlNzUxNTA1ZWRiNTdhODIwNDhiOGM5YTUyYyIsIm5iZiI6MTcyMjEyNTk3OS45MTk5NjksInN1YiI6IjY2YTU4YjQ3ZWM5MjU5ZjljMTMwMDM3YiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.I8njvR3VvWTwZkqqPY8yEl0dm-uhhJ-cuBb8PF9iMA4" 
    }
});

export default instance;