import type { RouteHandler } from '@hono/zod-openapi'
import type { postDocumentsAddUserRoute } from '../routes'

export const postDocumentsAddUserRouteHandler: RouteHandler<
  typeof postDocumentsAddUserRoute
> = async (c) => {
  throw new Error('Not implemented')
}
