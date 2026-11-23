import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getApiAuthIntrospectRoute,
  postApiV1ItemusagesRoute,
  postApiV1SigninattemptsRoute,
} from './routes'
import {
  getApiAuthIntrospectRouteHandler,
  postApiV1ItemusagesRouteHandler,
  postApiV1SigninattemptsRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(getApiAuthIntrospectRoute, getApiAuthIntrospectRouteHandler)
  .openapi(postApiV1ItemusagesRoute, postApiV1ItemusagesRouteHandler)
  .openapi(postApiV1SigninattemptsRoute, postApiV1SigninattemptsRouteHandler)

export default app
