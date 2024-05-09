import { EQM } from "../types"
import Movie from "../models/Movie"

export const suggestionSearch: EQM = async (request, response, _next) => {
  try {
    const movies = new Movie()
    console.log(request.query)
    const result = await movies.getMoviesByTextDocument(
      request.query.q as string,
    )
    response.json(result)
  } catch (err) {
    console.error(err)
    response.json(err)
  }
}
