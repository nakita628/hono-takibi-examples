import { OpenAPIHono } from '@hono/zod-openapi'
import { getGenresMovieRoute, getGenresTvRoute } from '../routes'

const app = new OpenAPIHono()

export const genresHandler = app
  .openapi(getGenresMovieRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGenresTvRoute, (c) => {
    throw new Error('Not implemented')
  })
