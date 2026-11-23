import type { RouteHandler } from '@hono/zod-openapi'
import type { postDocumentsRemoveUserRoute } from '../routes'

export const postDocumentsRemoveUserRouteHandler: RouteHandler<
  typeof postDocumentsRemoveUserRoute
> = async (c) => {
  throw new Error('Not implemented')
}
