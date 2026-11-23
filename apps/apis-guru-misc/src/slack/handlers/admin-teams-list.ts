import type { RouteHandler } from '@hono/zod-openapi'
import type { getAdminTeamsListRoute } from '../routes'

export const getAdminTeamsListRouteHandler: RouteHandler<typeof getAdminTeamsListRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
