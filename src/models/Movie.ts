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
  public async getMoviesByTextDocument(query: string) {
    const client = await pool.connect()
    const sql = /*sql*/ `SELECT title, image, score, year FROM movies WHERE document @@ plainto_tsquery($1) LIMIT 6`
    const { rows } = await client.query<MovieModel>(sql, [query])
    console.log(rows)
    client.release()
    return rows
  }
}

export default Movie
