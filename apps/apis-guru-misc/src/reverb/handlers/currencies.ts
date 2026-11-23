import type { RouteHandler } from '@hono/zod-openapi'
import type { getCurrenciesDisplayRoute, getCurrenciesListingRoute } from '../routes'

export const getCurrenciesDisplayRouteHandler: RouteHandler<
  typeof getCurrenciesDisplayRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getCurrenciesListingRouteHandler: RouteHandler<
  typeof getCurrenciesListingRoute
> = async (c) => {
  throw new Error('Not implemented')
}
