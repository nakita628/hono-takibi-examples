import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getApiV1GenreSearchallMovieGenreTypeRoute,
  getApiV1GenreSearchMovieTitleRoute,
} from '../routes'

const app = new OpenAPIHono()

export const genreHandler = app
  .openapi(getApiV1GenreSearchMovieTitleRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1GenreSearchallMovieGenreTypeRoute, (c) => {
    throw new Error('Not implemented')
  })
