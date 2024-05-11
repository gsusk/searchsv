import { EQM } from "../types"
import Movie from "../models/Movie"

export const suggestionSearch: EQM = async (request, response, _next) => {
  try {
    const { q } = request.query
    if (!q) return response.json([])
    const movies = new Movie()
    const result = await movies.getMoviesByTextDocument(q)
    response.json(result)
  } catch (err) {
    console.error(err)
    response.json(err)
  }
}
