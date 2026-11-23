import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteTransactionsTransactionIdRoute,
  getTransactionsRoute,
  getTransactionsTransactionIdRoute,
  postTransactionsTransactionIdRoute,
} from '../routes'

export const getTransactionsRouteHandler: RouteHandler<typeof getTransactionsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteTransactionsTransactionIdRouteHandler: RouteHandler<
  typeof deleteTransactionsTransactionIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getTransactionsTransactionIdRouteHandler: RouteHandler<
  typeof getTransactionsTransactionIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postTransactionsTransactionIdRouteHandler: RouteHandler<
  typeof postTransactionsTransactionIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}
