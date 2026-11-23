import type { RouteHandler } from '@hono/zod-openapi'
import type { postCollectionsExportRoute } from '../routes'

export const postCollectionsExportRouteHandler: RouteHandler<
  typeof postCollectionsExportRoute
> = async (c) => {
  throw new Error('Not implemented')
}
