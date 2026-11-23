import type { RouteHandler } from '@hono/zod-openapi'
import type { postDocumentsArchivedRoute } from '../routes'

export const postDocumentsArchivedRouteHandler: RouteHandler<
  typeof postDocumentsArchivedRoute
> = async (c) => {
  throw new Error('Not implemented')
}
