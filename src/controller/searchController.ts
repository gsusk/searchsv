import { EQM } from "../types"
import db from "../db"

export const suggestionSearch: EQM = async (request, response, next) => {
  const result = await db.query("SELECT NOW()")
  console.log(result)
  response.json(result.rows)
}
