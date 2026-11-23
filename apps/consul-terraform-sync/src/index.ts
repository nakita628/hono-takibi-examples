import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV1TasksNameRoute,
  getV1HealthRoute,
  getV1StatusClusterRoute,
  getV1TasksNameRoute,
  getV1TasksRoute,
  postV1TasksRoute,
} from './routes'
import {
  deleteV1TasksNameRouteHandler,
  getV1HealthRouteHandler,
  getV1StatusClusterRouteHandler,
  getV1TasksNameRouteHandler,
  getV1TasksRouteHandler,
  postV1TasksRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(getV1StatusClusterRoute, getV1StatusClusterRouteHandler)
  .openapi(getV1HealthRoute, getV1HealthRouteHandler)
  .openapi(postV1TasksRoute, postV1TasksRouteHandler)
  .openapi(getV1TasksRoute, getV1TasksRouteHandler)
  .openapi(deleteV1TasksNameRoute, deleteV1TasksNameRouteHandler)
  .openapi(getV1TasksNameRoute, getV1TasksNameRouteHandler)

export default app
