import type { RouteHandler } from '@hono/zod-openapi'
import type { getProjectsPortalIdRoute } from '../routes'

export const getProjectsPortalIdRouteHandler: RouteHandler<
  typeof getProjectsPortalIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}
