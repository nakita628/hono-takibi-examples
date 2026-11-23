import type { RouteHandler } from '@hono/zod-openapi'
import type { postCancelTransactionRoute } from '../routes'

export const postCancelTransactionRouteHandler: RouteHandler<
  typeof postCancelTransactionRoute
> = async (c) => {
  throw new Error('Not implemented')
}
