import type { RouteHandler } from '@hono/zod-openapi'
import type { getAdminUsergroupsListChannelsRoute } from '../routes'

export const getAdminUsergroupsListChannelsRouteHandler: RouteHandler<
  typeof getAdminUsergroupsListChannelsRoute
> = async (c) => {
  throw new Error('Not implemented')
}
