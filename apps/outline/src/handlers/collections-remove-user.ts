import type { RouteHandler } from '@hono/zod-openapi'
import type { postCollectionsRemoveUserRoute } from '../routes'

export const postCollectionsRemoveUserRouteHandler: RouteHandler<
  typeof postCollectionsRemoveUserRoute
> = async (c) => {
  throw new Error('Not implemented')
}
