import type { RouteHandler } from '@hono/zod-openapi'
import type { getAccountsAccountIdRoute, getAccountsRoute, postAccountsRoute } from '../routes'

export const getAccountsRouteHandler: RouteHandler<typeof getAccountsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postAccountsRouteHandler: RouteHandler<typeof postAccountsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getAccountsAccountIdRouteHandler: RouteHandler<
  typeof getAccountsAccountIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}
