import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionGetReservedInstancesExchangeQuoteRoute,
  postActionGetReservedInstancesExchangeQuoteRoute,
} from '../routes'

export const getActionGetReservedInstancesExchangeQuoteRouteHandler: RouteHandler<
  typeof getActionGetReservedInstancesExchangeQuoteRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionGetReservedInstancesExchangeQuoteRouteHandler: RouteHandler<
  typeof postActionGetReservedInstancesExchangeQuoteRoute
> = async (c) => {
  throw new Error('Not implemented')
}
