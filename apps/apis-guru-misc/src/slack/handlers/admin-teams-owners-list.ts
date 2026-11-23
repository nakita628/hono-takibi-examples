import type { RouteHandler } from '@hono/zod-openapi'
import type { getAdminTeamsOwnersListRoute } from '../routes'

export const getAdminTeamsOwnersListRouteHandler: RouteHandler<
  typeof getAdminTeamsOwnersListRoute
> = async (c) => {
  throw new Error('Not implemented')
}
