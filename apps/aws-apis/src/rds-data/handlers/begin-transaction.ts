import type { RouteHandler } from '@hono/zod-openapi'
import type { postBeginTransactionRoute } from '../routes'

export const postBeginTransactionRouteHandler: RouteHandler<
  typeof postBeginTransactionRoute
> = async (c) => {
  throw new Error('Not implemented')
}
