import type { RouteHandler } from '@hono/zod-openapi'
import type { postUngroupResourcesRoute } from '../routes'

export const postUngroupResourcesRouteHandler: RouteHandler<
  typeof postUngroupResourcesRoute
> = async (c) => {
  throw new Error('Not implemented')
}
