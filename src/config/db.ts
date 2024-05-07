import pg from "pg"

const { Pool } = pg
const pool = new Pool({
  user: "searchu",
  host: "localhost",
  database: "searchdb",
  password: "searchpass",
  port: 5432,
  max: 10,
})

pool.on("error", (err) => {
  console.log("error on client", err)
  process.exit(-1)
})

export default pool
