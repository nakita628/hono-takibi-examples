import type { RouteHandler } from '@hono/zod-openapi'
import type { getAdminInviteRequestsApprovedListRoute } from '../routes'

export const getAdminInviteRequestsApprovedListRouteHandler: RouteHandler<
  typeof getAdminInviteRequestsApprovedListRoute
> = async (c) => {
  throw new Error('Not implemented')
}
