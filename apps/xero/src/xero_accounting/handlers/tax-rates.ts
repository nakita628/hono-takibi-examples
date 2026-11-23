import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getTaxRatesRoute,
  getTaxRatesTaxTypeRoute,
  postTaxRatesRoute,
  putTaxRatesRoute,
} from '../routes'

export const getTaxRatesRouteHandler: RouteHandler<typeof getTaxRatesRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const putTaxRatesRouteHandler: RouteHandler<typeof putTaxRatesRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postTaxRatesRouteHandler: RouteHandler<typeof postTaxRatesRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getTaxRatesTaxTypeRouteHandler: RouteHandler<typeof getTaxRatesTaxTypeRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
