import type { RouteHandler } from '@hono/zod-openapi'
import type { postCommentsUnresolveRoute } from '../routes'

export const postCommentsUnresolveRouteHandler: RouteHandler<
  typeof postCommentsUnresolveRoute
> = async (c) => {
  throw new Error('Not implemented')
}
