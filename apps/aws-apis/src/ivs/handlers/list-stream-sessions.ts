import type { RouteHandler } from '@hono/zod-openapi'
import type { postListStreamSessionsRoute } from '../routes'

export const postListStreamSessionsRouteHandler: RouteHandler<
  typeof postListStreamSessionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}
