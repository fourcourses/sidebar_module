import http from "k6/http";
import { check } from "k6";

export let options = {
  vus: 150,
  duration: "120s",
  noVUConnectionReuse: true,
  noConnectionReuse: true,
 };


let last100 = Math.floor(Math.random() * 100) + 9999901
let randomID = Math.floor(Math.random() * 10000000) + 1;

let idPicker = ((randomValue) => {
  return randomValue > 0.5 ? randomID : last100;
})(Math.random())

export default function() {
  let res = http.get(`http://localhost:3003/api/restaurants/${idPicker}/info`);
  check(res, {
    "status was 200": (r) => r.status == 200,
    "transaction time OK": (r) => r.timings.duration < 200
  });
};