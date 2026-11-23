import type { RouteHandler } from '@hono/zod-openapi'
import type { postAccountsBalanceGetRoute, postAccountsGetRoute } from '../routes'

export const postAccountsBalanceGetRouteHandler: RouteHandler<
  typeof postAccountsBalanceGetRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAccountsGetRouteHandler: RouteHandler<typeof postAccountsGetRoute> = async (c) => {
  throw new Error('Not implemented')
}
