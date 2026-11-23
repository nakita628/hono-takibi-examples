import type { RouteHandler } from '@hono/zod-openapi'
import type { postCheckAccountHolderRoute } from '../routes'

export const postCheckAccountHolderRouteHandler: RouteHandler<
  typeof postCheckAccountHolderRoute
> = async (c) => {
  throw new Error('Not implemented')
}
