import type { RouteHandler } from '@hono/zod-openapi'
import type { postCollectionsInfoRoute } from '../routes'

export const postCollectionsInfoRouteHandler: RouteHandler<
  typeof postCollectionsInfoRoute
> = async (c) => {
  throw new Error('Not implemented')
}
