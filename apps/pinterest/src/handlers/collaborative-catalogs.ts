import type { RouteHandler } from '@hono/zod-openapi'
import type { postCollaborativeCatalogsRoute } from '../routes'

export const postCollaborativeCatalogsRouteHandler: RouteHandler<
  typeof postCollaborativeCatalogsRoute
> = async (c) => {
  throw new Error('Not implemented')
}
