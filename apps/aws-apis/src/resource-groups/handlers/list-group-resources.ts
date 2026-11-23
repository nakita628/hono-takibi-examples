import type { RouteHandler } from '@hono/zod-openapi'
import type { postListGroupResourcesRoute } from '../routes'

export const postListGroupResourcesRouteHandler: RouteHandler<
  typeof postListGroupResourcesRoute
> = async (c) => {
  throw new Error('Not implemented')
}
