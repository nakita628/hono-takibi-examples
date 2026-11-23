import type { RouteHandler } from '@hono/zod-openapi'
import type { postCollectionsListRoute } from '../routes'

export const postCollectionsListRouteHandler: RouteHandler<
  typeof postCollectionsListRoute
> = async (c) => {
  throw new Error('Not implemented')
}
