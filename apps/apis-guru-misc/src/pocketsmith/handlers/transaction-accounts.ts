import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getTransactionAccountsIdRoute,
  getTransactionAccountsIdTransactionsRoute,
  postTransactionAccountsIdTransactionsRoute,
  putTransactionAccountsIdRoute,
} from '../routes'

export const getTransactionAccountsIdRouteHandler: RouteHandler<
  typeof getTransactionAccountsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putTransactionAccountsIdRouteHandler: RouteHandler<
  typeof putTransactionAccountsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getTransactionAccountsIdTransactionsRouteHandler: RouteHandler<
  typeof getTransactionAccountsIdTransactionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postTransactionAccountsIdTransactionsRouteHandler: RouteHandler<
  typeof postTransactionAccountsIdTransactionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}
