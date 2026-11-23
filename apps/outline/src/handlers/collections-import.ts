import type { RouteHandler } from '@hono/zod-openapi'
import type { postCollectionsImportRoute } from '../routes'

export const postCollectionsImportRouteHandler: RouteHandler<
  typeof postCollectionsImportRoute
> = async (c) => {
  throw new Error('Not implemented')
}
