import type { RouteHandler } from '@hono/zod-openapi'
import type { getTransactionsRoute, getTransactionsTransactionIdRoute } from '../routes'

export const getTransactionsRouteHandler: RouteHandler<typeof getTransactionsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getTransactionsTransactionIdRouteHandler: RouteHandler<
  typeof getTransactionsTransactionIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}
