import { OpenAPIHono } from '@hono/zod-openapi'
import { getMovieRoute, getMovieSearchRoute, postMovieSearchRoute } from '../routes'

const app = new OpenAPIHono()

export const movieHandler = app
  .openapi(getMovieRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMovieSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMovieSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
