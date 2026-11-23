import type { RouteHandler } from '@hono/zod-openapi'
import type { postCollectionsDocumentsRoute } from '../routes'

export const postCollectionsDocumentsRouteHandler: RouteHandler<
  typeof postCollectionsDocumentsRoute
> = async (c) => {
  throw new Error('Not implemented')
}
