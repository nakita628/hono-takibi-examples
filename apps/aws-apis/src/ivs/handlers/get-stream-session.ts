import type { RouteHandler } from '@hono/zod-openapi'
import type { postGetStreamSessionRoute } from '../routes'

export const postGetStreamSessionRouteHandler: RouteHandler<
  typeof postGetStreamSessionRoute
> = async (c) => {
  throw new Error('Not implemented')
}
