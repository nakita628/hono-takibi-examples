import type { RouteHandler } from '@hono/zod-openapi'
import type { getOrderTransactionListJsonRoute } from '../routes'

export const getOrderTransactionListJsonRouteHandler: RouteHandler<
  typeof getOrderTransactionListJsonRoute
> = async (c) => {
  throw new Error('Not implemented')
}
