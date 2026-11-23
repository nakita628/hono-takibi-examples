import type { RouteHandler } from '@hono/zod-openapi'
import type { postCommentsResolveRoute } from '../routes'

export const postCommentsResolveRouteHandler: RouteHandler<
  typeof postCommentsResolveRoute
> = async (c) => {
  throw new Error('Not implemented')
}
