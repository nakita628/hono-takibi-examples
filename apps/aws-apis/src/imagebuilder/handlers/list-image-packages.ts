import type { RouteHandler } from '@hono/zod-openapi'
import type { postListImagePackagesRoute } from '../routes'

export const postListImagePackagesRouteHandler: RouteHandler<
  typeof postListImagePackagesRoute
> = async (c) => {
  throw new Error('Not implemented')
}
