import { OpenAPIHono } from '@hono/zod-openapi'
import { deletePathRoute, getPathRoute, getRoute, headPathRoute, putPathRoute } from './routes'
import {
  deletePathRouteHandler,
  getPathRouteHandler,
  getRouteHandler,
  headPathRouteHandler,
  putPathRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(deletePathRoute, deletePathRouteHandler)
  .openapi(headPathRoute, headPathRouteHandler)
  .openapi(getPathRoute, getPathRouteHandler)
  .openapi(putPathRoute, putPathRouteHandler)
  .openapi(getRoute, getRouteHandler)

export default app
