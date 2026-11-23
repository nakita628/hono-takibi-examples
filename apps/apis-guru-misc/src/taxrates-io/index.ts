import { OpenAPIHono } from '@hono/zod-openapi'
import { getV1TaxCountrycodeRoute, getV1TaxIpRoute, getV3TaxRatesRoute } from './routes'
import {
  getV1TaxCountrycodeRouteHandler,
  getV1TaxIpRouteHandler,
  getV3TaxRatesRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(getV1TaxCountrycodeRoute, getV1TaxCountrycodeRouteHandler)
  .openapi(getV1TaxIpRoute, getV1TaxIpRouteHandler)
  .openapi(getV3TaxRatesRoute, getV3TaxRatesRouteHandler)

export default app
