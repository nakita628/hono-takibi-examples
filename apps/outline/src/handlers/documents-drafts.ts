import type { RouteHandler } from '@hono/zod-openapi'
import type { postDocumentsDraftsRoute } from '../routes'

export const postDocumentsDraftsRouteHandler: RouteHandler<
  typeof postDocumentsDraftsRoute
> = async (c) => {
  throw new Error('Not implemented')
}
