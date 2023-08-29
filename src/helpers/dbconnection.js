import { createConnection } from 'mysql2/promise';
export const connection = await createConnection({
  host: '127.0.0.1',
  port: 3307,
  user: 'dbmaster',
  password: '1coollizard',
  database: 'prod',
});

connection.connect(function (err) {
  if (err) {
    console.log(`connectionrequest failed ${err.stack}`);
  } else {
    console.log(`db connectionrequest successful ${connection.threadId}`);
  }
});
