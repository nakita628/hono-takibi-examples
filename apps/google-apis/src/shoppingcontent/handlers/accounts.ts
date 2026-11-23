import type { RouteHandler } from '@hono/zod-openapi'
import type { getAccountsAuthinfoRoute, postAccountsBatchRoute } from '../routes'

export const getAccountsAuthinfoRouteHandler: RouteHandler<
  typeof getAccountsAuthinfoRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAccountsBatchRouteHandler: RouteHandler<typeof postAccountsBatchRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
