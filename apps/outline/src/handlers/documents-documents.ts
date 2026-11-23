import type { RouteHandler } from '@hono/zod-openapi'
import type { postDocumentsDocumentsRoute } from '../routes'

export const postDocumentsDocumentsRouteHandler: RouteHandler<
  typeof postDocumentsDocumentsRoute
> = async (c) => {
  throw new Error('Not implemented')
}
