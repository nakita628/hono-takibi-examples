import type { RouteHandler } from '@hono/zod-openapi'
import type { postCalculateNthRootRoute } from '../routes'

export const postCalculateNthRootRouteHandler: RouteHandler<
  typeof postCalculateNthRootRoute
> = async (c) => {
  throw new Error('Not implemented')
}
