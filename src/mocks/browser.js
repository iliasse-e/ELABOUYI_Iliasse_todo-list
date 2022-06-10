import { setupWorker, rest } from "msw";
import { initData } from "./init-data";

const url = "https://8290720b-7f83-49c4-8d29-19afd523c901.mock.pstmn.io";
const store = JSON.parse(localStorage.getItem("todos"));

const worker = setupWorker(
  rest.get(`api/getTodos`, (req, res, ctx) => {
    const data = () => {
      if (store !== null) return store;
      else return initData;
    };
    return res(
      ctx.json({
        data: data(),
      })
    );
  }),
  rest.post(`api/postTodos`, (req, res, ctx) => {
    localStorage.setItem("todos", req.body);
    return res(ctx.json(JSON.parse(localStorage.getItem("todos"))));
  })
);

worker.start();
