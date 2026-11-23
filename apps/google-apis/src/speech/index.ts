import { OpenAPIHono } from '@hono/zod-openapi'
import { getV2beta1NameOperationsRoute, getV2beta1NameRoute } from './routes'
import { getV2beta1NameOperationsRouteHandler, getV2beta1NameRouteHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(getV2beta1NameRoute, getV2beta1NameRouteHandler)
  .openapi(getV2beta1NameOperationsRoute, getV2beta1NameOperationsRouteHandler)

export default app
