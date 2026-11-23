import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getAccountsAccountIdTransactionsRoute,
  getAccountsIdRoute,
  getAccountsRoute,
} from '../routes'

export const getAccountsRouteHandler: RouteHandler<typeof getAccountsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getAccountsAccountIdTransactionsRouteHandler: RouteHandler<
  typeof getAccountsAccountIdTransactionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAccountsIdRouteHandler: RouteHandler<typeof getAccountsIdRoute> = async (c) => {
  throw new Error('Not implemented')
}
