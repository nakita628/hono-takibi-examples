import type { RouteHandler } from '@hono/zod-openapi'
import type { postAccountHolderTransactionListRoute } from '../routes'

export const postAccountHolderTransactionListRouteHandler: RouteHandler<
  typeof postAccountHolderTransactionListRoute
> = async (c) => {
  throw new Error('Not implemented')
}
