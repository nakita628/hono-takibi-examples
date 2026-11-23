import type { RouteHandler } from '@hono/zod-openapi'
import type { postDocumentsRemoveGroupRoute } from '../routes'

export const postDocumentsRemoveGroupRouteHandler: RouteHandler<
  typeof postDocumentsRemoveGroupRoute
> = async (c) => {
  throw new Error('Not implemented')
}
