import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteTaxRatesTaxRateIdRoute,
  getTaxRatesRoute,
  getTaxRatesTaxRateIdRoute,
  patchTaxRatesTaxRateIdRoute,
  postTaxRatesRoute,
} from '../routes'

export const postTaxRatesRouteHandler: RouteHandler<typeof postTaxRatesRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getTaxRatesRouteHandler: RouteHandler<typeof getTaxRatesRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getTaxRatesTaxRateIdRouteHandler: RouteHandler<
  typeof getTaxRatesTaxRateIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchTaxRatesTaxRateIdRouteHandler: RouteHandler<
  typeof patchTaxRatesTaxRateIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteTaxRatesTaxRateIdRouteHandler: RouteHandler<
  typeof deleteTaxRatesTaxRateIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}
