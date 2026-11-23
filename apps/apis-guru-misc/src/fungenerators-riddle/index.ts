import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteRiddleRoute,
  getRiddleRandomRoute,
  getRiddleRoute,
  getRiddleSearchRoute,
  postRiddleRoute,
  putRiddleRoute,
} from './routes'
import {
  deleteRiddleRouteHandler,
  getRiddleRandomRouteHandler,
  getRiddleRouteHandler,
  getRiddleSearchRouteHandler,
  postRiddleRouteHandler,
  putRiddleRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(deleteRiddleRoute, deleteRiddleRouteHandler)
  .openapi(getRiddleRoute, getRiddleRouteHandler)
  .openapi(postRiddleRoute, postRiddleRouteHandler)
  .openapi(putRiddleRoute, putRiddleRouteHandler)
  .openapi(getRiddleRandomRoute, getRiddleRandomRouteHandler)
  .openapi(getRiddleSearchRoute, getRiddleSearchRouteHandler)

export default app
