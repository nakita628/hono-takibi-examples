import type { RouteHandler } from '@hono/zod-openapi'
import type { getOrderFinancialStatusListJsonRoute } from '../routes'

export const getOrderFinancialStatusListJsonRouteHandler: RouteHandler<
  typeof getOrderFinancialStatusListJsonRoute
> = async (c) => {
  throw new Error('Not implemented')
}
