import http from "k6/http";
import { check } from "k6";

export let options = {
  vus: 100,
  duration: "1200s",
  noVUConnectionReuse: true,
  noConnectionReuse: true,
 };

let randomID = Math.floor(Math.random() * 10000000) + 1;

export default function() {
  let res = http.get(`http://localhost:3003/api/restaurants/${randomID}/info`);
  check(res, {
    "status was 200": (r) => r.status == 200,
    "transaction time OK": (r) => r.timings.duration < 200
  });
};