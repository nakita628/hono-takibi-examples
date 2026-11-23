import { OpenAPIHono } from '@hono/zod-openapi'
import { getForecastRoute, getProtectionRoute, getUvRoute } from './routes'
import { getForecastRouteHandler, getProtectionRouteHandler, getUvRouteHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(getForecastRoute, getForecastRouteHandler)
  .openapi(getProtectionRoute, getProtectionRouteHandler)
  .openapi(getUvRoute, getUvRouteHandler)

export default app
