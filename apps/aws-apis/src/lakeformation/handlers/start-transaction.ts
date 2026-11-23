import type { RouteHandler } from '@hono/zod-openapi'
import type { postStartTransactionRoute } from '../routes'

export const postStartTransactionRouteHandler: RouteHandler<
  typeof postStartTransactionRoute
> = async (c) => {
  throw new Error('Not implemented')
}
