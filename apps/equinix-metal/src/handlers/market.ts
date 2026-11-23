import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getMarketSpotPricesHistoryRoute,
  getMarketSpotPricesMetrosRoute,
  getMarketSpotPricesRoute,
} from '../routes'

export const getMarketSpotPricesRouteHandler: RouteHandler<
  typeof getMarketSpotPricesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getMarketSpotPricesHistoryRouteHandler: RouteHandler<
  typeof getMarketSpotPricesHistoryRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getMarketSpotPricesMetrosRouteHandler: RouteHandler<
  typeof getMarketSpotPricesMetrosRoute
> = async (c) => {
  throw new Error('Not implemented')
}
