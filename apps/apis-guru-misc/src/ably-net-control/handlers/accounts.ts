import type { RouteHandler } from '@hono/zod-openapi'
import type { getAccountsAccountIdAppsRoute, postAccountsAccountIdAppsRoute } from '../routes'

export const getAccountsAccountIdAppsRouteHandler: RouteHandler<
  typeof getAccountsAccountIdAppsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAccountsAccountIdAppsRouteHandler: RouteHandler<
  typeof postAccountsAccountIdAppsRoute
> = async (c) => {
  throw new Error('Not implemented')
}
