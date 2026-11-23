import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getAccountsAccountIdBankDetailsRoute,
  getAccountsAccountIdRoute,
  getAccountsRoute,
} from '../routes'

export const getAccountsRouteHandler: RouteHandler<typeof getAccountsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getAccountsAccountIdRouteHandler: RouteHandler<
  typeof getAccountsAccountIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAccountsAccountIdBankDetailsRouteHandler: RouteHandler<
  typeof getAccountsAccountIdBankDetailsRoute
> = async (c) => {
  throw new Error('Not implemented')
}
