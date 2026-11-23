import type { RouteHandler } from '@hono/zod-openapi'
import type { postCollectionsCreateRoute } from '../routes'

export const postCollectionsCreateRouteHandler: RouteHandler<
  typeof postCollectionsCreateRoute
> = async (c) => {
  throw new Error('Not implemented')
}
