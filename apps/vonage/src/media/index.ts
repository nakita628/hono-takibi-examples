import { OpenAPIHono } from '@hono/zod-openapi'
import { deleteIdRoute, getIdInfoRoute, getRoute, putIdInfoRoute } from './routes'
import {
  deleteIdRouteHandler,
  getIdInfoRouteHandler,
  getRouteHandler,
  putIdInfoRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(getRoute, getRouteHandler)
  .openapi(deleteIdRoute, deleteIdRouteHandler)
  .openapi(getIdInfoRoute, getIdInfoRouteHandler)
  .openapi(putIdInfoRoute, putIdInfoRouteHandler)

export default app
