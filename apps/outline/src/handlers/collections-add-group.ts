import type { RouteHandler } from '@hono/zod-openapi'
import type { postCollectionsAddGroupRoute } from '../routes'

export const postCollectionsAddGroupRouteHandler: RouteHandler<
  typeof postCollectionsAddGroupRoute
> = async (c) => {
  throw new Error('Not implemented')
}
