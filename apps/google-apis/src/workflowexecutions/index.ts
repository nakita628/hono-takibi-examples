import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getV1betaNameRoute,
  getV1betaParentExecutionsRoute,
  postV1betaNameCancelRoute,
  postV1betaParentExecutionsRoute,
} from './routes'
import {
  getV1betaNameRouteHandler,
  getV1betaParentExecutionsRouteHandler,
  postV1betaNameCancelRouteHandler,
  postV1betaParentExecutionsRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(getV1betaNameRoute, getV1betaNameRouteHandler)
  .openapi(postV1betaNameCancelRoute, postV1betaNameCancelRouteHandler)
  .openapi(getV1betaParentExecutionsRoute, getV1betaParentExecutionsRouteHandler)
  .openapi(postV1betaParentExecutionsRoute, postV1betaParentExecutionsRouteHandler)

export default app
