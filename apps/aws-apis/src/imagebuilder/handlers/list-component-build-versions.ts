import type { RouteHandler } from '@hono/zod-openapi'
import type { postListComponentBuildVersionsRoute } from '../routes'

export const postListComponentBuildVersionsRouteHandler: RouteHandler<
  typeof postListComponentBuildVersionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}
