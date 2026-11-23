import { OpenAPIHono } from '@hono/zod-openapi'
import { getMoviesRoute, postMoviesRoute } from './routes'
import { getMoviesRouteHandler, postMoviesRouteHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(getMoviesRoute, getMoviesRouteHandler)
  .openapi(postMoviesRoute, postMoviesRouteHandler)

export default app
