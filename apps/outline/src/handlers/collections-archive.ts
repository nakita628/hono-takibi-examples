import type { RouteHandler } from '@hono/zod-openapi'
import type { postCollectionsArchiveRoute } from '../routes'

export const postCollectionsArchiveRouteHandler: RouteHandler<
  typeof postCollectionsArchiveRoute
> = async (c) => {
  throw new Error('Not implemented')
}
