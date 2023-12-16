import {
  addBookHandler,
  deleteBookByIdHandler,
  editBookByIdHandler,
  getAllBooksHandler,
  getBookByIdHandler,
} from "./handler.js";

const routes = [
  {
    method: "post",
    path: "/books",
    handler: addBookHandler,
  },
  {
    method: "get",
    path: "/books",
    handler: getAllBooksHandler,
  },
  {
    method: "get",
    path: "/books/{id}",
    handler: getBookByIdHandler,
  },
  {
    method: "put",
    path: "/books/{id}",
    handler: editBookByIdHandler,
  },
  {
    method: "delete",
    path: "/books/{id}",
    handler: deleteBookByIdHandler,
  },
];

export default routes;