import type { RouteHandler } from '@hono/zod-openapi'
import type { postDocumentsViewedRoute } from '../routes'

export const postDocumentsViewedRouteHandler: RouteHandler<
  typeof postDocumentsViewedRoute
> = async (c) => {
  throw new Error('Not implemented')
}
