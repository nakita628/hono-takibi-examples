import type { RouteHandler } from '@hono/zod-openapi'
import type { postListImageBuildVersionsRoute } from '../routes'

export const postListImageBuildVersionsRouteHandler: RouteHandler<
  typeof postListImageBuildVersionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}
