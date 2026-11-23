import { OpenAPIHono } from '@hono/zod-openapi'
import { getOpenapiJsonRoute, getOpenapiYamlRoute, getServerRoute } from './routes'
import {
  getOpenapiJsonRouteHandler,
  getOpenapiYamlRouteHandler,
  getServerRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(getServerRoute, getServerRouteHandler)
  .openapi(getOpenapiJsonRoute, getOpenapiJsonRouteHandler)
  .openapi(getOpenapiYamlRoute, getOpenapiYamlRouteHandler)

export default app
