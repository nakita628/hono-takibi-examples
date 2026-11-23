import { OpenAPIHono } from '@hono/zod-openapi'
import { deleteIdRoute, getIdRoute, getRoute, postRoute, putIdRoute } from './routes'
import {
  deleteIdRouteHandler,
  getIdRouteHandler,
  getRouteHandler,
  postRouteHandler,
  putIdRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(getRoute, getRouteHandler)
  .openapi(postRoute, postRouteHandler)
  .openapi(deleteIdRoute, deleteIdRouteHandler)
  .openapi(getIdRoute, getIdRouteHandler)
  .openapi(putIdRoute, putIdRouteHandler)

export default app
