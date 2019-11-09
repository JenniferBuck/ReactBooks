import axios from "axios";

// The getRecipes method retrieves recipes from the server
// It accepts a "query" or term to search the recipe api for
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