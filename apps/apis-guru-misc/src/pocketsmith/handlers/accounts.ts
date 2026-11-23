import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteAccountsIdRoute,
  getAccountsIdRoute,
  getAccountsIdTransactionsRoute,
  putAccountsIdRoute,
} from '../routes'

export const deleteAccountsIdRouteHandler: RouteHandler<typeof deleteAccountsIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getAccountsIdRouteHandler: RouteHandler<typeof getAccountsIdRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const putAccountsIdRouteHandler: RouteHandler<typeof putAccountsIdRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getAccountsIdTransactionsRouteHandler: RouteHandler<
  typeof getAccountsIdTransactionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}
