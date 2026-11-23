import type { RouteHandler } from '@hono/zod-openapi'
import type { getAdminInviteRequestsListRoute } from '../routes'

export const getAdminInviteRequestsListRouteHandler: RouteHandler<
  typeof getAdminInviteRequestsListRoute
> = async (c) => {
  throw new Error('Not implemented')
}
