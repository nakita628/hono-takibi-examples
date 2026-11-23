import type { RouteHandler } from '@hono/zod-openapi'
import type { postDebitAccountHolderRoute } from '../routes'

export const postDebitAccountHolderRouteHandler: RouteHandler<
  typeof postDebitAccountHolderRoute
> = async (c) => {
  throw new Error('Not implemented')
}
