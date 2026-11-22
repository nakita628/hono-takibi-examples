import { OpenAPIHono } from '@hono/zod-openapi'
import { getApiV3ImportlistMovieRoute, postApiV3ImportlistMovieRoute } from '../routes'

const app = new OpenAPIHono()

export const importListMoviesHandler = app
  .openapi(getApiV3ImportlistMovieRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV3ImportlistMovieRoute, (c) => {
    throw new Error('Not implemented')
  })
