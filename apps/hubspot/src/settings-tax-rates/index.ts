import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getTaxRates202609TaxRatesRoute,
  getTaxRates202609TaxRatesTaxRateGroupIdRoute,
} from './routes'
import {
  getTaxRates202609TaxRatesRouteHandler,
  getTaxRates202609TaxRatesTaxRateGroupIdRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(getTaxRates202609TaxRatesRoute, getTaxRates202609TaxRatesRouteHandler)
  .openapi(
    getTaxRates202609TaxRatesTaxRateGroupIdRoute,
    getTaxRates202609TaxRatesTaxRateGroupIdRouteHandler,
  )

export default app
