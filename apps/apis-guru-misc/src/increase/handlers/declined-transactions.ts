import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getDeclinedTransactionsDeclinedTransactionIdRoute,
  getDeclinedTransactionsRoute,
} from '../routes'

export const getDeclinedTransactionsRouteHandler: RouteHandler<
  typeof getDeclinedTransactionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getDeclinedTransactionsDeclinedTransactionIdRouteHandler: RouteHandler<
  typeof getDeclinedTransactionsDeclinedTransactionIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}
