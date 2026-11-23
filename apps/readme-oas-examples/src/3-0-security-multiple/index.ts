import { OpenAPIHono } from '@hono/zod-openapi'
import {
  postAnythingAndOrRoute,
  postAnythingAndRoute,
  postAnythingManyAndOrRoute,
  postAnythingOrRoute,
} from './routes'
import {
  postAnythingAndOrRouteHandler,
  postAnythingAndRouteHandler,
  postAnythingManyAndOrRouteHandler,
  postAnythingOrRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(postAnythingAndRoute, postAnythingAndRouteHandler)
  .openapi(postAnythingOrRoute, postAnythingOrRouteHandler)
  .openapi(postAnythingAndOrRoute, postAnythingAndOrRouteHandler)
  .openapi(postAnythingManyAndOrRoute, postAnythingManyAndOrRouteHandler)

export default app
