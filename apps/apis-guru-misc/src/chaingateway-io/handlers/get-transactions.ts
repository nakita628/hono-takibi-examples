import type { RouteHandler } from '@hono/zod-openapi'
import type { postGetTransactionsRoute } from '../routes'

export const postGetTransactionsRouteHandler: RouteHandler<
  typeof postGetTransactionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}
