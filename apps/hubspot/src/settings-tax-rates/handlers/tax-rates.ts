import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getTaxRates202609TaxRatesRoute,
  getTaxRates202609TaxRatesTaxRateGroupIdRoute,
} from '../routes'

export const getTaxRates202609TaxRatesRouteHandler: RouteHandler<
  typeof getTaxRates202609TaxRatesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getTaxRates202609TaxRatesTaxRateGroupIdRouteHandler: RouteHandler<
  typeof getTaxRates202609TaxRatesTaxRateGroupIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}
