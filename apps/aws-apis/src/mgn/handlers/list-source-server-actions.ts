import type { RouteHandler } from '@hono/zod-openapi'
import type { postListSourceServerActionsRoute } from '../routes'

export const postListSourceServerActionsRouteHandler: RouteHandler<
  typeof postListSourceServerActionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}
