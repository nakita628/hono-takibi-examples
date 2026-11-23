import type { RouteHandler } from '@hono/zod-openapi'
import type { postVoidTransactionRoute } from '../routes'

export const postVoidTransactionRouteHandler: RouteHandler<
  typeof postVoidTransactionRoute
> = async (c) => {
  throw new Error('Not implemented')
}
