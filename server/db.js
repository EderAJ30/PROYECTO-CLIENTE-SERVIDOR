import { createPool } from "mysql2/promise";
//pon el host y el port correctos del docker
export const pool = new createPool({
  host: "127.0.0.1",
  port: 3307,
  user: "root",
  password: "1234",
  database: "taskdb",
});
