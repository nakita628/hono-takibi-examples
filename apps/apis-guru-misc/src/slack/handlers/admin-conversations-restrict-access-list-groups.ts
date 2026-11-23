import type { RouteHandler } from '@hono/zod-openapi'
import type { getAdminConversationsRestrictAccessListGroupsRoute } from '../routes'

export const getAdminConversationsRestrictAccessListGroupsRouteHandler: RouteHandler<
  typeof getAdminConversationsRestrictAccessListGroupsRoute
> = async (c) => {
  throw new Error('Not implemented')
}
