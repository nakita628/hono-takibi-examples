import { OpenAPIHono } from '@hono/zod-openapi'
import { getMoviesRoute, postMoviesRoute } from '../routes'

const app = new OpenAPIHono()

export const moviesHandler = app
  .openapi(getMoviesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMoviesRoute, (c) => {
    throw new Error('Not implemented')
  })
