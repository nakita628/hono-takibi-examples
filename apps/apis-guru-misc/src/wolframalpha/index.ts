import { OpenAPIHono } from '@hono/zod-openapi'
import { getApiV1CloudPluginRoute, getApiV1LlmApiRoute } from './routes'
import { getApiV1CloudPluginRouteHandler, getApiV1LlmApiRouteHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(getApiV1CloudPluginRoute, getApiV1CloudPluginRouteHandler)
  .openapi(getApiV1LlmApiRoute, getApiV1LlmApiRouteHandler)

export default app
