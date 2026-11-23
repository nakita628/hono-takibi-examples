import { OpenAPIHono } from '@hono/zod-openapi'
import { postNotQuiteCircularRoute, putCircularRoute, putNestedTestRoute } from './routes'
import {
  postNotQuiteCircularRouteHandler,
  putCircularRouteHandler,
  putNestedTestRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(putNestedTestRoute, putNestedTestRouteHandler)
  .openapi(putCircularRoute, putCircularRouteHandler)
  .openapi(postNotQuiteCircularRoute, postNotQuiteCircularRouteHandler)

export default app
