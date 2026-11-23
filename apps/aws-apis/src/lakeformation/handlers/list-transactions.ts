import type { RouteHandler } from '@hono/zod-openapi'
import type { postListTransactionsRoute } from '../routes'

export const postListTransactionsRouteHandler: RouteHandler<
  typeof postListTransactionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}
