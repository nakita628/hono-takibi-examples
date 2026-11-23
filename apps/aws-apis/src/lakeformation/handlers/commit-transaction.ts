import type { RouteHandler } from '@hono/zod-openapi'
import type { postCommitTransactionRoute } from '../routes'

export const postCommitTransactionRouteHandler: RouteHandler<
  typeof postCommitTransactionRoute
> = async (c) => {
  throw new Error('Not implemented')
}
