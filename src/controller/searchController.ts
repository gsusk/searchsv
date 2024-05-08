import { EQM } from "../types"
import db from "../db"
import Movie from "../models/Movie"

export const suggestionSearch: EQM = async (request, response, next) => {
  try {
    const movies = new Movie()
    console.log(request.query)
    const result = await movies.getMoviesByTextSearch(request.query.q as string)
    console.log(result)
    response.json(result)
  } catch (err) {
    console.error(err)
    response.json(err)
  }
}
