import express from "express"
import cors from "cors"
import helmet from "helmet"
import apiRouter from "./routes/index.routes"

const app = express()

app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  }),
)

app.use(helmet())
app.use(express.json())
app.use("/api", apiRouter)

app.listen(8000, () => {
  console.log("server is running on port 8000")
})
