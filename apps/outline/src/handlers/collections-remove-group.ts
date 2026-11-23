import type { RouteHandler } from '@hono/zod-openapi'
import type { postCollectionsRemoveGroupRoute } from '../routes'

export const postCollectionsRemoveGroupRouteHandler: RouteHandler<
  typeof postCollectionsRemoveGroupRoute
> = async (c) => {
  throw new Error('Not implemented')
}
