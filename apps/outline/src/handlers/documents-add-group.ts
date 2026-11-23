import type { RouteHandler } from '@hono/zod-openapi'
import type { postDocumentsAddGroupRoute } from '../routes'

export const postDocumentsAddGroupRouteHandler: RouteHandler<
  typeof postDocumentsAddGroupRoute
> = async (c) => {
  throw new Error('Not implemented')
}
