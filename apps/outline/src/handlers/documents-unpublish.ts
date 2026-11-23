import type { RouteHandler } from '@hono/zod-openapi'
import type { postDocumentsUnpublishRoute } from '../routes'

export const postDocumentsUnpublishRouteHandler: RouteHandler<
  typeof postDocumentsUnpublishRoute
> = async (c) => {
  throw new Error('Not implemented')
}
