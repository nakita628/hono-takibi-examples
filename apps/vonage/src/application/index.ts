import { OpenAPIHono } from '@hono/zod-openapi'
import { deleteAppIdRoute, getAppIdRoute, getRoute, postRoute, putAppIdRoute } from './routes'
import {
  deleteAppIdRouteHandler,
  getAppIdRouteHandler,
  getRouteHandler,
  postRouteHandler,
  putAppIdRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(getRoute, getRouteHandler)
  .openapi(postRoute, postRouteHandler)
  .openapi(deleteAppIdRoute, deleteAppIdRouteHandler)
  .openapi(getAppIdRoute, getAppIdRouteHandler)
  .openapi(putAppIdRoute, putAppIdRouteHandler)

export default app
