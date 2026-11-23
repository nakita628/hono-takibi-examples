import type { RouteHandler } from '@hono/zod-openapi'
import type { getInsiderTransactionsRoute } from '../routes'

export const getInsiderTransactionsRouteHandler: RouteHandler<
  typeof getInsiderTransactionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}
