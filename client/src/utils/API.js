import axios from "axios";

export default {
  // Gets all books
  getClasses: function() {
    return axios.get("/api/classes");
  },
  // Gets the book with the given id
  getMondayClasses: function(id) {
    return axios.get("/api/classes/Monday");
  },
  // Gets the book with the given id
  getTuesdayClasses: function(id) {
    return axios.get("/api/classes/Tuesday");
  },
  // Gets the book with the given id
  getWedClasses: function(id) {
    return axios.get("/api/classes/Wed");
  },
  // Gets the book with the given id
  getThursClasses: function(id) {
    return axios.get("/api/classes/Thurs");
  },
  // Gets the book with the given id
  getFriClasses: function(id) {
    return axios.get("/api/classes/Fri");
  },
  // Gets the book with the given id
  getWkendClasses: function(id) {
    return axios.get("/api/classes/Wkend");
  },
  // Gets the book with the given id
  getClass: function(id) {
    return axios.get("/api/classes/" + id);
  },
  // Deletes the book with the given id
  deleteClass: function(id) {
    return axios.delete("/api/classes/" + id);
  },
  // Saves a book to the database
  saveClass: function(bookData) {
    return axios.post("/api/classes", bookData);
  }
};
