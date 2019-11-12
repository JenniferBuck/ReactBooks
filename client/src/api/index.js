import axios from "axios";


export default {
  searchBooks: query => {
    return axios.get(`https://www.googleapis.com/books/v1/volumes?q=${query}`);
  },
  saveBook: book => {
    console.log(book)
    return axios.post("/api/books",book)
  },
  findSavedBooks: () => {
    return axios.get("/api/books")
  },
  deleteSavedBook: (id) => {
    return axios.delete(`/api/books/${id}`)
  }
};