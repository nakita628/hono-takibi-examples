import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getPendingTransactionsPendingTransactionIdRoute,
  getPendingTransactionsRoute,
} from '../routes'

export const getPendingTransactionsRouteHandler: RouteHandler<
  typeof getPendingTransactionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getPendingTransactionsPendingTransactionIdRouteHandler: RouteHandler<
  typeof getPendingTransactionsPendingTransactionIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}
