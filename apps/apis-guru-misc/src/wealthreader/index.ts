import { OpenAPIHono } from '@hono/zod-openapi'
import { getEntitiesRoute, getErrorCodesRoute, postEntitiesRoute } from './routes'
import {
  getEntitiesRouteHandler,
  getErrorCodesRouteHandler,
  postEntitiesRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(getEntitiesRoute, getEntitiesRouteHandler)
  .openapi(postEntitiesRoute, postEntitiesRouteHandler)
  .openapi(getErrorCodesRoute, getErrorCodesRouteHandler)

export default app
