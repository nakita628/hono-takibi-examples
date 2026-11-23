import type { RouteHandler } from '@hono/zod-openapi'
import type { getAdminTeamsAdminsListRoute } from '../routes'

export const getAdminTeamsAdminsListRouteHandler: RouteHandler<
  typeof getAdminTeamsAdminsListRoute
> = async (c) => {
  throw new Error('Not implemented')
}
