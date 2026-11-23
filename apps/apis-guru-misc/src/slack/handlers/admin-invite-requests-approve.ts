import type { RouteHandler } from '@hono/zod-openapi'
import type { postAdminInviteRequestsApproveRoute } from '../routes'

export const postAdminInviteRequestsApproveRouteHandler: RouteHandler<
  typeof postAdminInviteRequestsApproveRoute
> = async (c) => {
  throw new Error('Not implemented')
}
