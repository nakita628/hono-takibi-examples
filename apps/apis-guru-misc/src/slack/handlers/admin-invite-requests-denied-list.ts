import type { RouteHandler } from '@hono/zod-openapi'
import type { getAdminInviteRequestsDeniedListRoute } from '../routes'

export const getAdminInviteRequestsDeniedListRouteHandler: RouteHandler<
  typeof getAdminInviteRequestsDeniedListRoute
> = async (c) => {
  throw new Error('Not implemented')
}
