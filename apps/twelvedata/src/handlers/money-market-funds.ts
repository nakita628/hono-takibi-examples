import type { RouteHandler } from '@hono/zod-openapi'
import type { getMoneyMarketFundsListRoute, getMoneyMarketFundsWorldRoute } from '../routes'

export const getMoneyMarketFundsListRouteHandler: RouteHandler<
  typeof getMoneyMarketFundsListRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getMoneyMarketFundsWorldRouteHandler: RouteHandler<
  typeof getMoneyMarketFundsWorldRoute
> = async (c) => {
  throw new Error('Not implemented')
}
