import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteQueryQueryIdRoute,
  getQueriesQueryIdReportsRoute,
  getQueriesRoute,
  getQueryQueryIdRoute,
  postQueryQueryIdRoute,
  postQueryRoute,
} from './routes'
import {
  deleteQueryQueryIdRouteHandler,
  getQueriesQueryIdReportsRouteHandler,
  getQueriesRouteHandler,
  getQueryQueryIdRouteHandler,
  postQueryQueryIdRouteHandler,
  postQueryRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(getQueriesRoute, getQueriesRouteHandler)
  .openapi(getQueriesQueryIdReportsRoute, getQueriesQueryIdReportsRouteHandler)
  .openapi(postQueryRoute, postQueryRouteHandler)
  .openapi(deleteQueryQueryIdRoute, deleteQueryQueryIdRouteHandler)
  .openapi(getQueryQueryIdRoute, getQueryQueryIdRouteHandler)
  .openapi(postQueryQueryIdRoute, postQueryQueryIdRouteHandler)

export default app
