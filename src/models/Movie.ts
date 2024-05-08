import pool from "../db"
type MovieModel = {
  id: string
  title: string
  alternative_titles: string[]
  year: number
  image: string
  color: string | null
  score: number
  rating: number
  actors: string[]
  actor_facets: string[]
  genre: string[]
}

class Movie {
  public async getMoviesByTextSearch(query: string) {
    const client = await pool.connect()
    console.log(query)
    const { rows } = await client.query<MovieModel>(
      `SELECT * FROM movies WHERE title ILIKE '%' || $1 || '%' LIMIT 50`,
      [query],
    )
    client.release()
    return rows
  }
}

export default Movie
