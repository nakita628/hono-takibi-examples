import type { RouteHandler } from '@hono/zod-openapi'
import type { postCollectionsExportAllRoute } from '../routes'

export const postCollectionsExportAllRouteHandler: RouteHandler<
  typeof postCollectionsExportAllRoute
> = async (c) => {
  throw new Error('Not implemented')
}
