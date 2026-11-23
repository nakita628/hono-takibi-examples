import type { RouteHandler } from '@hono/zod-openapi'
import type { postDocumentsDeletedRoute } from '../routes'

export const postDocumentsDeletedRouteHandler: RouteHandler<
  typeof postDocumentsDeletedRoute
> = async (c) => {
  throw new Error('Not implemented')
}
