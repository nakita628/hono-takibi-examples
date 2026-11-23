import type { RouteHandler } from '@hono/zod-openapi'
import type { postRollbackTransactionRoute } from '../routes'

export const postRollbackTransactionRouteHandler: RouteHandler<
  typeof postRollbackTransactionRoute
> = async (c) => {
  throw new Error('Not implemented')
}
