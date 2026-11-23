import type { RouteHandler } from '@hono/zod-openapi'
import type { postCollectionsDeleteRoute } from '../routes'

export const postCollectionsDeleteRouteHandler: RouteHandler<
  typeof postCollectionsDeleteRoute
> = async (c) => {
  throw new Error('Not implemented')
}
