import type { RouteHandler } from '@hono/zod-openapi'
import type { getAccountTransactionsRoute } from '../routes'

export const getAccountTransactionsRouteHandler: RouteHandler<
  typeof getAccountTransactionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}
