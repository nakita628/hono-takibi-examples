import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getAnythingStringsRoute,
  postAnythingStringsRoute,
  putAnythingStringsRoute,
} from './routes'
import {
  getAnythingStringsRouteHandler,
  postAnythingStringsRouteHandler,
  putAnythingStringsRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(postAnythingStringsRoute, postAnythingStringsRouteHandler)
  .openapi(getAnythingStringsRoute, getAnythingStringsRouteHandler)
  .openapi(putAnythingStringsRoute, putAnythingStringsRouteHandler)

export default app
