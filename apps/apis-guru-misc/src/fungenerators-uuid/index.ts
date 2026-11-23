import { OpenAPIHono } from '@hono/zod-openapi'
import { getUuidRoute, getUuidVersionVersionRoute, postUuidRoute } from './routes'
import {
  getUuidRouteHandler,
  getUuidVersionVersionRouteHandler,
  postUuidRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(getUuidRoute, getUuidRouteHandler)
  .openapi(postUuidRoute, postUuidRouteHandler)
  .openapi(getUuidVersionVersionRoute, getUuidVersionVersionRouteHandler)

export default app
