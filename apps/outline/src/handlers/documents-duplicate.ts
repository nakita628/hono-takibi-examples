import type { RouteHandler } from '@hono/zod-openapi'
import type { postDocumentsDuplicateRoute } from '../routes'

export const postDocumentsDuplicateRouteHandler: RouteHandler<
  typeof postDocumentsDuplicateRoute
> = async (c) => {
  throw new Error('Not implemented')
}
